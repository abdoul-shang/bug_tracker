import React, { useEffect, useState } from "react";
import PropTypes from "prop-types"; // Move this import to the top
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
import Dashboard from "../components/AdminComp/Dashboard";
import ManageRole from "../components/AdminComp/ManageRole";
import ManageUser from "../components/AdminComp/ManageUser";
import MyProjects from "../components/AdminComp/MyProjects";
import MyTickets from "../components/AdminComp/MyTickets";
import HomeScreen from "../screen/HomeScreen";
import { getProjectDisplay } from "../actions/projectActions";
import Management from "../components/AdminComp/Management";
import { getUserList } from "../actions/userAction";

// import { useValue } from "./useValue";

const NavbarHoc = (WrappedComponent) => {
  return function NavbarHocEnhancedComponent(props) {
    const [value, setValue] = useState("Dashboard");

    const userLogin = useSelector((state) => state.userLogin);
    const { loading, userInfo, error } = userLogin;

    console.log("user-infoooooo", userInfo);

    const isSelectedValue = (name) => {
      setValue(name);
    };
    const dispatch = useDispatch();
    console.log("valueeee", value);

    useEffect(() => {
      if (
        value === "MyProjects" ||
        value === "ManageRole" ||
        value === "ManageProject" ||
        value === "MyTickets"
      ) {
        dispatch(getProjectDisplay());
        dispatch(getUserList());
        console.log("cooool clicked");
      }
    }, [value]);

    const object = {
      name: "abdoul",
      username: "guy",
      age: "34",
    };

    const projectDisplay = useSelector((state) => state.projectDisplay);
    const { projects } = projectDisplay;

    const projectDetail = useSelector((state) => state.projectDetail);
    const { project } = projectDetail;

    console.log("projecttttttttttt", project);

    console.log("projectssssssssssssss", projects);

    const sideBarItemsHookup = {
      Dashboard: <Dashboard />,
      ManageRole: <ManageRole projects={projects} project={project} />,
      ManageProject: <ManageUser projects={projects} project={project} />,
      MyProjects: <MyProjects projects={projects} project={project} />,
      MyTickets: <MyTickets projects={projects} project={project} />,
      Management: <Management />,
    };

    const selectedSideBarItem = sideBarItemsHookup[value] || null;

    return (
      <WrappedComponent
        {...props}
        value={value}
        isSelectedValue={isSelectedValue}
        userInfo={userInfo}
        selectedSideBarItem={selectedSideBarItem}
        object={object}
      />
    );
  };
};

// Move PropTypes outside the NavbarHocWrapper function
NavbarHoc.propTypes = {
  value: PropTypes.string,
  isSelectedValue: PropTypes.func,
  userInfo: PropTypes.object,
  selectedSideBarItem: PropTypes.object,
};

export default NavbarHoc;
