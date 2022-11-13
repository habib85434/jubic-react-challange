import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { ModalProps } from "../../data-types/jubic-data-types";
import { Button } from "./button";

export default function ModalRecordDisplayDetails({
  modalLabel = "",
  data,
}: ModalProps) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button label={modalLabel} handleClick={handleShow} />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{data.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-header">
          <p>{data.description}</p>
        </Modal.Body>
        <Modal.Footer className="modal-footer">
          <Button label="Close" handleClick={handleClose} />
        </Modal.Footer>
      </Modal>
    </>
  );
}
