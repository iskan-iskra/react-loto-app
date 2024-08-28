import { useContext, useEffect, useState } from "react";
import { LotoContext } from "../context";
import { TiLotoReducer } from "../types";
import { LotoReducerAction } from "../consts";
import { Container, Stack } from "react-bootstrap";
import AppLotoList from "./AppLotoList";
import AppLotoHeader from "./AppLotoHeader";

export default function AppLotoWidjet() {
  const { state, dispatch } = useContext(LotoContext) as TiLotoReducer;

  const [isReverseSort, setReverseSort] = useState<boolean>(false);

  const [sortedState, setSortedState] = useState<TiLotoReducer["state"]>(state);

  useEffect(() => {
    if (isReverseSort) {
      setSortedState([...state].sort((a, b) => a.id - b.id));
    } else {
      setSortedState([...state].sort((a, b) => b.id - a.id));
    }
  }, [state, isReverseSort]);

  const sortStateHandler = () => setReverseSort((v) => !v);

  const addLotoItemHandler = () =>
    dispatch({ type: LotoReducerAction.ADD_ITEM });

  const deleteLotoItemHandler = (id: number) => () =>
    dispatch({ type: LotoReducerAction.DELETE_ITEM_BY_ID, payload: id });

  const regenerateLotoItemHandler = (id: number) => () =>
    dispatch({ type: LotoReducerAction.REGENERATE_ITEM_BY_ID, payload: id });

  const clearLotoListHandler = () =>
    dispatch({ type: LotoReducerAction.CLEAR_ALL });

  return (
    <Container>
      <Stack gap={4}>
        <AppLotoHeader
          sortState={sortStateHandler}
          addLotoItem={addLotoItemHandler}
          clearLotoList={clearLotoListHandler}
          isReverseSort={isReverseSort}
        />
        <AppLotoList
          lotoList={sortedState}
          deleteLotoItem={deleteLotoItemHandler}
          regenerateLotoItem={regenerateLotoItemHandler}
        />
      </Stack>
    </Container>
  );
}
