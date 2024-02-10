import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row, Col} from 'react-bootstrap'
import './Css/Home.css'
import chat from '../Images/chat-icon.png'
import call from '../Images/telephone.png'
import video from '../Images/video-icon.png'

const ConsultProcess = () => {
  return (
    <>
        <Container className='Guide2consult'>
          <h2 className='text-center'>Your Guide to <span>Virtual Consultation</span></h2>
            <Row >
              <Col md='4' className='Guide-col-each'>
                <div className='d-flex'>
                  <img src={chat} alt='chat-icon' className='process-icon' />
                  <h5>Chat Section Guide</h5>
                </div>
                 
                   <ol className="custom-counter">
                    <li>Fill the form, ensure your health queries are in detail.</li>
                    <li>Choose a plan that suite your better.</li>
                    <li>Pay consultation fee.</li>
                    <li>Book an Appointment.</li>
                      <button className='btn btn-primary'>Get Started</button>
                   </ol>
              </Col>
              <Col md='4'  className=' Guide-col-each'>
                <div className='d-flex'>
                   <img src={call} alt='call-icon' className='icon'/>
                   <h5>Call Section Guide</h5>
                </div>
              
                   <ol className="custom-counter">
                    <li>Fill the form,attach photos/report,if any.</li>
                    <li>Pick date and time for your consultation.</li>
                    <li>Pay your consultation fee.</li>
                    <li>Talk to a Doctor over an end-to-end encrypted phone call.</li>
                      <button  className='btn btn-primary'>Get Started</button>
                   </ol>
              </Col>
              <Col md='4' className='Guide-col-each'>
                <div className='d-flex'>
                  <img src={video} alt='video-icon' className='icon'/>
                  <h5>Video Section Guide</h5>
                </div>
              
                   <ol className="custom-counter">
                    <li>Fill the form,attach photos/report,if any.</li>
                    <li>Pick date and time for your consultation</li>
                    <li>Pay your consultation fee.</li>
                    <li>Talk to a Doctor over an end-to-end encrypted Video call.</li>
                      <button className='btn btn-primary'>Get Started</button>
                   </ol>
              </Col>
            </Row>
        </Container>
    </>
  )
}

export default ConsultProcess