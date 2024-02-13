import React from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Figure,
  Image,
  Modal,
  Row,
} from "react-bootstrap";

const UserModal = ({ show, onHide, user }) => {
  return (
    <div>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>User info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <div className="user-d">
            <div>fffff</div>
            <div>coooool</div>
          </div> */}
          <Container>
            <Row>
              <Col xs={6} md={4}>
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title>
                      {user?.first_name}- {user?.last_name}
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {user?.email}
                    </Card.Subtitle>
                    <Card.Text>
                      <span>username : {user?.username}</span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UserModal;
