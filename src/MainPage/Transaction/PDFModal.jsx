/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useLocation, useNavigate } from "react-router-dom";
import {BsFiletypePdf,BsFileEarmarkPdfFill} from 'react-icons/bs';
import Slogo from '../../assets/images/shantiLogo1.png'

const PDFModal = ({
  buttonText,
  modalTitle,
  modalContent,
  onSave,
  onHide,
  showModal, // Prop to control modal visibility
  selectedCompList,
  targetRef,
  toPDF
}) => {
  const [show, setShow] = useState(false);
  const location = useLocation();
  let iconStyles = { color: "red", cursor:'pointer'};
  const navigate = useNavigate()
  // Use useEffect to automatically open the modal when showModal prop changes to true
  useEffect(() => {
    setShow(showModal);
  }, [showModal]);

  const handleClose = () => {
    setShow(false);
    navigate('/delivery/dashboard')
    onHide();
  };

  const handleSave = () => {
    onSave();
    setShow(false); // Close the modal after saving
  };
  const getModalContent = () => {
    const modalContentElement = document.createElement("div");
    modalContentElement.innerHTML = modalContent;
    return modalContentElement;
  };

  return (
    <>
      {/* Render the modal trigger button if buttonText prop is provided */}
      {/* {buttonText && (
        <Button variant="primary" onClick={handleShow}>
          {buttonText}
        </Button>
      )} */}

      <Modal
        show={show}
        onHide={handleClose}
        centered
        size="lg"
        backdrop="static"
        keyboard={false}
      >
        {/* <div className="col-12 d-flex justify-content-end">
        <span onClick={toPDF}><BsFileEarmarkPdfFill size={30} style={iconStyles}/></span>
        </div> */}
        <div ref={targetRef}>
          <Modal.Header closeButton>
            <div className="login-logo">
              <img src={Slogo} alt="img" style={{ width: "10vh" }} />
            </div>
            <div className="text-center w-100">
              <h6>{"ॐ"}</h6>
              <h3 style={{ fontWeight: "bold" }}>
                {modalTitle || "Modal Title"}
              </h3>
              <p
                style={{
                  fontSize: "x-small",
                  fontWeight: "bold",
                  textDecoration: "underline",
                }}
              >
                {"GATE PASS CUM TRIP SHEET"}
              </p>
            </div>
            {/* <Modal.Title>{modalTitle || "Modal Title"}</Modal.Title> */}
          </Modal.Header>
          <Modal.Body>{modalContent || "Modal Content Goes Here"}</Modal.Body>
        </div>
        <Modal.Footer>
          {/* <div className="col-lg-12 d-flex justify-content-between"> */}
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <span onClick={toPDF}><BsFileEarmarkPdfFill size={30} style={iconStyles}/></span> */}
          {/* </div> */}
          <Button variant="primary" onClick={toPDF}>
            Download PDF
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PDFModal;
