import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom"
import '../App.css'
// import Consult from '../Images/consult-min.jpg'
// import axios from 'axios'
import {useNavigate} from 'react-router-dom'


const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  // const [loggedIn, setLoggedIn] = useState(false);
  const history =useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    fetch('https://medprompt-backend.vercel.app/Login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then(response => response.json())
      .then(data => {
        const userId = data.userId;
        console.log(data);
        console.log(userId);
        if (data.message === 'Login successful') {
          localStorage.setItem("userId", data.userId);
          localStorage.setItem("fname", data.fname);
          localStorage.setItem("lname", data.lname);
          localStorage.setItem("token", data.token);
          
          alert('Login successful');

         
          history('/Welcomepage',{ state: { id: email, userId} });
          // history(`/Welcomepage/${data.userId}`);
          
  
          // Store the user ID in localStorage or cookies
          //localStorage.setItem('userId', data.userId);
          // localStorage.setItem('userId', userId);
  
          // Redirect to the next page
          // history('/ConsultParent', { state: { id: email, userId } });
        }else{
          alert("Incorrect Username or password");
        }
      })
      .catch(e =>
        console.log(e),
        // alert('Invalid email or password')
      );
  
    // Reset form fields
    setEmail('');
    setPassword('');
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

            <Button variant="primary" type="submit" On className='loginBtn mx-auto'>
              Login
            </Button>
            <p className="belowlogin text-center">Forgot password?</p>
            <p className="belowlogin text-center text-primary">Don't have an account? <Link to="/Register">Register here</Link></p>
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
