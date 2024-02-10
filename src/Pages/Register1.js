import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Container, Row, Col } from "react-bootstrap";
import '../App.css'
// `import axios from 'axios';`

const RegisterForm = () => {

  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const [FormInfo, setFormInfo] =useState({
  //   fname: " ",lname: " ", email: " ",password: " "
  // })
 

  // function handleData(event){
  //   console.log(event.target.name);
  //   setFormData(prevDataForm =>{
  //     return{
  //       ...prevDataForm,
  //       [event.target.name] :event.target.value`
  //     }
  //   })
  // }


  const handleSubmit =async (event) => {
    event.preventDefault();
   
 const formData = {
                  fname: fname,
                   lname:lname,
                   email: email,
                   password: password
                  };

    // console.log("Firstname:", FormData.fname);
    // console.log("LasName:", FormData.lname)
    // console.log("email:", FormData.email)
    // console.log("password:", FormData.password)
    try{
      //send the data to the database
      const response = await fetch('http://localhost:5000/Register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(formData)
      });
     
      if(response.ok){
        console.log('Data successfully sent:', response.data)
      }else{
        console.log('Failed to Submit Data')
      }

      // Reset form fields
    // setFormData('');
    
    }catch(error){
      console.error('Error sending data:', error)
    }
   
 
    
    
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
          value={fname}
          onChange={(event) => setFname(event.target.value)}
          placeholder="Enter first name"
          autoComplete="off"
        />
      </Form.Group>

      <Form.Group controlId="lastName">
        
        <Form.Control
        className='form-styling'
        type='text'
        name="lname"
        value={lname}
        onChange={(event) => setLname(event.target.value)}
          placeholder="Enter last name"
        />
      </Form.Group>

      <Form.Group controlId="email">
        
        <Form.Control
        className='form-styling'
          type="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter email"
        />
      </Form.Group>

      <Form.Group controlId="password">
        
        <Form.Control
        className='form-styling'
          type="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
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