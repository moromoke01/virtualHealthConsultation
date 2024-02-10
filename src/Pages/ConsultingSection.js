import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";

const ConsultingSection = () => {

  const [FormData, setFormData]= useState({
    specialist: " ",healthQuery: " ",symptoms: " ", scheduleDate: " ",scheduleTime: " "
  })

  function handleData(event){
    console.log(event.target.name);
    setFormData(prevFormData =>{
      return{
        ...prevFormData,
        [event.target.name] : event.target.value
      }
    })
  }

  const handleSubmit = async(event) =>{
    event.preventDefault();

    const ConsultData={
      specialist:FormData.specialist,
      healthQuery: FormData.healthQuery,
      symptoms: FormData.symptoms,
      scheduleDate: FormData.scheduleDate,
      scheduleTime: FormData.scheduleTime
    }
    console.log("Specialist:",FormData.specialist);
    console.log("healthQuery:",FormData.healthQuery);
    console.log("symptoms:",FormData.symptoms);
    console.log("scheduleDate:",FormData.scheduleDate);
    console.log("scheduleTime:",FormData.scheduleTime);

    const QuerySend = await fetch("http://localhost:5000/ConsultingSection", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json", "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(ConsultData)
    });

    if(QuerySend.ok){
      //Query sent sucessfully

      const QueryData = await QuerySend.json();
      console.log(QueryData.message);
      alert(QueryData.message);
      window.location.href('./AllQuery.js')

      
    }
    // Reset form fields
    setFormData("");

  }
 
  return (
    <Container className='consultingPage '>
      <h2 className="text-center">Your Consultation Section</h2>
      <Row >
        <Col md='5' className='ConsultingForm'>
          <h4>Tell a Virtual Specialist</h4>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="specialist" >
              <Form.Select aria-label="specialist-list" 
                           size="sm" 
                           className=" border border-3" 
                           name="specialist"
                           onChange={handleData}
                           value={FormData.specialist}>
                <option  >Choose a Specialist (Optional)</option>
                <option value="one">One</option>
                <option value="two">Two</option>
                <option value="three">Three</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3 " controlId="health-query">
                <Form.Label>Enter Your Health Query</Form.Label>
                <Form.Control as="textarea" 
                               
                              className=" border border-3" 
                              name="healthQuery"
                              onChange={handleData}
                              value={FormData.healthQuery}
                               />
            </Form.Group>

            <Form.Group>
                <Form.Label>Enter Your Symptoms</Form.Label>
                <Form.Control as="textarea" 
                         placeholder='Kindly enter more than one symptom(press enter to list)' 
                         className=" border border-3"
                         name="symptoms"
                         onChange={handleData}
                         value={FormData.symptoms}
                         />
            </Form.Group>

            <Form.Group>
                <Form.Label>Choose Appointment Date/Time</Form.Label>
                <Row>
                    <Col md='4' >
                      <input 
                             type='date' 
                             id='scheduleDate' 
                             name="scheduleDate"
                             onChange={handleData}
                             value={FormData.scheduleDate} />
                            </Col>
                    <Col md='6' className="ms-auto ">
                      <input 
                          type='Time' 
                          id='scheduleTime' 
                          name="scheduleTime"
                          onChange={handleData}
                          value={FormData.scheduleTime}
                          />
                      </Col>

                </Row>
            </Form.Group>

            <Button variant="primary" type="submit" className="ms-auto ">Submit Query</Button>
          </Form>
        </Col>

        <Col md='6' className='picturespace'></Col>
      </Row>
    </Container>
  );
};

export default ConsultingSection;
