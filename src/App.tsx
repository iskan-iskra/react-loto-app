import { useReducer } from "react";
import { AppHeader, AppLotoWidjet } from "./components";
import { lotoReducer } from "./reducers";
import { LotoContext } from "./context";
import { TiLotoReducerState } from "./types";

const initialState: TiLotoReducerState = {
  items: [],
  existingHashes: new Set<number>(),
};

export default function App() {
  const [state, dispatch] = useReducer(lotoReducer, initialState);

  const contextValue = { state, dispatch };

  return (
    <>
      <LotoContext.Provider value={contextValue}>
        <AppHeader />
        <main className="p-4 overflow-y-auto">
          <AppLotoWidjet />
        </main>
      </LotoContext.Provider>
    </>
  );
}
