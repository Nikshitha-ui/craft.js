import React from 'react';
import {
  NodeId,
  EditorState,
  Indicator,
  Node,
  Options,
  NodeTree,
  SerializedNodes,
  SerializedNode,
  FreshNode,
} from '../interfaces';
export declare function QueryMethods(
  state: EditorState
): {
  /**
   * Determine the best possible location to drop the source Node relative to the target Node
   */
  getDropPlaceholder: (
    source: NodeId | Node,
    target: NodeId,
    pos: {
      x: number;
      y: number;
    },
    nodesToDOM?: (node: Node) => HTMLElement
  ) => Indicator;
  /**
   * Get the current Editor options
   */
  getOptions(): Options;
  /**
   * Helper methods to describe the specified Node
   * @param id
   */
  node(
    id: NodeId
  ): {
    isCanvas(): boolean;
    isRoot(): boolean;
    isLinkedNode(): boolean;
    isTopLevelNode(): any;
    isDeletable(): boolean;
    isParentOfTopLevelNodes: () => boolean;
    isParentOfTopLevelCanvas(): any;
    get(): Node;
    ancestors(deep?: boolean): string[];
    descendants(
      deep?: boolean,
      includeOnly?: 'linkedNodes' | 'childNodes'
    ): string[];
    linkedNodes(): string[];
    childNodes(): string[];
    isDraggable(onError?: (err: string) => void): boolean;
    isDroppable(
      target: string | Node,
      onError?: (err: string) => void
    ): boolean;
    toSerializedNode(): SerializedNode;
    toNodeTree(
      includeOnly?: 'linkedNodes' | 'childNodes'
    ): {
      rootNodeId: string;
      nodes: any;
    };
    decendants(deep?: boolean): any;
    isTopLevelCanvas(): boolean;
  };
  /**
   * Returns all the `nodes` in a serialized format
   */
  getSerializedNodes(): SerializedNodes;
  /**
   * Retrieve the JSON representation of the editor's Nodes
   */
  serialize(): string;
  parseReactElement: (
    reactElement: React.ReactElement
  ) => {
    toNodeTree(
      normalize?: (node: Node, jsx: React.ReactElement) => void
    ): NodeTree;
  };
  parseSerializedNode: (
    serializedNode: SerializedNode
  ) => {
    toNode(normalize?: (node: Node) => void): Node;
  };
  parseFreshNode: (
    node: FreshNode
  ) => {
    toNode(normalize?: (node: Node) => void): Node;
  };
  createNode(reactElement: React.ReactElement, extras?: any): any;
  getState(): EditorState;
};
