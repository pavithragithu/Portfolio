import './project.css'
import pic1 from '../images/tourism.png'
import pic2 from '../images/innomatics.png'
import pic3 from '../images/charity.png'
import pic4 from '../images/bmi.png'
import pic5 from '../images/calculator.png'
import pic6 from '../images/note.png'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import { useState } from 'react'
// import { useNavigate} from 'react-router-dom'
// import {HashLink as Link} from "react-router-hash-link"
// import { useState } from 'react'
// import { Router,Routes,Route } from 'react-router-dom'
// import Project from './Project'
// import Text from './Text'



function Projects(){
//     const navigate=useNavigate()
    
// const [Open,setOpen]=useState(false)

//    const openHandler=()=>{
//     setOpen(true)
    // navigate('/project')
   
    return(
        <>
        <div className="container" id='project'>
            <div className="row">
                <h2 className='text-center m-3' style={{color:"rgb(236, 22, 15)"}}>my <span style={{color:"rgb(5, 20, 151)"}}>projects</span></h2>
                <div className="row">++
                <div className="col-10 col-sm-10 col-md-3 col-lg-3 col-xl-3 col-xxl-3 card  card1"  >
           <div className='card-text m-2'><h5 style={{color:"rgb(236, 22, 154)"}}>trippy travel webpage </h5></div>
           <img src={pic1} className="img-fluid" alt="." style={{borderRadius:'10px'}}/>
           <div className="card-body">
           <p className="card-text para1" >I have created trippy travel webpage  with the help of html,css,bootstarp,react.And it responsive for all screen devices.this webpage is helps to choose best desination in india.</p>
           <div className='icons'><a href='https://sage-baklava-c97ffd.netlify.app'><OpenInNewIcon className='icons'/></a>&nbsp; &nbsp;
           <a href='#'>< GitHubIcon className='icons'/></a></div>
           </div>
            </div>
            <div className="col-10 col-sm-10 col-md-3 col-lg-3 col-xl-3 col-xxl-3 card  card1" >
            <div className='card-text m-2'><h5 style={{color:"rgb(236, 22, 154)"}}>innomatics reaserch lab home page </h5></div>
         <img src={pic2} className="img-fluid" alt="..." style={{borderRadius:'10px'}}/>
        <div className="card-body">
    <p className="card-text para1"> Implimented innomatics reaserch lab homepage with the help of html,css,bootstarp,javascript.</p>
  
    <div ><a href='https://bright-manatee-3452d1.netlify.app'><OpenInNewIcon  className='icons'/></a>&nbsp; &nbsp;
           <a href='#'>< GitHubIcon className='icons'/></a></div>
   </div>
   </div>
   <div className="col-10 col-sm-10 col-md-3 col-lg-3 col-xl-3 col-xxl-3 card  card1">
   <div className='card-text m-2'><h5 style={{color:"rgb(236, 22, 154)"}}>changemakers foundation  webpage </h5></div>
         <img src={pic3} className="img fluid" alt="..." style={{borderRadius:'10px'}}/>
        <div className="card-body">
     <p className="card-text para1">I have created changemakers charity webpage  with the help of html,css,bootstarp,javascript.It responsive for all screen devices.in this webpage you can know aboutchange makers activity.</p>
    
    <div className='icons'><a href='https://changemakersinfo.netlify.app'><OpenInNewIcon className='icons'/></a>&nbsp; &nbsp;
           <a href='#'>< GitHubIcon className='icons'/></a></div>
   </div>
   </div>
   
          <div className="col-10 col-sm-10 col-md-3 col-lg-3 col-xl-3 col-xxl-3 card  card1"  >
           <div className='card-text m-2'><h5 style={{color:"rgb(236, 22, 154)"}}>BMI calculator Application </h5></div>
           <img src={pic4} className="img-fluid" alt="." style={{borderRadius:'10px'}}/>
           <div className="card-body">
           {/* <p className="card-text para1" >I have created trippy travel webpage  with the help of html,css,bootstarp,react.And it responsive for all screen devices.this webpage is helps to choose best desination in india.</p> */}
           <div className='icons'><a href='https://bmicalculater1.netlify.app'><OpenInNewIcon className='icons'/></a>&nbsp; &nbsp;
           <a href='#'>< GitHubIcon className='icons'/></a></div>
           </div>
            </div>

            <div className="col-10 col-sm-10 col-md-3 col-lg-3 col-xl-3 col-xxl-3 card  card1"  >
           <div className='card-text m-2'><h5 style={{color:"rgb(236, 22, 154)"}}> calculator Application </h5></div>
           <img src={pic5} className="img-fluid" alt="." style={{borderRadius:'10px'}}/>
           <div className="card-body">
           {/* <p className="card-text para1" >I have created trippy travel webpage  with the help of html,css,bootstarp,react.And it responsive for all screen devices.this webpage is helps to choose best desination in india.</p> */}
           <div className='icons'><a href='https://effortless-baklava-96595d.netlify.app'><OpenInNewIcon className='icons'/></a>&nbsp; &nbsp;
           <a href='#'>< GitHubIcon className='icons'/></a></div>
           </div>
            </div>
            <div className="col-10 col-sm-10 col-md-3 col-lg-3 col-xl-3 col-xxl-3 card  card1"  >
           <div className='card-text m-2'><h5 style={{color:"rgb(236, 22, 154)"}}> Notes Application </h5></div>
           <img src={pic6} className="img-fluid" alt="." style={{borderRadius:'10px'}}/>
           <div className="card-body">
           {/* <p className="card-text para1" >I have created trippy travel webpage  with the help of html,css,bootstarp,react.And it responsive for all screen devices.this webpage is helps to choose best desination in india.</p> */}
           <div className='icons'><a href='https://unrivaled-fudge-2403f2.netlify.app'><OpenInNewIcon className='icons'/></a>&nbsp; &nbsp;
           <a href='#'>< GitHubIcon className='icons'/></a></div>
           </div>
            </div>
            <div className='text-center'>
     
    {/* <button className='m-5 b1' onClick={openHandler} >view more<ArrowBackIcon/> {Open ? 'Collapse':'Expand'}</button>
    {!Open && (
   navigate('/project'))} */}
   </div>
            </div>
        
            </div>
            </div>
        </>
    )
}
export default Projects