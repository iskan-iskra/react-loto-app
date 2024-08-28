import { Card, Stack } from "react-bootstrap";
import { TiLotoItem } from "../types";
import AppLotoTable from "./AppLotoTable";
import AppLotoTableActions from "./AppLotoTableActions";

type TiAppLotoCardProps = {
  lotoItem: TiLotoItem;
  regenerateLoto: () => void;
  deleteLoto: () => void;
};

export default function AppLotoCard({
  lotoItem,
  regenerateLoto,
  deleteLoto,
}: TiAppLotoCardProps) {
  return (
    <>
      <Card>
        <Card.Header>
          <Stack direction="horizontal">
            <div>{`Loto card with id: ${lotoItem?.id}`}</div>
            <AppLotoTableActions
              deleteLoto={deleteLoto}
              regenerateLoto={regenerateLoto}
            />
          </Stack>
        </Card.Header>
        <Card.Body>
          <AppLotoTable lotoTable={lotoItem?.value} />
        </Card.Body>
      </Card>
    </>
  );
}
