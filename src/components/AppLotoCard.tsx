import { Button, ButtonGroup, Card, Stack, Table } from "react-bootstrap";
import { TiLotoItem } from "../types";

export default function AppLotoCard({
  lotoItem,
  regenerateLoto,
  deleteLoto,
}: {
  lotoItem?: TiLotoItem;
  regenerateLoto: () => void;
  deleteLoto: () => void;
}) {
  return (
    <>
      <Card>
        <Card.Header>
          <Stack direction="horizontal">
            <div>{`Loto card with id: ${lotoItem?.id}`}</div>
            <ButtonGroup className="ms-auto">
              <Button variant="warning" onClick={regenerateLoto}>
                regenerate
              </Button>
              <Button variant="danger" onClick={deleteLoto}>
                delete
              </Button>
            </ButtonGroup>
          </Stack>
        </Card.Header>
        <Card.Body>
          <Table bordered>
            <tbody>
              {lotoItem?.value.map((el, index) => (
                <tr key={index}>
                  {el.map((el, index) => (
                    <td className="text-center" key={index}>
                      {el || "-"}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </>
  );
}
