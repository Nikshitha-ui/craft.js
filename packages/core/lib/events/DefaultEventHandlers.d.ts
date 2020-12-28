import { CoreEventHandlers } from './CoreEventHandlers';
import { Indicator, NodeId, NodeTree } from '../interfaces';
import { CraftDOMEvent } from '../utils/Handlers';
export * from '../utils/Handlers';
declare type DraggedElement = NodeId | NodeTree;
/**
 * Specifies Editor-wide event handlers and connectors
 */
export declare class DefaultEventHandlers extends CoreEventHandlers {
  static draggedElementShadow: HTMLElement;
  static draggedElement: DraggedElement;
  static indicator: Indicator;
  defineNodeEventListener(
    eventName: string,
    handler: (e: CraftDOMEvent<Event>, id: NodeId) => void,
    capture?: boolean
  ): import('../utils/Handlers').CraftEventListener;
  handlers(): {
    select: {
      init: () => () => any;
      events: import('../utils/Handlers').CraftEventListener[];
    };
    hover: {
      init: () => () => any;
      events: import('../utils/Handlers').CraftEventListener[];
    };
    drop: {
      events: import('../utils/Handlers').CraftEventListener[];
    };
    drag: {
      init: (el: any, id: any) => () => void;
      events: import('../utils/Handlers').CraftEventListener[];
    };
    create: {
      init: (el: any) => () => any;
      events: import('../utils/Handlers').CraftEventListener[];
    };
  };
  private dropElement;
}
