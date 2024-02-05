import React from "react";
import { Container } from "react-bootstrap";

// REACT ROUTER
import { HashRouter as Router, Route } from "react-router-dom";
import RegisterScreen from "./screen/RegisterScreen";
import HomeScreen from "./screen/HomeScreen";
import LoginScreen from "./screen/LoginScreen";
import Header from "./components/Header";
import EnhancedHomeScreen from "./screen/HomeScreen";
import NavbarHoc from "./hoc/NavbarHoc";

function App() {
  // const EnhancedHomeScreen = NavbarHoc(HomeScreen);
  return (
    <Router>
      {/* <Header /> */}
      <Container>
        <Route exact path="/" component={RegisterScreen} />
        <Route
          // key={window.location.pathname}
          path="/main"
          component={HomeScreen}
        />
        <Route path="/login" component={LoginScreen} />
      </Container>
    </Router>
  );
}

export default App;
