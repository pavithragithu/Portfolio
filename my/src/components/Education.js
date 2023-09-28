import SchoolIcon from '@mui/icons-material/School';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import "./skill.css"
import { useEffect } from "react"
import aos from 'aos'
import 'aos/dist/aos.css'
function  Education(){
    useEffect(()=>{
     aos.init({duration:2000})
    })
    return(
        <>
        <div className="container" id="education" style={{backgroundColor:"rgb(45, 46, 46)"}}>
            <div className="row">
<div className="row">
    <h2 className='text-warning '> Educational Qualification</h2>
<div className="col-md-6" data-aos="flip-left">
<vr/>
<div><span><SchoolIcon className="icon"/><div className='vl'>
<h5 className='year'> 2019 - 2022</h5>
<h5 className='h4'>Telangana social welfare residencial degree college(women) siddipet</h5>
<p className='para'>I have completed bachelores degree in the stream of Bsc(MSCs) at siddipet</p></div>
</span></div>
<div><span><LibraryBooksIcon className="icon"/><div className='vl'><vr/>
<h5 className='year'>2017 - 2019</h5>
<h5 className='h4'>TSWREIS junior college Ramayampet</h5>
<p className='para'>Completed intermediate with MPC group at ramayampet medak</p>
</div></span></div>
<div><span> <MenuBookIcon className="icon"/><div className='vl'>
    <h5 className='year'>2017</h5>
    <h5 className='h4'>ZP  high  School</h5>
    <p className='para'>High scholl matriculate from ZPHS somakkapet ,medak</p>
</div></span>
</div>
            </div>
        </div>
        </div>
        </div>
        </>
    )
}
export default Education