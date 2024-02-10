import {useEffect, useState} from 'react'

const UseAuth = () => {

    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() =>{

        //check for the presence of the JWT in localStorage or cookies
        const token = localStorage.getItem('token');
        // alert(token)

        //if the JWT is present, set the logged-in state to true
        if(token){
            setLoggedIn(true);
        }else{
            setLoggedIn(false);
        }
    }, []);

  return loggedIn;
}

export default UseAuth
