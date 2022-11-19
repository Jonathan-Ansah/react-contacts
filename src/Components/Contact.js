import React, { useState } from "react";
import { Card, Col, Button, Modal } from "react-bootstrap"
import EditContact from "./EditContact";

const Contact = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = (e) => {
    e.preventDefault();
    props.deleteUser(props.userInfo.id);
    console.log("item deleted");
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Contacts</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditContact
            userInfo={props.userInfo}
            editUser={props.editUser}
            closeModal={handleClose}
          />
        </Modal.Body>
      </Modal>

      <Col md="4">
        <Card style={{ width: "", marginBottom: "2rem" }}>
          <Card.Body>
            
            <Card.Title>{props.userInfo.name}</Card.Title>
            <Card.Text>
              <p>Number: {props.userInfo.number}</p>
              <p>Location: {props.userInfo.location}</p>
            </Card.Text>
            <Button size="sm" onClick={handleShow}>
              Edit
            </Button>
            <Button
              variant="danger"
              size="sm"
              style={{ marginLeft: "10px" }}
              onClick={handleDelete}
            >
              Delete
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Contact;