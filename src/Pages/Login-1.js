import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import '../App.css'
// import Consult from '../Images/consult-min.jpg'
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const history = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const LoginData = {
        email,
        password
      }

      const response = await fetch("http://localhost:5000/Login", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify(LoginData)
      })

      if (response.ok) {
        //login successful
        const data = await response.json();
        const {token, fname , lname} =data;
        localStorage.setItem('token', token);
        localStorage.setItem('email',email);
        localStorage.setItem('fname',fname);
        localStorage.setItem('lname',lname);
        // console.log(data);
        // const {token, fname, lname} =await response.json();
        // console.log(token);
        // console.log('fname');
        // console.log('lname');
        // console.log(`{fname $ lname}`);
           // Perform login logic here, such as sending data to a server
  console.log("Email:", email);
  console.log("Password:", password);
     
     console.log("token:", token);
     

        alert("Login successful")
        window.location.href = './Welcomepage'
      } else {
        //login failed
        const error = await response.json();
        console.log(error.message)
        alert("User not found");
      }


      //login sucessful, redirect to nextpage
      // history('./WelcomePage.js',{state:{id:email}})

    } catch (error) {
      console.log(error);
    }
  
  // Reset form fields
  setEmail("");
  setPassword("");
  };




return (
  <Container className='EntryContainer' >

    <Row className='Form'>
      <Col md='6' id='loginbox'>
        <h3 className="text-center">Sign into your account</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="email">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter password"
            />
          </Form.Group>

          <Button variant="primary" type="submit" On>
            Login
          </Button>
          <p className="belowlogin text-center">Forgot password?</p>
          <p className="belowlogin text-center text-primary">Don't have an account? Register here</p>
        </Form>
      </Col>

      <Col md='6' id="consult">
        {/* <img src={Consult} alt='online-consult' /> */}
      </Col>
    </Row>
  </Container>
);
};

export default LoginForm;
