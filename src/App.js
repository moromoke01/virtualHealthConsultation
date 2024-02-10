import React from 'react'
import 'animate.css';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Navigationbar from "./Components/Navigationbar"
import Home from "./Components/Home"
import WelcomePage from './Pages/Welcomepage'
import Login from './Pages/Login'
import Register from './Pages/Register';
import ConsultingSection from './Pages/ConsultingSection'
import Footer from './Components/Footer'
import Overview from './Pages/Overview'
import GetAllConsulterData from './Pages/GetAllConsulterData'
import ConsultParent from './Pages/Consult-Parent'
import EmailForm from './Pages/EmailForm'
// import UseAuth from './Pages/UseAuth'

function App() {


  return (
    <div className="App">
      
      <Router>
        <Navigationbar />
        <Routes>
           <Route exact path='/' element={<Home />}></Route>
           <Route exact path='/Welcomepage' element={<WelcomePage />}></Route>
           <Route exact path='/Login' element={<Login />}></Route>
           <Route exact path='/Register' element={<Register />}></Route>
           <Route exact path='/ConsultingSection' element={<ConsultingSection />}></Route>

           <Route exact path='/Overview' element={<Overview />}></Route>
           <Route exact path='/GetAllConsulterData' element={<GetAllConsulterData />}></Route>
           <Route exact path='/ConsultParent' element={<ConsultParent />}></Route>
           <Route exact path='/EmailForm' element={<EmailForm />}></Route>
           {/* <Route exact path='/UseAuth' element={<UseAuth />}></Route> */}
        </Routes>
        <Footer />
        
        
      </Router>

     
    </div>
  );
}

export default App;
