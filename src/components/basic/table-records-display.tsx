import React from "react";
import { DisplayTableProps } from "../../data-types/jubic-data-types";
import { Button } from "./button";
import ModalRecordDisplayDetails from "./modal-record-display-details";
import "./style.css";

export function RecordDisplayTable({
  tableHeader,
  tableData,
  removeRecord,
}: DisplayTableProps) {
  const headerList = tableHeader.map((item, index) => (
    <th key={index}>{item}</th>
  ));

  const list = tableData.map((data) => (
    <tr key={data.id}>
      <td>{data.name}</td>
      <td>{data.description}</td>
      <td>
        <span onClick={() => removeRecord(data.id)}>
          <Button label="Delete" />
        </span>

        <span>
          <ModalRecordDisplayDetails modalLabel="Details" data={data} />
        </span>
      </td>
    </tr>
  ));
  return (
    <>
      <table className="table cs-table">
        <thead className="cs-table-head">
          <tr>{headerList}</tr>
        </thead>
        <tbody>{list}</tbody>
      </table>
    </>
  );
}
