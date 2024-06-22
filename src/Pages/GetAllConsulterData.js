import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { Container, Card } from "react-bootstrap";
import '../App.css'
import { useNavigate } from 'react-router-dom';



const DataDisplay =(user)=>{
    const [data, setData] = useState([]);

    useEffect(() =>{
        //fetch the data from the server

        fetchData();
    }, []);

    const fetchData = async () =>{
        try{
            //make a GET request to the server endpoint for fetching data
            const response = await axios.get('https://medprompt-backend.vercel.app/getConsulterData');
          
               
            //set the data received from the server to the state
            setData(response.data);
         
            } catch(error){
                console.log('Error fetching data:', error);
            }
        };

//function to concatenate the first name and last name
   const getFullName = (user) =>{
    return `${user.fname} ${user.lname}`;
    
   }
  
  const navigate =useNavigate();

   const handleButton = (userEmail) =>{

    // navigate(`/EmailForm/${userId}`);
    navigate('/EmailForm',{userEmail});

    localStorage.setItem("userEmail",userEmail);
    // alert(userEmail)
   

   }

 return(
    <>
      <Container>

        <Card className='DataCard'>
        <h3 className='text-center'>Below are the Consulters' Information and Health Query supplied</h3>
                <table className='table table-responsive table-bordered'>
                    <thead className='table-active'>
                    
                    <tr>
                      {/* <th>UserId</th> */}
                      <th>Patient Name</th>
                      <th>Patient Email</th>
                      {/* <th>Query Id</th> */}
                      <th> Specialist</th>
                      <th> Health Query</th>
                      <th>Symptoms</th>
                      <th>Scheduled Date</th>
                      <th>Scheduled Time</th>
                      <th colSpan='2'>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map(item => (
                    <tr key = {item._id}>
                      {/* <td>{item.user._id}</td> */}
                      <td>{getFullName(item.user)}</td>
                      <td>{item.user.email}</td>
                      {/* <td>{item._id}</td> */}
                      <td>{item.specialist}</td>
                      <td>{item.healthQuery}</td>
                      <td>{item.symptoms}</td>
                      <td>{item.scheduleDate}</td>
                      <td>{item.scheduleTime}</td>
                      <td><button className='btn btn-primary' onClick={() => handleButton(item.user.email)}> Feedback</button></td>
                    
                     
                    </tr>
                    ))}
                    </tbody>
                  </table>
                
                 
          
            
        </Card>
      </Container>
    </>
        );
    };


export default DataDisplay;
