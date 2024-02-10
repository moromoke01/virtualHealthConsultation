import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import '../App.css'
// import Consult from '../Images/consult-min.jpg'
import axios from 'axios'
import {useNavigate} from "react-router-dom"

const LoginForm = () => {
  
  const history= useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  async function handleSubmit(event) {
    event.preventDefault();

    try{
      await axios.post("http://localhost:5000/", {
        email, password
      })
      .then(res=>{
        if(res.data ="exist"){
          history("./WelcomePage.js", {state:{id:email}})
        }
        else if(res.data="notexist"){
          alert(" User is not registered");
        }
      })
      .catch(e =>{
        alert("wrong details")
      })
    }catch(e){
      console.log(e);
    }
    // Perform login logic here, such as sending data to a server
    console.log("Email:", email);
    console.log("Password:", password);
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
