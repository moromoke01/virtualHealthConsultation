import React,{useState} from 'react'
import { Container,Card } from "react-bootstrap";
import { useLocation, useNavigate } from 'react-router-dom';
import '../App.css'
//import axios from 'axios';

const Overview = ()=> {
  const location = useLocation();
  const [userId, setUserId] = useState('');
  const { FormData } = location.state;

  // const [savedFormData, setSavedFormData] = useState(FormData);

    const sendButton = async () =>{
    
    // axios.post('http://localhost:5000/ConsultingSection', savedFormData)
    // .then(response => {
    //   console.log(response.message);
    // })
    // .catch(error => {
    //   console.error (error)
    // })
    try{
      //send the FormData to the backend server

       const response = await fetch(`http://localhost:5000/updateUserData/${userId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(FormData),
      })

      //handle the response from the server
      const data = await response.json();
      console.log(data);

    } catch (error){
      alert('An error occurred while submitting data')
      console.log('An error occurred while submitting data:', error)
    }
   }

   //for go-back command
   const navigate = useNavigate();
    const handleGoBack = () =>{
      navigate(-1);
    }

  return (
    <>
      <Container>
        <h2>Details Supplied by Patient</h2>

        <Card>
            <p>Your Appointment has been sucessfully sent, kindly check your mail for the Feedback.</p>
            <h3>Below are the Query supplied</h3>
            <p>Specialiist Chosen: <b>{FormData.specialist}</b></p>
            <p>Health Query: <b>{FormData.healthQuery}</b></p>
            <p>Symptoms: <b>{FormData.symptoms}</b></p>
            <p>Appointment Date: <b>{FormData.scheduleDate}</b></p>
            <p>Appointment Time: <b>{FormData.scheduleTime}</b> </p>
            
       
          <button className='btn btn-primary me-auto' onClick={handleGoBack}>Go Back</button>
         <button className='btn btn-primary ms-auto'
                 onClick={sendButton}>Save</button>

         
   
      
           
           
        </Card>
      </Container>
    </>
  )
}
export default Overview;
