import { Button, ButtonGroup } from "react-bootstrap";

type TiAppLotoTableActionsProps = {
  regenerateLoto: () => void;
  deleteLoto: () => void;
};

export default function AppLotoTableActions({
  regenerateLoto,
  deleteLoto,
}: TiAppLotoTableActionsProps) {
  return (
    <ButtonGroup className="ms-auto">
      <Button variant="warning" onClick={regenerateLoto}>
        regenerate
      </Button>
      <Button variant="danger" onClick={deleteLoto}>
        delete
      </Button>
    </ButtonGroup>
  );
}
