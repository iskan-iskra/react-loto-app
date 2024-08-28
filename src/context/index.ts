import { createContext } from "react";
import { TiLotoReducer } from "../types";

export const LotoContext = createContext(
  undefined as TiLotoReducer | undefined
);
