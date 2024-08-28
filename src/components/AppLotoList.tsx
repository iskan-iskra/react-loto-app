import { Col, Row } from "react-bootstrap";
import { TiLotoList } from "../types";
import AppLotoCard from "./AppLotoCard";

type TiAppLotoListProps = {
  lotoList: TiLotoList;
  deleteLotoItem: (id: number) => () => void;
  regenerateLotoItem: (id: number) => () => void;
};

export default function AppLotoList({
  lotoList,
  deleteLotoItem,
  regenerateLotoItem,
}: TiAppLotoListProps) {
  return (
    <Row className="g-4">
      {lotoList.map((el) => (
        <Col key={el.id} lg={6} sm={12}>
          <AppLotoCard
            lotoItem={el}
            deleteLoto={deleteLotoItem(el.id)}
            regenerateLoto={regenerateLotoItem(el.id)}
          />
        </Col>
      ))}
    </Row>
  );
}
