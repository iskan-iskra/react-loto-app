import { Table } from "react-bootstrap";
import { TiLoto } from "../types";

type TiAppLotoTableProps = {
  lotoTable: TiLoto;
};

export default function AppLotoTable({ lotoTable }: TiAppLotoTableProps) {
  return (
    <Table bordered style={{ maxWidth: "100%" }}>
      <tbody>
        {lotoTable.map((el, index) => (
          <tr key={index}>
            {el.map((el, index) => (
              <td className="text-center app-loto-table-cell" key={index}>
                {el || "-"}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
