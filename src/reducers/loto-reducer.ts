import { LotoReducerAction } from "../consts";
import { TiLotoReducerAction, TiLotoReducerState, TiLotoItem } from "../types";
import { generateUniqueArrays } from "../tools";

export default function lotoReducer(
  state: TiLotoReducerState,
  action: TiLotoReducerAction
): TiLotoReducerState {
  switch (action.type) {
    case LotoReducerAction.ADD_ITEM: {
      const { arrays, hash } = generateUniqueArrays(state.existingHashes);
      const newId = state.items.length
        ? state.items[state.items.length - 1].id + 1
        : 0;
      const newItem: TiLotoItem = { id: newId, value: arrays };

      return {
        items: [...state.items, newItem],
        existingHashes: new Set(state.existingHashes).add(hash),
      };
    }

    case LotoReducerAction.DELETE_ITEM_BY_ID: {
      return {
        ...state,
        items: state.items.filter((el) => el.id !== action.payload),
      };
    }

    case LotoReducerAction.REGENERATE_ITEM_BY_ID: {
      const { arrays, hash } = generateUniqueArrays(state.existingHashes);
      const newItems = state.items.map((el) =>
        el.id === action.payload ? { ...el, value: arrays } : el
      );

      return {
        items: newItems,
        existingHashes: new Set(state.existingHashes).add(hash),
      };
    }

    case LotoReducerAction.CLEAR_ALL:
      return {
        items: [],
        existingHashes: new Set<number>(),
      };

    default:
      return state;
  }
}
