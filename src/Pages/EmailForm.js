import React, { useState} from 'react'
import { Form, Button,Container,Row,Col } from "react-bootstrap";
import axios from 'axios'
import '../App.css'

const EmailForm = () => {

const userEmail = localStorage.getItem('userEmail');

const [emailData, setEmailData] = useState({
    to: userEmail,
    subject: '',
    emailContent: '',
});



const handleChange = (e) =>{
   const {name, value} = e.target;

   setEmailData((prevData) =>({
    ...prevData, [name]:value
   }))
}
   const handleSubmit = (e) =>{
    e.preventDefault();
    axios.post('https://medprompt-backend.vercel.app/send-email', emailData)
    .then((response) =>{
        console.log(response.data);
       
        alert('Email sent successfully');
        window.location.href = './GetAllConsulterData';
    })
    .catch((error) =>{
        console.log('Error sending email', error);
        alert('Failed to send email, please try again later')
    });
   };



  return (
    <>
<Container  >

  <Row className='emailForm mx-auto'>
    <Col className='Form' md='3' >
      <h5>Send Feeback to Consulter's Email</h5>
       <Form onSubmit={handleSubmit} >
       
      

        <Form.Group className="mb-3 " controlId="to">
                <Form.Label>To:</Form.Label>
                    <Form.Control as="input" 
                              type="email"
                              className=" border border-3" 
                              name="to"
                              placeholder="Recipient Email"
                              onChange={handleChange}
                              value={userEmail}
                              required
                               />
                 </Form.Group>

         <Form.Group className="mb-3 " controlId="subject">
                <Form.Label>Subject:</Form.Label>
                    <Form.Control as="input" 
                             type="text"
                              className=" border border-3" 
                              name="subject"
                               placeholder="Your Email Title"
                              onChange={handleChange}
                              value={emailData.subject}
                              required
                               />
                 </Form.Group>

        <Form.Group className="mb-3 " controlId="emailContent">
                <Form.Label>Compose an Email</Form.Label>
                    <Form.Control as="textarea" 
                              type="text"
                              className=" border border-3" 
                              name="emailContent"
                              placeholder="Type your email Body"
                              onChange={handleChange}
                              value={emailData.text}
                              required
                               />
            </Form.Group>
        <Button type="submit">Send Email</Button>
    </Form>
    </Col>
    </Row>
    </Container>
    </>
  )
}

export default EmailForm
