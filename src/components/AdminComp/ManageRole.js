import React, { useEffect, useState } from "react";
import { faPersonArrowDownToLine } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Col,
  Container,
  Dropdown,
  Form,
  Nav,
  Row,
} from "react-bootstrap";
import "./adminComp.css";
import UserRoleAssigmentModal from "./modals/UserRoleAssigmentModal";
import userRoleModalData from "./modals/userRoleModalData";
import { useDispatch, useSelector } from "react-redux";
import { getUserList } from "../../actions/userAction";
import NavbarHoc from "../../hoc/NavbarHoc";
import userRoleData from "./data/RoleData";
import UserListSearch from "./comp/UserListSearch";
import { addProjectUserRole } from "../../actions/projectActions";

const ManageRole = ({ value, setValue, projects }) => {
  const [modalShow, setModalShow] = useState(false);
  const [selectUser, setSelectUser] = useState();
  const [typeSelected, setTypeSelected] = useState(0);
  const [projectId, setProjectId] = useState();
  const [role, setRole] = useState();
  const [proj, setProj] = useState();

  // console.log("typeeeeeee", typeSelected);
  console.log("proooooooooo", projects);

  const userList = useSelector((state) => state.userList);

  const { users } = userList;

  const dispatch = useDispatch();

  useEffect(() => {
    if (typeSelected === 1) {
      dispatch(getUserList());
    }
  }, [typeSelected, dispatch]);

  const isRoleButtonModelSelected = (typeId) => {
    setModalShow(true);
    setTypeSelected(typeId);
  };

  console.log("projectiddddddd", projectId);
  console.log("rollllllle", role);
  console.log("useeeeeeerSelected", selectUser);
  console.log("proooooo", proj);
  // console.log("useeeeeeerSelected", selectUser);

  const handleAddUserRole = () => {
    dispatch(
      addProjectUserRole({
        id: proj,
        user: selectUser,
        project: proj,
        role: role,
      })
    );
  };

  return (
    <>
      <h3>Role assignment</h3>
      <hr className="hr" />
      <div className="mr-bg">
        <div className="mr-centered">
          <Container>
            <Row>
              <Col>
                <Form.Select
                  value={proj}
                  onChange={(e) => setProj(e.target.value)}
                  size="md"
                >
                  <option value="" disabled>
                    Select project type
                  </option>
                  {projects.map((project) => (
                    <option key={project.id} value={project.id}>
                      {project.title}
                    </option>
                  ))}
                </Form.Select>
              </Col>
              <Col>
                <Form.Select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  size="md"
                >
                  <option value="" disabled>
                    Select role
                  </option>
                  {userRoleData.map((role) => (
                    <option key={role.id} value={role.designation}>
                      {role.designation}
                    </option>
                  ))}
                </Form.Select>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="comp-center">
          <UserListSearch
            users={users}
            selectUser={selectUser}
            setSelectUser={setSelectUser}
            projectId={projectId}
            setProjectId={setProjectId}
          />
        </div>
        <div className="assign-button">
          <Button
            variant="primary"
            onClick={handleAddUserRole}
            className="assign-b"
          >
            Assign
          </Button>
        </div>
      </div>

      {/* <UserRoleAssigmentModal
        show={modalShow}
        users={users}
        onHide={() => setModalShow(false)}
        typeSelected={typeSelected}
      /> */}
    </>
  );
};

export default ManageRole;
