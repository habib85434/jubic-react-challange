import { useState, useEffect } from "react";
import { Button } from "../basic/button";
import { Input } from "../basic/input";
import { RecordDisplayTable } from "../basic/table-records-display";
import { tableHeader } from "./consts";
import {
  JubicRecordType,
  inputChangeHandlerType,
} from "../../data-types/jubic-data-types";

export function RecordCRD() {
  const getLocalStrogeData = (): Array<JubicRecordType> => {
    if (localStorage.getItem("jubic_records")) {
      return JSON.parse(
        localStorage.getItem("jubic_records") || "No record found"
      );
    } else {
      return [];
    }
  };

  const [id, setId] = useState<number>(1);
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState("");
  const [comment, setComment] = useState("");
  const [data, setData] = useState(getLocalStrogeData());

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addNewRecord();
  };

  const inputChangeHandler = (
    setMethod: inputChangeHandlerType,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setMethod(e.currentTarget.value);
  };

  const clearFormData = () => {
    setName("");
    setDescription("");
    setComment("");
  };

  const addNewRecord = () => {
    setId(id + 1);
    const newData = { id, name, description, comment };
    if (newData.name) {
      setData([...data, newData]);
    }
  };

  useEffect(() => {
    localStorage.setItem("jubic_records", JSON.stringify(data));
    console.log("TYPE OF : ");
    console.log(typeof data);
  }, [data]);

  const removeItem = (id: number) => {
    setData((current) =>
      current.filter((data) => {
        return data.id !== id;
      })
    );
  };

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <Input
          inputLabel="Name"
          inputValue={name}
          onChangeHandler={(e) => inputChangeHandler(setName, e)}
        />

        <Input
          inputLabel="Description"
          inputValue={description}
          onChangeHandler={(e) => inputChangeHandler(setDescription, e)}
        />
        <Input
          inputLabel="Comment"
          inputValue={comment}
          onChangeHandler={(e) => inputChangeHandler(setComment, e)}
        />

        <Button label="Add" buttonType="submit" />
        <Button label="Clear" handleClick={clearFormData} />
      </form>
      <div>
        <RecordDisplayTable
          tableHeader={tableHeader}
          tableData={data}
          removeRecord={removeItem}
        />
      </div>
    </>
  );
}
