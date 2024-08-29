import { useCallback, useContext, useMemo, useState } from "react";
import { LotoContext } from "../context";
import { TiLotoReducer } from "../types";
import { LotoReducerAction } from "../consts";
import { Container, Stack } from "react-bootstrap";
import AppLotoList from "./AppLotoList";
import AppLotoHeader from "./AppLotoHeader";

export default function AppLotoWidjet() {
  const { state, dispatch } = useContext(LotoContext) as TiLotoReducer;

  const [isReverseSort, setReverseSort] = useState<boolean>(false);

  const sortedState = useMemo(() => {
    return [...state.items].sort((a, b) =>
      isReverseSort ? a.id - b.id : b.id - a.id
    );
  }, [state, isReverseSort]);

  const sortStateHandler = useCallback(() => setReverseSort((v) => !v), []);

  const addLotoItemHandler = useCallback(() => {
    dispatch({ type: LotoReducerAction.ADD_ITEM });
  }, [dispatch]);

  const deleteLotoItemHandler = useCallback(
    (id: number) => () => {
      dispatch({ type: LotoReducerAction.DELETE_ITEM_BY_ID, payload: id });
    },
    [dispatch]
  );

  const regenerateLotoItemHandler = useCallback(
    (id: number) => () => {
      dispatch({ type: LotoReducerAction.REGENERATE_ITEM_BY_ID, payload: id });
    },
    [dispatch]
  );

  const clearLotoListHandler = useCallback(() => {
    dispatch({ type: LotoReducerAction.CLEAR_ALL });
  }, [dispatch]);

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
