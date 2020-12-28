import { CallbacksFor, Delete } from '@craftjs/utils';
import {
  EditorState,
  Indicator,
  NodeId,
  Node,
  Nodes,
  Options,
  NodeEventTypes,
  NodeTree,
  SerializedNodes,
} from '../interfaces';
declare const Methods: (
  state: EditorState,
  query: any
) => {
  /**
   * @private
   * Add a new linked Node to the editor.
   * Only used internally by the <Element /> component
   *
   * @param tree
   * @param parentId
   * @param id
   */
  addLinkedNodeFromTree(tree: NodeTree, parentId: NodeId, id: string): void;
  /**
   * Add a new Node to the editor.
   *
   * @param nodeToAdd
   * @param parentId
   * @param index
   */
  add(nodeToAdd: Node | Node[], parentId: NodeId, index?: number): void;
  /**
   * Add a NodeTree to the editor
   *
   * @param tree
   * @param parentId
   * @param index
   */
  addNodeTree(tree: NodeTree, parentId?: NodeId, index?: number): void;
  /**
   * Delete a Node
   * @param id
   */
  delete(id: NodeId): void;
  deserialize(input: SerializedNodes | string): void;
  /**
   * Move a target Node to a new Parent at a given index
   * @param targetId
   * @param newParentId
   * @param index
   */
  move(targetId: NodeId, newParentId: NodeId, index: number): void;
  replaceNodes(nodes: Nodes): void;
  clearEvents(): void;
  /**
   * Resets all the editor state.
   */
  reset(): void;
  /**
   * Set editor options via a callback function
   *
   * @param cb: function used to set the options.
   */
  setOptions(cb: (options: Partial<Options>) => void): void;
  setNodeEvent(eventType: NodeEventTypes, id: NodeId | null): void;
  /**
   * Set custom values to a Node
   * @param id
   * @param cb
   */
  setCustom<T extends string>(id: T, cb: (data: any) => void): void;
  /**
   * Given a `id`, it will set the `dom` porperty of that node.
   *
   * @param id of the node we want to set
   * @param dom
   */
  setDOM(id: NodeId, dom: HTMLElement): void;
  setIndicator(indicator: Indicator | null): void;
  /**
   * Hide a Node
   * @param id
   * @param bool
   */
  setHidden(id: NodeId, bool: boolean): void;
  /**
   * Update the props of a Node
   * @param id
   * @param cb
   */
  setProp(id: NodeId, cb: (props: any) => void): void;
  selectNode(nodeId?: NodeId | null): void;
};
export declare const ActionMethods: (
  state: EditorState,
  query: any
) => {
  setState(cb: (state: EditorState, actions: any) => void): void;
  /**
   * @private
   * Add a new linked Node to the editor.
   * Only used internally by the <Element /> component
   *
   * @param tree
   * @param parentId
   * @param id
   */
  addLinkedNodeFromTree(tree: NodeTree, parentId: NodeId, id: string): void;
  /**
   * Add a new Node to the editor.
   *
   * @param nodeToAdd
   * @param parentId
   * @param index
   */
  add(nodeToAdd: Node | Node[], parentId: NodeId, index?: number): void;
  /**
   * Add a NodeTree to the editor
   *
   * @param tree
   * @param parentId
   * @param index
   */
  addNodeTree(tree: NodeTree, parentId?: NodeId, index?: number): void;
  /**
   * Delete a Node
   * @param id
   */
  delete(id: NodeId): void;
  deserialize(input: SerializedNodes | string): void;
  /**
   * Move a target Node to a new Parent at a given index
   * @param targetId
   * @param newParentId
   * @param index
   */
  move(targetId: NodeId, newParentId: NodeId, index: number): void;
  replaceNodes(nodes: Nodes): void;
  clearEvents(): void;
  /**
   * Resets all the editor state.
   */
  reset(): void;
  /**
   * Set editor options via a callback function
   *
   * @param cb: function used to set the options.
   */
  setOptions(cb: (options: Partial<Options>) => void): void;
  setNodeEvent(eventType: NodeEventTypes, id: NodeId | null): void;
  /**
   * Set custom values to a Node
   * @param id
   * @param cb
   */
  setCustom<T extends string>(id: T, cb: (data: any) => void): void;
  /**
   * Given a `id`, it will set the `dom` porperty of that node.
   *
   * @param id of the node we want to set
   * @param dom
   */
  setDOM(id: NodeId, dom: HTMLElement): void;
  setIndicator(indicator: Indicator | null): void;
  /**
   * Hide a Node
   * @param id
   * @param bool
   */
  setHidden(id: NodeId, bool: boolean): void;
  /**
   * Update the props of a Node
   * @param id
   * @param cb
   */
  setProp(id: NodeId, cb: (props: any) => void): void;
  selectNode(nodeId?: NodeId | null): void;
};
export {};
