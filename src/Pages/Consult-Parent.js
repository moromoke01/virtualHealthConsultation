import React, { useState, useEffect } from "react";
import { Container , Col, Row} from "react-bootstrap"
import { Form, Button } from "react-bootstrap";
// import Overview from './Overview';
import useAuth from './UseAuth'
import { useNavigate, useLocation} from 'react-router-dom';

const ConsultingSection = () => {


  const loggedIn = useAuth();


  //if the user is not
  const [FormData, setFormData]= useState(() =>{
    const storedFormData = sessionStorage.getItem('FormData');
    return storedFormData ? JSON.parse(storedFormData):{
    specialist: " ",healthQuery: " ",symptoms: " ", scheduleDate: " ",scheduleTime: " ",
    }
  })

  const navigate = useNavigate();
  const location = useLocation();

  // const { userId } = useParams();
  const userId = localStorage.getItem('userId');


 
 useEffect(() =>{
  if(location.state && location.state.FormData){
    setFormData(location.state.FormData)
  }
 }, [location.state]);

 
  const handleData = (event)=>{
    console.log(event.target.name);
    setFormData(prevFormData =>{
      return{
        ...prevFormData,
        [event.target.name] : event.target.value
      }
    })
  }

  const handleSubmit = async(event) =>{
    alert(userId);
    event.preventDefault();
    navigate('/Overview', { state: { FormData, userId } });
  
  }


  useEffect(() =>{
    sessionStorage.setItem('FormData', JSON.stringify(FormData))
  }, [FormData]);
 
 //if the user is not logged in, redirect them to login page
 if(!loggedIn) {
  navigate('/login' );
  return null;
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
                <option value="General Doctor">General Doctor</option>
                <option value="Gynecologist">Gynecologist</option>
                <option value="Dermathologist">Dermathologist</option>
                <option value="sexologist">sexologist</option>
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
