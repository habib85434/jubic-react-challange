import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { ModalProps } from "../../data-types/jubic-data-types";
import { Button } from "./button";
import "./style.css";

export default function ModalRecordDisplayDetails({
  modalLabel = "",
  data,
}: ModalProps) {
  const [show, setShow] = useState<boolean>(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button label={modalLabel} handleClick={handleShow} />

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{data.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Description</h5>
          <p className="mb-5">{data.description}</p>

          <h5>Comment</h5>
          <p>{data.comment}</p>
        </Modal.Body>
        <Modal.Footer className="modal-footer">
          <Button label="Close" handleClick={handleClose} />
        </Modal.Footer>
      </Modal>
    </>
  );
}
