import { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Button } from "../basic/button";
import { Input } from "../basic/input";
import { RecordDisplayTable } from "../basic/table-records-display";
import { tableHeader, DATA_NOT_FOUND } from "./consts";
import {
  JubicRecordType,
  inputChangeHandlerType,
} from "../../data-types/jubic-data-types";
import "./style.css";

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
  const [description, setDescription] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [data, setData] = useState<Array<JubicRecordType>>(
    getLocalStrogeData()
  );

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
      <div className="card cs-card mb-4">
        <div className="card-body">
          <form onSubmit={onSubmitHandler}>
            <Row className="mb-3">
              <Col md="3">
                <Input
                  inputLabel="Name"
                  lebelLength="col-md-3"
                  inputLength="col-md-9"
                  inputValue={name}
                  onChangeHandler={(e) => inputChangeHandler(setName, e)}
                />
              </Col>
              <Col md="9">
                <Input
                  inputLabel="Description"
                  lebelLength="col-md-2 desc-label"
                  inputLength="col-md-10"
                  inputValue={description}
                  onChangeHandler={(e) => inputChangeHandler(setDescription, e)}
                />
              </Col>
            </Row>
            <Row>
              <Col md="12">
                <Input
                  inputLabel="Comment"
                  lebelLength="col-md-1"
                  inputLength="col-md-11"
                  inputValue={comment}
                  onChangeHandler={(e) => inputChangeHandler(setComment, e)}
                />
              </Col>
            </Row>
            <Row className="mt-1">
              <Col className="text-right">
                <Button label="Clear" handleClick={clearFormData} />
                <Button label="Add" buttonType="submit" />
              </Col>
            </Row>
          </form>
        </div>
      </div>

      <div className="text-center">
        {data.length > 0 ? (
          <RecordDisplayTable
            tableHeader={tableHeader}
            tableData={data}
            removeRecord={removeItem}
          />
        ) : (
          <span>{DATA_NOT_FOUND}</span>
        )}
      </div>
    </>
  );
}
