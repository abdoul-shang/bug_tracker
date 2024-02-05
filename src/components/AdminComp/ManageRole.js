import React, { useEffect, useState } from "react";
import { faPersonArrowDownToLine } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Dropdown, Nav } from "react-bootstrap";
import "./adminComp.css";
import UserRoleAssigmentModal from "./modals/UserRoleAssigmentModal";
import userRoleModalData from "./modals/userRoleModalData";
import { useDispatch, useSelector } from "react-redux";
import { getUserList } from "../../actions/userAction";

const ManageRole = ({ value, setValue }) => {
  const [modalShow, setModalShow] = useState(false);
  const [typeSelected, setTypeSelected] = useState(0);

  console.log("typeeeeeee", typeSelected);

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

  console.log("usddedfg", users);

  return (
    <>
      <h3>Role assignment</h3>
      <hr className="hr" />
      <div className="mr-bg">
        <div className="mr-centered">
          {userRoleModalData?.map((type) => (
            <div index={type.id}>
              <Button
                variant="info"
                className="mr-color"
                onClick={() => isRoleButtonModelSelected(type.id)}
              >
                {type.designation}
              </Button>
            </div>
          ))}
        </div>
      </div>

      <UserRoleAssigmentModal
        show={modalShow}
        users={users}
        onHide={() => setModalShow(false)}
        typeSelected={typeSelected}
      />
    </>
  );
};

export default ManageRole;
