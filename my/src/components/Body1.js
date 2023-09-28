import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import {useEffect} from "react"
import "./text.css"
import aos from 'aos'
import 'aos/dist/aos.css'

function Body1(){
    useEffect(()=>{
aos.init({duration:2000})
},[])
    return(
        <>
        <div className="container" id='Body1' style={{backgroundColor:"rgb(36, 34, 39)"}}>
        <div className="row text-center">
        <h1  className='aboutme'>About  <span style={{color:"rgb(33, 230, 15)"}}>me</span></h1>
        </div>  
        <div className="row">
            <div className="col-md-6 text-center pic1" data-aos="fade-right">
                <img src="https://icon-library.com/images/female-employee-icon/female-employee-icon-17.jpg" alt=" pavithra" className="img-fluid img2"/>
            </div>
            <div className="col-md-6 p-4" data-aos="flip-right">
                <h3 className="text-primary">i'm pavithra Pawar</h3>
                <h6 className="text-success">Frontend Developer and Aspiring Fullstack Developer</h6>
                <p>"progress is progress; no matter how small it is"</p>
                <div className="row mb-4">
                <div className="col-md-7 p-2">
                    <p style={{color:"rgb(173, 159, 152)"}}><b> Email: </b>jaraplapavithra248@gmail.com</p>
                    <p style={{color:"rgb(173, 159, 152)"}}><b> Place: </b> hyderabad 500001</p>
                </div>
                <div className="col-md-4 p-2 ">
                    <p style={{color:"rgb(173, 159, 152)"}}><b>Age:</b>21</p>
                    <p style={{color:"rgb(173, 159, 152)"}}><b>pn no:</b>9515339409</p>
                </div>
                </div>
                <div className="row  text-light mb-4">
                    <div>
                        <span className='m-2 fs-3'> <a href='https://www.linkedin.com/in/pavithra-jarapla-811626256/'><LinkedInIcon/></a></span>
                        <span className='m-2 fs-3'><a href='https://web.whatsapp.com/'> <WhatsAppIcon/></a></span>
                        <span className='m-2 fs-3'><a href='https://www.instagram.com/'><InstagramIcon/></a></span>
                        <span className='m-2 fs-3'><a href='https://github.com/pavithragithu'><GitHubIcon/></a></span></div>
                </div>
            </div>
        </div>
        <div className='row'>
            <p data-aos="fade" className='m-8 p-3'>Hii,i am pavithra pawar .I have completed my  bachelor degree at TSWRDC(w) siddipet college .iam a self-tough programmer with excellence in core programming java,javascript and web Development
                .I have strong foundation on learning new skills,passionate about software Engineer and  Fullstack Development.Seeking a role  in an mnc where i can launch my career and build a valuable skill set.
            </p>
        </div>
        </div>
        </>
    )
}
export default Body1