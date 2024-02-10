import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import './Css/Home.css'
import medpic from '../Images/show2doc.png'

function HeroSection() {
  return (
    <>
      <Container className='hero'>
            <Row>
              <Col sm='5' className='Herocol-1'>
                <h1 className='animate__bounceIn'>Empowering you to Live a Healthy Life.</h1>
                  <h6>Get 24/7 online consultations with the best doctors without breaking a sweat and your bank</h6>
                    <button className='btn btn-primary'>Book an Appointment</button>
                    {/* <button></button> */}
                </Col>

                <Col sm='7'>
                  <img src={medpic} alt='med-consult' id='medpic' />
                </Col>
            </Row>
      </Container>
            
      
    </>
  )
}

export default HeroSection
