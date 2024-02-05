import React from "react";
import {
  Badge,
  Button,
  Col,
  Container,
  Form,
  Nav,
  NavDropdown,
  Navbar,
  Offcanvas,
  Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faDiagramProject,
  faGear,
  faList,
  faPersonArrowDownToLine,
  faPowerOff,
  faRectangleList,
  faTicket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import SideBarData from "./AdminComp/SideBarData";
import Dashboard from "./AdminComp/Dashboard";
import ManageRole from "./AdminComp/ManageRole";
import ManageUser from "./AdminComp/ManageUser";
import MyProjects from "./AdminComp/MyProjects";
import MyTickets from "./AdminComp/MyTickets";
import NavbarHoc from "../hoc/NavbarHoc";
import EnhancedHomeScreen from "../screen/HomeScreen";

const Header = (props) => {
  // console.log("SelectedidebarItem in Header", typeof props.selectedSideBarItem);
  // console.log("value in Header", props.value);
  // console.log("nndmmdd", props.selectedSideBarItem[props.value]);
  return (
    <>
      {[false].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="bg-body-tertiary mb-3 large"
        >
          <Container fluid>
            <div>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Brand href="#" className="log-x">
                LOGISTIC
              </Navbar.Brand>
            </div>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-primary">Search</Button>
            </Form>
            <Row className="yello">
              <Col>
                <Nav.Link href="#notification">Notification</Nav.Link>
              </Col>
              <Col>
                <NavDropdown
                  title={`${props.userInfo?.first_name}-${props.userInfo?.last_name}`}
                  id="collapsible-nav-dropdown"
                >
                  <NavDropdown.Item href="#action/3.2">
                    <FontAwesomeIcon icon={faUser} className="mr-icon" />
                    profile
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    <FontAwesomeIcon icon={faGear} className="mr-icon" />
                    Settings
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    <FontAwesomeIcon icon={faPowerOff} className="mr-icon" />
                    Log out
                  </NavDropdown.Item>
                </NavDropdown>
              </Col>
              <Col>
                <Nav.Link>
                  {props.userInfo?.isAdmin ? (
                    <Badge bg="info">Admin</Badge>
                  ) : (
                    <Badge bg="secondary">user</Badge>
                  )}
                </Nav.Link>
              </Col>
            </Row>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  LOGISTIC
                </Offcanvas.Title>
              </Offcanvas.Header>
              {/* <Nav>
                 <Nav.Link> Hello! {userInfo.first_name} - {userInfo.last_name}</Nav.Link>
              </Nav> */}
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 nav-link">
                  {SideBarData.map((data) => (
                    <Nav.Link
                      href="#"
                      index={data.id}
                      onClick={() => props.isSelectedValue(data.label)}
                      className="x-link"
                    >
                      <FontAwesomeIcon icon={data.font} className="mr-icon" />
                      {data.designation}
                    </Nav.Link>
                  ))}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      {/* {props.selectedSideBarItem} */}
      {/* <EnhancedHomeScreen /> */}
    </>
  );
};

export default NavbarHoc(Header);
