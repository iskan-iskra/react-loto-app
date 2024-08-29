import { FC, memo } from "react";
import { Button, ButtonGroup } from "react-bootstrap";

type TiAppLotoTableActionsProps = {
  regenerateLoto: () => void;
  deleteLoto: () => void;
};

const AppLotoTableActions: FC<TiAppLotoTableActionsProps> = memo(
  ({ regenerateLoto, deleteLoto }) => (
    <ButtonGroup className="ms-auto">
      <Button variant="warning" onClick={regenerateLoto}>
        regenerate
      </Button>
      <Button variant="danger" onClick={deleteLoto}>
        delete
      </Button>
    </ButtonGroup>
  )
);

export default AppLotoTableActions;
