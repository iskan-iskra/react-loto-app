import { useContext } from "react";
import { LotoContext } from "../context";
import { TiLotoReducer } from "../types";
import { LotoReducerAction } from "../consts";
import AppLotoCard from "./AppLotoCard";
import { Button, Col, Container, Row } from "react-bootstrap";

export default function AppLotoList() {
  const { state, dispatch } = useContext(LotoContext) as TiLotoReducer;

  const addLotoItemHandler = () =>
    dispatch({ type: LotoReducerAction.ADD_ITEM });

  const deleteLotoItemHandler = (id: number) => () =>
    dispatch({ type: LotoReducerAction.DELETE_ITEM_BY_ID, payload: id });

  const regenerateLotoItemHandler = (id: number) => () =>
    dispatch({ type: LotoReducerAction.REGENERATE_ITEM_BY_ID, payload: id });

  return (
    <>
      <Container>
        <Row className="g-4">
          <Col lg={12}>
            <Button onClick={addLotoItemHandler}>generate new loto</Button>
          </Col>
          {state.map((el) => (
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
