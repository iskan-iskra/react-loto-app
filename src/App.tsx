import { useReducer } from "react";
import { AppHeader, AppLotoWidjet } from "./components";
import { lotoReducer } from "./reducers";
import { LotoContext } from "./context";
export default function App() {
  const [state, dispatch] = useReducer(lotoReducer, []);

  return (
    <>
      <LotoContext.Provider value={{ state, dispatch }}>
        <AppHeader />
        <main className="p-4 overflow-y-scroll">
          <AppLotoWidjet />
        </main>
      </LotoContext.Provider>
    </>
  );
}
