import { LotoReducerAction } from "../consts";
import { TiLotoReducerAction, TiLotoReducerState } from "../types";
import { generateUniqueArrays } from "../tools";
import { TiLotoItem } from "../types";

export default function lotoReducer(
  state: TiLotoReducerState,
  action: TiLotoReducerAction
) {
  const existingHashes: Set<number> = new Set();

  switch (action.type) {
    case LotoReducerAction.ADD_ITEM:
      return [
        ...state,
        {
          id: state.length ? state[state.length - 1].id + 1 : 0,
          value: generateUniqueArrays(existingHashes).arrays,
        } as TiLotoItem,
      ];
    case LotoReducerAction.DELETE_ITEM_BY_ID:
      return state.filter((el) => el.id !== action.payload);
    case LotoReducerAction.REGENERATE_ITEM_BY_ID:
      return state.map((el) =>
        el.id === action.payload
          ? { ...el, value: generateUniqueArrays(existingHashes).arrays }
          : el
      );
    case LotoReducerAction.CLEAR_ALL:
      return [];
    default:
      return [...state];
  }
}
