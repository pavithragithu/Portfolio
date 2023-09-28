import "./skill.css"
import Education from './Education'
import { useEffect } from "react"
import aos from 'aos'
import 'aos/dist/aos.css'
function Skill(){
  useEffect(()=>{
   aos.init({duration:2000})
  },[])
    return(
        <>
        <div className="container skillbg">
            <div className="row text-center">
            <h1 style={{fontFamily:"sans serif",margin:"4px", color:"white"}} data-aos="fade-down" >my <span style={{color:"rgb(82, 2, 104)",margin:"4px"}}>skills</span></h1>    
            </div>
            <div className="row mb-6">
                <div className="col-md-6 p-2">
                    <img src="https://miro.medium.com/freeze/fit/c/80/56/1*1Xm4NjD-yZ0NF8rOhw1dsw.gif" alt="skills" className="img-fluid" />
                </div>
              <div className="col-md-6 p-6 m-auto" data-aos="fade-left">
                {/* <meter value="50" min="0" max="100"  style={{width:"60px", color:"rgb(182, 15, 197)"}}></meter> */}
                <p>programming skills: <span  style={{marginLeft:"200px"}}>  75%</span></p>  
           <input type="range" value="75" min="0" max="100" style={{width:"330px", backgroundColor:"rgb(182, 15, 197)", height:"20px"}} />
           <p>Web Development skills:         <span style={{marginLeft:"170px"}}>80%</span> </p>  
           <input type="range" value="80" min="0" max="100" style={{width:"330px", backgroundColor:"rgb(182, 15, 197)", height:"20px"}} />
           <p>Frontend skills:          <span style={{marginLeft:"240px"}}>85% </span> </p> 
           <input type="range" value="85" min="0" max="100" style={{width:"330px", backgroundColor:"rgb(182, 15, 197)", height:"20px"}} />
           <p>Backend skills:<span style={{marginLeft:"240px"}}> 70%</span></p>        
           <input type="range" value="70" min="0" max="100" style={{width:"330px", backgroundColor:"rgb(182, 15, 197)", height:"20px"}} />
           <p>logical thinking             <span style={{marginLeft:"240px"}}>60% </span> </p>
           <input type="range" value="60" min="0" max="100" style={{width:"330px", backgroundColor:"rgb(182, 15, 197)", height:"20px"}} />
           <p>communication and soft skills:             <span style={{marginLeft:"125px"}}>75% </span> </p>
           <input type="range" value="60" min="0" max="100" style={{width:"330px", backgroundColor:"rgb(182, 15, 197)", height:"20px"}} />
              </div>

            </div>
            <div className="row mb-4" id="skills">
                <div className="col-md-6 skils1 p-3" data-aos="fade-left">
                <h2 style={{color:"rgb(65, 236, 22)",fontFamily:"monospace"}} >tools and databases</h2>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVj0mmzawk9_psF17GKFkNTvXTcOaQ4hMTpQ&usqp=CAU" alt="" className="img-fluid tool m-4" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ_WTiLZojMOws1ltb6K502_hdgn2rSrNTgh0e-r8gVQ&s" alt="" className="img-fluid tool m-4 " />
                <img src="https://w7.pngwing.com/pngs/640/199/png-transparent-javascript-logo-html-javascript-logo-angle-text-rectangle-thumbnail.png" alt="" className="img fluid tool m-4 " />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png" alt="" className="img-fluid tool m-4 " />
                <img src="https://w7.pngwing.com/pngs/720/46/png-transparent-jquery-plain-wordmark-logo-icon-thumbnail.png" alt="" className="img-fluid tool m-4" />
                <img src="https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png" alt="" className="img-fluid tool m-4 " />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png?20170401104355" alt="" className="im-fluid tool m-4 " />
                <img src="https://w7.pngwing.com/pngs/63/19/png-transparent-mongodb-database-nosql-postgresql-mongo-text-logo-business-thumbnail.png" alt="" className="img-fluid tool m-4 " />
                <img src="https://media.trustradius.com/product-logos/h3/JA/T1A83W5H538P.PNG" alt="" className="img-fluid tool m-4 " />
                <img src="https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png" alt="" className="img-fluid tool m-4 " />
                {/* <img src="" alt="" className="img fluid tool" />
                <img src="" alt="" className="img fluid tool" /> */}
                </div>
                <div className="col-md-6 skils1" data-aos="fade-right">
                    <img src="https://cdni.iconscout.com/illustration/premium/thumb/girl-doing-online-graduation-5149963-4315704.png" alt="" className="img-fluid p-8 tool2"/>
                </div>
            </div>
        </div>
        
        <Education/>
        </>
    )
}
export default Skill