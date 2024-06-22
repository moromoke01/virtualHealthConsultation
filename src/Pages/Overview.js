import React from 'react'
import { Container,Card } from "react-bootstrap";
import { useLocation, useNavigate } from 'react-router-dom';
import '../App.css'
//import axios from 'axios';

const Overview = ()=> {
  const location = useLocation();
  // const [userId, setUserId] = useState('');
  const { FormData } = location.state;

  const userId = localStorage.getItem('userId');
  
 
  const sendButton = async () => {
    try {
      // Send the FormData to the backend server
      const response = await fetch('https://medprompt-backend.vercel.app/ConsultingSection', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'userId': userId 
          // 'userId': localStorage.getItem('userId') // Include the user ID from localStorage or cookies
        },
        body: JSON.stringify({ ...FormData, userId: userId })
      });
      // alert(userId);
  
      // Handle the response from the server
      const data = await response.json();
      alert('Your Appointment has been sucessfully sent, kindly check your mail for the Feedback');
      window.location.href = '/';
      // alert(userId);
      console.log(data);
    } catch (error) {
      alert('An error occurred while submitting data');
      console.log('An error occurred while submitting data:', error);
    }
  };
  
   //for go-back command
   const navigate = useNavigate();
    const handleGoBack = () =>{
      navigate(-1);
    }

  return (
    <>
      <Container className='overview'>
       

        <Card className='overview-display'>
        <h4 className='mx-auto'><u>Details Supplied by Patient</u></h4>
        <ol>
           {/* <h3>Below are the Query supplied</h3> */}
           <li>Selected Specialist: <b>{FormData.specialist}</b></li>
            <li>Health Query: <b>{FormData.healthQuery}</b></li>
            <li>Symptoms: <b>{FormData.symptoms}</b></li>
            <li>Appointment Date: <b>{FormData.scheduleDate}</b></li>
            <li>Appointment Time: <b>{FormData.scheduleTime}</b> </li>
        </ol>
           
            
       <div className='overview-buttons' >
         <button className='btn btn-primary ' onClick={handleGoBack}>Go Back</button>
         <button className='btn btn-primary  ' onClick={sendButton}>Save</button>
       </div>
          

         
   
      
           
           
        </Card>
      </Container>
    </>
  )
}
export default Overview;
