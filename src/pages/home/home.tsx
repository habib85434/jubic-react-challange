import React from "react";
import { Button } from "../../components/basic/button";
import { Input } from "../../components/basic/input";
import ModalRecordDisplayDetails from "../../components/basic/modal-record-display-details";

export function Home() {
  let record = { id: 1, name: "Habib", description: "jojo", comment: "No no" };
  return (
    <div>
      <Input inputLabel="Test" inputValue={"hello"} />
      <Button label="Test" />
      <ModalRecordDisplayDetails modalLabel="Test" data={record} />
    </div>
  );
}
