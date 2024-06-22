import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom"
import '../App.css'

const RegisterForm = () => {

  const [FormData, setFormData] = useState({
    fname: "", lname: "", email: "", password: ""
  })


  function handleData(event) {
    // console.log(event.target.name);
    setFormData(prevDataForm => {
      return {
        ...prevDataForm,
        [event.target.name]: event.target.value
      }
    })
  }


  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Perform registration logic here, such as sending data to a server
      const DataSent = {
        fname: FormData.fname,
        lname: FormData.lname,
        email: FormData.email,
        password: FormData.password
      };



      console.log("Firstname:", FormData.fname);
      console.log("LasName:", FormData.lname)
      console.log("email:", FormData.email)
      console.log("password:", FormData.password)

     const response = await fetch("https://medprompt-backend.vercel.app/Register", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify(DataSent)
      });

      if (response.ok) {
        //sign-up successful
        const data = await response.json();
        console.log(data.message);

        alert("User successfully registered")
        window.location.href = './Login'
      } else {
        //if sign-up failed
        const error = await response.json();
        console.log(error.message);

        alert("Sign-up failed")
      }
    }catch(error){
      console.log(error);
    }

     // Reset form fields
     setFormData({
      fname: '', // Reset to an empty string
      lname: '',
      email: '',
      password: ''
    });
  };

  return (

    <Container className='EntryContainer' >

      <Row className='Form'>
        <Col md='6' id="regconsult"></Col>

        <Col md='6' id='regbox'>
          <h3 className="text-center">Welcome! Kindly Sign-Up</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="fname">

              <Form.Control
                className='form-styling'
                type="text"
                name="fname"
                value={FormData.fname}
                onChange={handleData}
                placeholder="Enter your first name"
                autoComplete="off"
              />
            </Form.Group>

            <Form.Group controlId="lname">

              <Form.Control
                className='form-styling'
                type='text'
                name="lname"
                value={FormData.lname}
                onChange={handleData}
                placeholder="Enter your last name"
                autoComplete="off"
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
                autoComplete="off"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Register
            </Button>

            <p className="belowlogin text-right text-primary ms-auto">Already Registered? <Link to="/Login">Login here</Link></p>
          </Form>
        </Col>

      </Row>


    </Container>

  );
};

export default RegisterForm;