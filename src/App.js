import React from "react";
import { Container } from "react-bootstrap";

// REACT ROUTER 
import { HashRouter as Router, Route } from "react-router-dom";
import RegisterScreen from "./screen/RegisterScreen";
import HomeScreen from "./screen/HomeScreen";
import LoginScreen from "./screen/LoginScreen";


function App() {  
  return (
    <Router>
        <Container>
           <Route exact path='/' component={RegisterScreen} />
           <Route  path='/main' component={HomeScreen} />
           <Route path='/login' component={LoginScreen} />
        </Container>
    </Router>
  );
}

export default App;
