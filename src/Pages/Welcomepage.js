import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Container,Row,Col } from "react-bootstrap";
import '../App.css'
import Medicpic from '../Images/medical-consult-pic.jpg'
import { Link } from 'react-router-dom'
import useAuth from './UseAuth'
import { useNavigate} from 'react-router-dom';

const WelcomePage = () => {

  const loggedIn = useAuth();

  const navigate = useNavigate();

  if (!loggedIn) {
    navigate('/Login');
    return null;
  }
 
  const fname = localStorage.getItem('fname');
  const lname = localStorage.getItem('lname');
  const userId = localStorage.getItem('userId');
  return (
    <>
        <Container className='welcpage'>
            <Row>
                <Col md='5'>
                 <div className='welcpage-text'>
                 <h1>Welcome! {fname} {lname}</h1>
                 
                    {/* <h1>Welcome {location.state.id}!</h1> */}
                    <p>You are on a virtual Health Consulting platform, where you interact with specialist about your health queries and have a Satisfactory consultation time.</p>
                    <br />
                    <h5>For your consulation, kindly book an appointment <span className='btn btn-default
                    '><Link to='/ConsultParent'>here</Link></span></h5>
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