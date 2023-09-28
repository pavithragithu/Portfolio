
import {useEffect} from "react"
import Particle from '../Particle.js'; 
import "./text.css"
import aos from 'aos'
import './App.css';
import 'aos/dist/aos.css'
import { HashLink as Link } from 'react-router-hash-link';
import {BrowserRouter } from 'react-router-dom';
function Text(){
    useEffect(()=>{
        aos.init({duration:1000})
        },[])
    return(
        <>
        <div className="container" id="Home">
            <div className="row ">
            <Particle id="tsparticles"/>
<div className="col-10 col-xs-10 col-md-10 col-lg-5 col-xl-5 text" data-aos="zoom-in">
    <h1 style={{color:"brown"}} className='pavi'>i'm <span style={{color:"rgb(25, 215, 221)",fontSize:"8vmin ",fontStyle:"sans serif"}}>jarapla&nbsp; Pavithra Pawar</span></h1>
    <h4 style={{color:"rgb(199, 219, 12)"}}>Fullstack Developer</h4>
    <BrowserRouter>
    <button className="btn btn-outline-warning m-3"><a href='Downloads/latest_one.pdf'>resume</a></button>
    <button className="btn btn-outline-warning m-3" ><Link to="#Body1">About me</Link></button>
    </BrowserRouter>
</div>
<div className="col-12 col-xs-12 col-md-12 col-lg-6 col-xl-6 pic" data-aos="Zoom-out">
    <img src="https://www.vhv.rs/dpng/d/488-4884013_employee-clipart-excited-employee-excited-transparent-employee-clipart.png" alt="" className="img-fluid img1"></img>
</div>
    </div>
    
        </div>
        </>
    )
}
export default Text