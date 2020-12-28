import { SubscriberAndCallbacksFor } from '@craftjs/utils';
import { QueryMethods } from './query';
import { EditorState, Options } from '../interfaces';
export declare const editorInitialState: EditorState;
export declare const ActionMethodsWithConfig: {
  methods: (
    state: EditorState,
    query: any
  ) => {
    setState(cb: (state: EditorState, actions: any) => void): void;
    addLinkedNodeFromTree(
      tree: import('../interfaces').NodeTree,
      parentId: string,
      id: string
    ): void;
    add(
      nodeToAdd: import('../interfaces').Node | import('../interfaces').Node[],
      parentId: string,
      index?: number
    ): void;
    addNodeTree(
      tree: import('../interfaces').NodeTree,
      parentId?: string,
      index?: number
    ): void;
    delete(id: string): void;
    deserialize(
      input: string | Record<string, import('../interfaces').SerializedNode>
    ): void;
    move(targetId: string, newParentId: string, index: number): void;
    replaceNodes(nodes: Record<string, import('../interfaces').Node>): void;
    clearEvents(): void;
    reset(): void;
    setOptions(cb: (options: Partial<Options>) => void): void;
    setNodeEvent(
      eventType: import('../interfaces').NodeEventTypes,
      id: string
    ): void;
    setCustom<T extends string>(id: T, cb: (data: any) => void): void;
    setDOM(id: string, dom: HTMLElement): void;
    setIndicator(indicator: import('../interfaces').Indicator): void;
    setHidden(id: string, bool: boolean): void;
    setProp(id: string, cb: (props: any) => void): void;
    selectNode(nodeId?: string): void;
  };
  ignoreHistoryForActions: readonly [
    'setDOM',
    'setNodeEvent',
    'selectNode',
    'clearEvents',
    'setOptions',
    'setIndicator'
  ];
  normalizeHistory: (state: any) => void;
};
export declare type EditorStore = SubscriberAndCallbacksFor<
  typeof ActionMethodsWithConfig,
  typeof QueryMethods
>;
export declare const useEditorStore: (options: Partial<Options>) => any;
