import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
function Footer(){
    return(
        <>
        <div className="container-fluid footer p-3">
        <div className="row pl-20px">
            <div className="col-md-6 p-6 text-center">
                <div className='name1'>
                <h1 className='text1'>Pavithra  Pawar</h1></div>
                <br/>
                <h6 className="text-light">Aspiring full stack developer|passionate coder|Still finder </h6>
                <br/>
                <h5 className='text-light'>living learning |leveling up</h5>
                <p>One day at a time</p>
            </div>
            <div className="col-md-6 text-center ">
                <div >
                <h5 className='icon2'>contact with me:</h5><br/>
                <span> 
                <a href='https://www.linkedin.com/in/pavithra-jarapla-811626256/' className='m-2 fs-3'><LinkedInIcon/></a>
                <a href='https://web.whatsapp.com/' className='m-2 fs-3'> <WhatsAppIcon/></a>
                <a href='https://www.instagram.com/' className='m-2 fs-3'><InstagramIcon/></a>
                <a href='https://github.com/pavithragithu' className='m-2 fs-3'><GitHubIcon/></a></span>
                </div></div>
                <hr className='bg-light '/>
                <p className='text-center'> &copy; 2022||Fullstack developer </p>
            </div>
        </div>
        </>
    )
}
export default Footer