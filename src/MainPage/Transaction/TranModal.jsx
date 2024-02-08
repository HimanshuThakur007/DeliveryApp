/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useLocation } from "react-router-dom";

const TranModal = ({
  buttonText,
  modalTitle,
  modalContent,
  onSave,
  onHide,
  selectedCompList,
}) => {
  const [show, setShow] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Check if the current location is /delivery/transaction/assign_to
    setShow(location.pathname === "/delivery/transaction/assign_to");
  }, [location.pathname]);

  const handleClose = () => {
    setShow(false);
    onHide();
  };

  const handleShow = () => setShow(true);

  const handleSave = () => {
    if (selectedCompList === null) {
      onSave();
      setShow(true);
    } else {
      handleClose();
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        {buttonText || "+"}
      </Button>

      <Modal show={show} onHide={handleClose} centered backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle || "Modal Title"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalContent || "Modal Content Goes Here"}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TranModal;
