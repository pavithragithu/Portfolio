
import 'bootstrap'
import {HashLink as Link} from "react-router-hash-link"
// import Text from './Text'
// import Body1 from './Body1'
// import Skill from './Skill'
// import Education from './Education'
// import Project from './Project'
// import Contact from './Contact'
// import App from './App'
// import { useState } from 'react'
import {BrowserRouter}  from 'react-router-dom'
import './nav.css'
// import Education from './Education'
function Navbar(){
    return(
        <>
<div className='container-fluid navbarh '>
        <BrowserRouter>
 <nav className='navbar navbar-expand-lg '>
  <h1 className="nav-brand justify-content-start text1">Pavithra Pawar</h1>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon " style={{backgroundColor:"rgb(216, 33, 233)"}}></span>
    </button>
    <div className="collapse navbar-collapse nav justify-content-end" id="navbarSupportedContent">
 <ul className="nav justify-content-end " >
  <Link spy={true} to="#Home" className="nav-item link btn1" smooth={true}>Home</Link>
  <Link to="#Body1" className="nav-item link btn1  " >About</Link>

  <Link to="#skills" className="nav-item link btn1 ">Skills</Link>
  {/* <Link to="#education" className="nav-item link btn1">Education</Link> */}
  <Link to="#project" className="nav-item link btn1" >projects</Link>
  <Link to="#contact" className="nav-item link btn1" >contacts</Link>
</ul>  </div></nav>
        {/* <Routes>
          <Route path='/home' element={<Text/>}></Route>
          <Route path='/about' element={<Body1/>}></Route>
          <Route path='/servises' element={<Skill/>}></Route>
          <Route path='/education' element={<Education/>}></Route>
          <Route path='/project' element={<Project/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes> */}

        </BrowserRouter>
        </div>
        </>
    )
}
export default Navbar