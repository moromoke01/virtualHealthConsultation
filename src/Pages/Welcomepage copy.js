import React, {useEffect, useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Container,Row,Col } from "react-bootstrap";
import '../App.css'
import Medicpic from '../Images/medical-consult-pic.jpg'
//import {useLocation} from 'react-router-dom'
import jwt_decode from 'jwt-decode';

const WelcomePage = () => {
  //const location =useLocation();
  const [lname, setlname] = useState('');

  useEffect(() =>{
    //retrieve the email from local storage
    const token = localStorage.getItem( 'token');
     if(token){
      const decodedToken = jwt_decode(token);
      const {lname} =decodedToken;
      setlname(lname);
     }
  }, []);

  return (
    <>
        <Container className='welcpage'>
            <Row>
                <Col md='5'>
                 <div>
                 <h1>Welcome! {lname}</h1>
                    {/* <h1>Welcome {location.state.id}!</h1> */}
                    <p>You are on a virtual Health Consulting platform, where you interact with specialist about your health queries and have a Satisfactory consultation time.</p>
                    <h3>For your consulation, kindly book an appointment <span className='btn btn-primary'>here</span></h3>
                 </div>
                </Col>

                <Col md='7'>
                   <img src={Medicpic} alt='stetoscope'  id='stetoscope' />
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default WelcomePage