import { Card, Stack } from "react-bootstrap";
import { TiLotoItem } from "../types";
import AppLotoTable from "./AppLotoTable";
import AppLotoTableActions from "./AppLotoTableActions";
import { memo, useCallback, FC } from "react";

type TiAppLotoCardProps = {
  lotoItem: TiLotoItem;
  regenerateLoto: () => void;
  deleteLoto: () => void;
};

const AppLotoCard: FC<TiAppLotoCardProps> = memo(
  ({ lotoItem, regenerateLoto, deleteLoto }) => {
    const regenerateHandler = useCallback(() => {
      regenerateLoto();
    }, [regenerateLoto]);

    const deleteHandler = useCallback(() => {
      deleteLoto();
    }, [deleteLoto]);

    return (
      <Card>
        <Card.Header>
          <Stack direction="horizontal">
            <div>{`Loto card with id: ${lotoItem.id}`}</div>
            <AppLotoTableActions
              deleteLoto={deleteHandler}
              regenerateLoto={regenerateHandler}
            />
          </Stack>
        </Card.Header>
        <Card.Body>
          <AppLotoTable lotoTable={lotoItem.value} />
        </Card.Body>
      </Card>
    );
  }
);

export default AppLotoCard;
