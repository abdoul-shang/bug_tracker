import React, { useEffect, useState } from "react";

/* REACT ROUTER */
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getUserList, login } from "../actions/userAction";
import { Button, Col, Form, Row } from "react-bootstrap";
import Message from "../components/Message";
import FormContainer from "../components/FormContainer";

const LoginScreen = ({ history, location }) => {
  /* STATE */
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  // SETTING UP REDIRECT

  const redirect = location.search ? location.search.split("=")[1] : "/main";
  // PULLIMG A PART STATE FROM THE ACTUAL STATE IN REDUX STORE
  const userLogin = useSelector((state) => state.userLogin);

  const dispatch = useDispatch();

  const { loading, userInfo, error } = userLogin;
  // REDIRECT AN ALREADY LOOGED IN USER, AS WE DON'T WANT THEM TO SEE THE LOGIN PAGE

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
      // dispatch(getUserList())
    }
  }, [userInfo, history, redirect]);
  // HANDLERS
  const submitHandler = () => {
    // FIRING OFF THE ACTION CREATORS USING DISPATCH FOR LOGIN
    dispatch(login(userName, password));
  };

  return (
    <FormContainer>
      <h1>Login</h1>

      {/* {message && <Message variant="danger">{message}</Message>} */}
      {error && <Message variant="danger">{error}</Message>}
      {/* {loading && <Loader />} */}

      <Form onSubmit={submitHandler}>
        <Form.Group controlId="userName">
          <Form.Label>Username</Form.Label>
          <Form.Control
            required
            type="username"
            placeholder="Enter Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button type="submit" variant="primary" className="mt-3">
          Login
        </Button>
      </Form>

      <Row className="py-3">
        <Col>
          Don't have an Account ? <Link to="/">Register</Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default LoginScreen;
