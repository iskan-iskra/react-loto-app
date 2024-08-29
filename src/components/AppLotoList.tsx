import { Col, Row } from "react-bootstrap";
import { TiLotoList } from "../types";
import AppLotoCard from "./AppLotoCard";
import { FC, memo } from "react";

type TiAppLotoListProps = {
  lotoList: TiLotoList;
  deleteLotoItem: (id: number) => () => void;
  regenerateLotoItem: (id: number) => () => void;
};

const AppLotoList: FC<TiAppLotoListProps> = memo(
  ({ lotoList, deleteLotoItem, regenerateLotoItem }) => (
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
  )
);

export default AppLotoList;
