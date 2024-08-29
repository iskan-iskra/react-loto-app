import { Table } from "react-bootstrap";
import { TiLoto } from "../types";
import { FC, memo } from "react";

type TiAppLotoTableProps = {
  lotoTable: TiLoto;
};

const AppLotoTable: FC<TiAppLotoTableProps> = memo(({ lotoTable }) => (
  <Table bordered>
    <tbody>
      {lotoTable.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {row.map((cell, cellIndex) => (
            <td className="text-center app-loto-table-cell" key={cellIndex}>
              {cell || "-"}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </Table>
));
export default AppLotoTable;
