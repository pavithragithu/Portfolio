// import Backgroung from './Backgroung';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
// import Particle from './Particle.js'; 
import Navbar from './components/Navbar';
import Text from './components/Text'
import Skill from './components/Skill'
import Body1 from './components/Body1';
// import Education from './Education';
import Project from './components/Project.js';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import Projects from './Project2.js';
// import {BrowserRouter as Switch, Route,Router} from 'react-router-dom';

// import Education from './Education';
function App() {
  return (
    <>
 <Navbar/>
 {/* <Particle id="tsparticles" /> */}
 <hr style={{color:"rgb(182, 15, 197)"}} className='m-500'/>
 <hr className='p-100'/>
 <hr/>
 <hr/>
 <Text/>
  <hr/>
  <div><Body1/></div>
  <div><Skill/></div>
  {/* <div><Education/></div> */}
  <div><Project/></div>
  <div><Contact/></div>
  <div ><Footer/></div>
  {/* <Router> */}
   {/* <button className='m-5 b1' >go back<ArrowBackIcon/></button>  */}
    {/* <Routes>
    <Route path='/project' element={<Project/>}></Route>
   </Routes>
   </Router>  */}
   
 
    </>
    )
  }
export default App
