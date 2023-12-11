import React, { useState, useEffect } from "react";

/* REACT ROUTER */
import { Link } from "react-router-dom";

/* REACT BOOTSTRAP */
import { Row, Col, Button, Form } from "react-bootstrap";

/* COMPONENTS */
import Message from "../components/Message";
// import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";

/* REACT - REDUX */ 
import {useSelector, useDispatch} from 'react-redux'

/* ACTION CREATORS */
import { register } from "../actions/userAction";

function RegisterScreen({ location, history }) {
  /* STATE */ 
  const [userName, setUserName] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')
  // SETTING UP REDIRECT  

  const redirect = location.search ? location.search.split('=')[1] : '/main';
  // PULLIMG A PART STATE FROM THE ACTUAL STATE IN REDUX STORE  
  const userRegister = useSelector((state)=> state.userRegister)

  const dispatch = useDispatch()

  const {loading, userInfo, error } = userRegister
  // REDIRECT AN ALREADY LOOGED IN USER, AS WE DON'T WANT THEM TO SEE THE LOGIN PAGE  

  console.log('hgkgkdngn', userInfo)
   useEffect(()=>{
    if(userInfo){
      history.push(redirect)
    }
  },[ userInfo, history, redirect])
  // HANDLERS 
   const submitHandler = () => {
         // DISABLE SUBMIT IF PASSWORD DON'T MATCH 
         if (password !== confirmPassword){
          setMessage("password don't match")
        } else {
          // FIRING OFF THE ACTION CREATORS USING DISPATCH FOR REGISTER 
          dispatch(register(userName,firstName,lastName,email,password,confirmPassword))
        }
   } 


   console.log('username', userName)
   console.log('firstName', firstName)
   console.log('lastName', lastName)
   console.log('email', email)
   console.log('password', password)
   
      

  return (
    <FormContainer>
      <h1>Register</h1>

      {message && <Message variant="danger">{message}</Message>}
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
            onChange={(e)=> setUserName(e.target.value)}
        
          />
        </Form.Group> 
        <Form.Group controlId="firstName">
          <Form.Label>first_name</Form.Label>
          <Form.Control
            required
            type="firstName"
            placeholder="Enter first_name"
            value={firstName}
            onChange={(e)=> setFirstName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="lastName">
          <Form.Label>last_name</Form.Label>
          <Form.Control
            required
            type="lastName"
            placeholder="Enter last_name"
            value={lastName}
            onChange={(e)=> setLastName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
          
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
          
          />
        </Form.Group>

        <Form.Group controlId="passwordConfirm">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e)=> setConfirmPassword(e.target.value)}
          
          />
        </Form.Group>

        <Button type="submit" variant="primary" className="mt-3">
          Register
        </Button>
      </Form>

      <Row className="py-3">
        <Col>
          Have an Account ?{" "}
          <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
            Sign In
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
}

export default RegisterScreen;