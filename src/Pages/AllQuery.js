import React, { useState, useEffect } from 'react'
import { Container, Card } from "react-bootstrap";
import '../App.css'
import axios from 'axios'

export default function AllQuery() {

    // const [Query, setQuerycall] = useState('');

    // useEffect(() =>{
    //     axios.get('http://localhost:5000/ConsultingSection')
    //     .then(Querycall =>setQuery(Querycall.data))
    //     .catch(err => console.log(err))

    // }, [])

    const [data, setData] = useState([]);

    useEffect(() =>{
      //fetch the data from the API endpoint
      fetch('http://localhost:5000/getConsulterData')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log('Error fetching data:', error))
    }, []);

    //handling delete command of Query
    const handleDelete = async(id) =>{
      const Deletedata = await axios.delete("http://localhost:5000/deleteQuery/"+id)

      alert(Deletedata.data.message);
    
    }

   
   
      // const handleDelete = async ({userId, deleteUser})=>{
      //   alert("Jane is coding")
      //   try{
      //     const response = await fetch (`http://localhost:5000/deleteQuery/${userId}`, {
      //       method: 'DELETE',
      //     });

      //     if(response.ok){
      //       console.log('User deleted successfully');
      //       deleteUser(userId);
      //     }else{
      //       console.error('Error deleting user');
      //     }
      //   }catch(error){
      //     console.error(error)
      //   }
      // }
    
    

  return (
    <>
      <Container>

        <Card>
        <h3 className='text-center'>Below are the Consulters Information and Health Query supplied</h3>
                <table className='table table-responsive'>
                    <thead>
                    
                    <tr>
                      <th>Choosen Specialist</th>
                      <th>Patient Health Query</th>
                      <th>Symptoms</th>
                      <th>Schedule Date</th>
                      <th>Schedule Time</th>
                      <th colSpan='2'>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map(item => (
                    <tr>
                      <td>{item.specialist}</td>
                      <td>{item.healthQuery}</td>
                      <td>{item.symptoms}</td>
                      <td>{item.scheduleDate}</td>
                      <td>{item.scheduleTime}</td>
                      <td><button className='btn btn-primary'>Edit</button></td>
                      <td><button className='btn btn-danger' onClick={()=>handleDelete(item._id)}>Delete</button></td>
                     
                    </tr>
                    ))}
                    </tbody>
                  </table>
                
                 
          
            
        </Card>
      </Container>
    </>
  )
}
