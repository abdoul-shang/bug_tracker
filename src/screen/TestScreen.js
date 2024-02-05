import React from "react";
import NavbarHoc from "../hoc/NavbarHoc";

const TestScreen = (props) => {
  console.log("valueeee in testScreen", props.value);
  console.log("selectedSideBarItem in testScreen", props.selectedSideBarItem);
  return <div>TestScreen</div>;
};

export default NavbarHoc(TestScreen);
