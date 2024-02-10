import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row, Col} from 'react-bootstrap'
import './Css/Home.css'
import pic1 from '../Images/general-consultation.jpg'
import pic2 from '../Images/ginecologia.jpg'
import pic3 from '../Images/dermatologist.jpg'
import pic4 from '../Images/sexology.png'


const ConsultationSegment = () => {
  return (
    <>
        
        <Container className='consult-seg-box'>
          <h2 className='text-center'>Consultation Segments</h2>
            <Row>
                <Col md='3' >
                  <h5>General Medicine</h5>
                  <img src={pic1} alt="general-consultation" className='consult-seg-pic animate__fadeInLeft' />
                  <p>General consultation addressing human health, treatment plan and therapeutic Intervention.</p>
                </Col>

                  <Col md='3' >
                    <h5>Gynecology and Obstetrics</h5>
                    <img src={pic2} alt="ginecologia" className='consult-seg-pic animate__fadeInLeft'/>
                    <p>Consultation on diseases specific to women and girls, especially those affecting the reproductive system</p>
                  </Col>

                     <Col md='3' className='animate__fadeInRight'>
                       <h5>Dermathology</h5>
                       <img src={pic3} alt="dermatologist" className='consult-seg-pic animate__fadeInRight'/>
                       <p>Consultation for the diagnosis and treatment of skin disorders.</p>
                     </Col>

                        <Col md='3' className='animate__fadeInRight'>
                          <h5>Sexology</h5>
                          <img src={pic4} alt="sexology" className='consult-seg-pic animate__fadeInRight'/>
                           <p>Consultation on Sexual Interaction,sexual health and reproduction</p>
                        </Col>
                            {/* <Col md='3'>
                              <h3>Guidance and Counselling</h3>
                              <img src={} alt="general-consultation" />
                            </Col> */}
            </Row>
        </Container>
    </>
  )
}

export default ConsultationSegment