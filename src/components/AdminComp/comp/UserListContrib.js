import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import UserModal from "../modals/UserModal";
import { getUserDetail } from "../../../actions/userAction";
import { USER_DETAIL_RESET } from "../../../constants/userConstant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import DeleteModal from "../modals/DeleteModal";
import Message from "../Message";
import "./comp.css";

const UserListContrib = (props) => {
  const [show, setShow] = useState(false);
  const [deleteShow, setDeleteShow] = useState(false);
  const [contribId, setContribId] = useState(0);
  const [deleteContribMessage, setDeleteContribMessage] = useState("");

  console.log("propppppps", props.project);

  const userDetail = useSelector((state) => state.userDetail);
  const { user } = userDetail;

  const dispatch = useDispatch();

  const handleClose = () => {
    setShow(false);
    dispatch({ type: USER_DETAIL_RESET });
  };
  const handleShow = () => setShow(true);
  const handleClickUser = (id) => {
    handleShow();
    dispatch(getUserDetail(id));
  };

  const handleClickDeleteShow = (id) => {
    setDeleteShow(true);
    setContribId(id);
    console.log("handlecLICKEDDDDDD");
    // dispatch(getUserDetail(id));
  };
  const handleClickDeleteClose = (id) => {
    setDeleteShow(false);
    // dispatch(getUserDetail(id));
    console.log("iddddddd", id);
  };
  console.log("useeeeeer in list contrib", user);
  return (
    <>
      {/* <div className="search-class">
      <SearchComp />
    </div> */}
      {deleteContribMessage && (
        <Message variant="success">{deleteContribMessage}</Message>
      )}
      <div className="table-class">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>project ID</th>
              <th>role</th>
              <th>user Id</th>
              <th>contributor Id</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {props.contributors?.map((contrib) => (
              <tr index={contrib.id}>
                <td>{contrib.project}</td>
                <td>{contrib.role}</td>
                <td onClick={() => handleClickUser(contrib.user)}>
                  {contrib.user}
                </td>
                <td>{contrib.id}</td>
                <td onClick={() => handleClickDeleteShow(contrib.id)}>
                  {" "}
                  <FontAwesomeIcon icon={faTrash} className="m-trash" />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <UserModal onHide={handleClose} show={show} user={user} />
      <DeleteModal
        onHideDelete={handleClickDeleteClose}
        deleteShow={deleteShow}
        contribId={contribId}
        project={props.project}
        deleteContribMessage={deleteContribMessage}
        setDeleteContribMessage={setDeleteContribMessage}
        // user={user}
      />
    </>
  );
};

export default UserListContrib;
