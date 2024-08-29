import { Dispatch } from "react";
import { LotoReducerAction } from "../consts";

export type TiLotoReducerState = {
  items: TiLotoList;
  existingHashes: Set<number>;
};

export type TiLotoReducerAction = {
  type: LotoReducerAction;
  payload?: number;
};

export type TiLotoRow = Array<number | null>;

export type TiLoto = TiLotoRow[];

export type TiLotoItem = {
  id: number;
  value: TiLoto;
};

export type TiLotoList = TiLotoItem[];

export type TiLotoReducer = {
  state: TiLotoReducerState;
  dispatch: Dispatch<TiLotoReducerAction>;
};
