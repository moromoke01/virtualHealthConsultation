import React from 'react'
import { NavLink} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
// import Container from 'react-bootstrap/Container'
import { Link } from "react-router-dom"
import './Css/Navigation.css'

function Navigationbar() {
  return (
    <>
   
     <Navbar collapseOnSelect expand="sm" variant="dark" className='nav-style container'>
     
        <Navbar.Toggle aria-controls="navbarScroll" 
                       data-bs-target="#navbarScroll"/>
            <Navbar.Collapse id="navbarScroll">
              
              <Nav className='mx-auto'>
                
                    <NavLink as={Link} to="/" className='for-nav'>Home</NavLink>
                    <NavLink as={Link} to="/ConsultParent" className='for-nav'>Consult a Doctor</NavLink>
                    <NavLink as={Link} to="/About" className='for-nav'>About us</NavLink>
                    <NavLink as={Link} to="/Welcomepage" className='for-nav'>Our Blog</NavLink>
                    <NavLink as={Link} to="/testimonies" className='for-nav'>Testimonies</NavLink>
                </Nav>
                    <div className='nav-menu-right ms-auto'>
                      <NavLink as={Link} to="/Login" className='for-nav'>Sign-In</NavLink>
                    </div>
               
             
              
               
            </Navbar.Collapse>
           
    </Navbar>
          
      {/* <ul>
        <li className='menu-list'>Consult a Doctor</li>
        <li className='menu-list'>Why Consultation?</li>
        <li className='menu-list'>About us</li>
        <li className='menu-list'>Our Blog</li>
        <li className='menu-list'>Testimonies</li>
      </ul> */}
    </>
   
    
  )
}

export default Navigationbar
