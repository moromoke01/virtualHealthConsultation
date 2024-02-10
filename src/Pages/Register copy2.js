import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Container, Row, Col } from "react-bootstrap";
import '../App.css'

const RegisterForm = () => {

  const [FormData, setFormData] =useState({
    fname: " ",lname: " ", email: " ",password: " "
  })
 

  function handleData(event){
    console.log(event.target.name);
    setFormData(prevDataForm =>{
      return{
        ...prevDataForm,
        [event.target.name] :event.target.value
      }
    })
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform registration logic here, such as sending data to a server
    console.log("Firstname:", FormData.fname);
    console.log("LasName:", FormData.lname)
    console.log("email:", FormData.email)
    console.log("password:", FormData.password)
    // Reset form fields
    setFormData('');
  };

  return (
    
    <Container className='EntryContainer' >
        
      <Row className='Form'>
        <Col md='6' id="regconsult"></Col>

        <Col md='6' id='regbox'>
        <h3 className="text-center">Welcome! Kindly Sign-Up</h3>
        <Form onSubmit={handleSubmit}>
      <Form.Group controlId="firstName">
        
        <Form.Control
        className='form-styling'
          type="text"
          name="fname"
          value={FormData.fname}
          onChange={handleData}
          placeholder="Enter first name"
        />
      </Form.Group>

      <Form.Group controlId="lastName">
        
        <Form.Control
        className='form-styling'
        type='text'
        name="lname"
        value={FormData.lname}
        onChange={handleData}
          placeholder="Enter last name"
        />
      </Form.Group>

      <Form.Group controlId="email">
        
        <Form.Control
        className='form-styling'
          type="email"
          name="email"
          value={FormData.email}
          onChange={handleData}
          placeholder="Enter email"
        />
      </Form.Group>

      <Form.Group controlId="password">
        
        <Form.Control
        className='form-styling'
          type="password"
          name="password"
          value={FormData.password}
          onChange={handleData}
          placeholder="Enter password"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Register
      </Button>
      
            <p className="belowlogin text-center text-primary">Already Registered? Login here</p>
    </Form>
        </Col>

      </Row>
    
      
    </Container>
  
  );
};

export default RegisterForm;