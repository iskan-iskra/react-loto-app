import { FC, memo } from "react";
import { Button, ButtonGroup, Col, Row } from "react-bootstrap";

type TiAppLotoHeaderProps = {
  addLotoItem: () => void;
  sortState: () => void;
  isReverseSort: boolean;
  clearLotoList: () => void;
};

const AppLotoHeader: FC<TiAppLotoHeaderProps> = memo(
  ({ addLotoItem, sortState, isReverseSort, clearLotoList }) => (
    <Row className="g-4">
      <Col lg={12}>
        <ButtonGroup>
          <Button variant="primary" onClick={addLotoItem}>
            generate new loto
          </Button>
          <Button variant="warning" onClick={sortState}>
            sort by id {isReverseSort ? "↓" : "↑"}
          </Button>
          <Button variant="danger" onClick={clearLotoList}>
            clear all
          </Button>
        </ButtonGroup>
      </Col>
    </Row>
  )
);

export default AppLotoHeader;
