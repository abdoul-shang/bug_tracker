import React, { useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { getProjectDisplay } from "../actions/projectActions";
import DeveloperComponent from "../components/DeveloperComponetn";
import AdminComponent from "../components/AdminComponent";
import { getUserList } from "../actions/userAction";
import "../components/css/main.css";
import "../components/css/AdminComponent.css";
import NavbarHoc from "../hoc/NavbarHoc";

const HomeScreen = (props) => {
  return (
    <div className="large">
      {props.userInfo?.isAdmin ? <AdminComponent /> : <DeveloperComponent />}
    </div>
  );
};

// HomeScreen.propTypes = {
//   selectedSideBarItem: PropTypes.object,
//   userInfo: PropTypes.object,
//   value: PropTypes.string,
//   isSelectedValue: PropTypes.func,
// };
// const EnhancedHomeScreen = NavbarHoc(HomeScreen);
export default NavbarHoc(HomeScreen);
