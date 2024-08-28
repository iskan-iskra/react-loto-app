import { useContext, useEffect, useState } from "react";
import { LotoContext } from "../context";
import { TiLotoReducer } from "../types";
import { LotoReducerAction } from "../consts";
import AppLotoCard from "./AppLotoCard";
import { Button, ButtonGroup, Col, Container, Row } from "react-bootstrap";

export default function AppLotoList() {
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
    <>
      <Container>
        <Row className="g-4">
          <Col lg={12}>
            <ButtonGroup>
              <Button onClick={addLotoItemHandler}>generate new loto</Button>
              <Button variant="warning" onClick={sortStateHandler}>
                sort by id {isReverseSort ? "↑" : "↓"}
              </Button>
              <Button variant="danger" onClick={clearLotoListHandler}>
                clear all
              </Button>
            </ButtonGroup>
          </Col>
          {sortedState.map((el) => (
            <Col key={el.id} lg={6} sm={12}>
              <AppLotoCard
                lotoItem={el}
                deleteLoto={deleteLotoItemHandler(el.id)}
                regenerateLoto={regenerateLotoItemHandler(el.id)}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
