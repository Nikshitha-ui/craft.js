import { createBaseSlateState } from './fixtures';

import { getSplitTransfers } from '../getSplitTransfers';

let operations;

const testSplitState = (state) => {
  return getSplitTransfers(createBaseSlateState(state), 'SLATE', [
    'Typography',
    'List',
    'ListItem',
    'Text',
  ]);
};

describe('splitSlate', () => {
  beforeAll(() => {
    operations = testSplitState([
      {
        id: 'T1',
        data: {
          type: 'Typography',
          nodes: [
            {
              id: 'TT1',
              data: {
                type: 'Text',
                props: {
                  text: 'Hello',
                },
              },
            },
          ],
        },
      },
      {
        id: 'B1',
        data: {
          type: 'Button',
        },
      },
      {
        id: 'L1',
        data: {
          type: 'List',
          nodes: [
            {
              id: 'LL1',
              data: {
                type: 'ListItem',
                nodes: [
                  {
                    id: 'TT2',
                    data: {
                      type: 'Text',
                      props: {
                        text: 'ListItem-Text',
                      },
                    },
                  },
                  {
                    id: 'L2',
                    data: {
                      type: 'List',
                      nodes: [
                        {
                          id: 'LL2',
                          data: {
                            type: 'ListItem',
                            nodes: [
                              {
                                id: 'TT3',
                                data: {
                                  type: 'Text',
                                  props: {
                                    text: 'ListItem-ListItem-Text',
                                  },
                                },
                              },
                              {
                                id: 'B2',
                                data: {
                                  type: 'Button',
                                },
                              },
                              {
                                id: 'TT4',
                                data: {
                                  type: 'Text',
                                  props: {
                                    text: 'ListItem-ListItem-Text2',
                                  },
                                },
                              },
                            ],
                          },
                        },
                      ],
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    ]);
  });
  it('should have expelled non-Slate node', () => {
    expect(operations[0]).toEqual({
      type: 'expel',
      id: 'B1',
    });
  });
  it('should have created a new Slate tree for next Slate nodes', () => {
    expect(operations[1]).toEqual({
      type: 'insert_tree',
      tree: {
        SLATE: {
          id: 'SLATE',
          expelled: false,
          nodes: ['L1'],
        },
        L1: {
          id: 'L1',
          expelled: true,
          nodes: ['LL1'],
        },
        LL1: {
          id: 'LL1',
          expelled: true,
          nodes: ['TT2', 'L2'],
        },
        TT2: {
          id: 'TT2',
          expelled: true,
          nodes: [],
        },
        L2: {
          id: 'L2',
          expelled: true,
          nodes: ['LL2'],
        },
        LL2: {
          id: 'LL2',
          expelled: true,
          nodes: ['TT3'],
        },
        TT3: {
          id: 'TT3',
          expelled: true,
          nodes: [],
        },
      },
    });
  });
  it('should expel nested non-Slate node', () => {
    expect(operations[2]).toEqual({
      type: 'expel',
      id: 'B2',
    });
  });
  it('should have created a new Slate tree for the remaining Slate nodes', () => {
    expect(operations[3]).toEqual({
      type: 'insert_tree',
      tree: {
        SLATE: {
          id: 'SLATE',
          expelled: false,
          nodes: ['L1'],
        },
        L1: {
          id: 'L1',
          expelled: true,
          nodes: ['LL1'],
        },
        LL1: {
          id: 'LL1',
          expelled: true,
          nodes: ['L2'],
        },

        L2: {
          id: 'L2',
          expelled: true,
          nodes: ['LL2'],
        },
        LL2: {
          id: 'LL2',
          expelled: true,
          nodes: ['TT4'],
        },
        TT4: {
          id: 'TT4',
          expelled: true,
          nodes: [],
        },
      },
    });
  });
});
