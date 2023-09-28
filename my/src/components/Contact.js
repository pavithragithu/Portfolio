import React from 'react';
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';
function Contact (){
    return(
        <>
        <div className="container" id='contact'>
            <div className="row form1 p-3">
                <h2 className="text-center text-light">Get <span style={{color:"rgb(236, 22, 154)"}}>in touch</span></h2>


                <div className="col-md-6">
                    <img src="https://cdni.iconscout.com/illustration/premium/thumb/contact-us-3483604-2912020.png" alt="..." className="img-fluid cell"/>
                </div>

                <div className="col-md-6 form">
                    <h3>Interested in working together?</h3>
                    <p>mail  me on: <a href="jaraplapavithra248@gmail.com"><EmailIcon/></a></p>
                    <label><b>Name:</b></label><br/>
                    <input type="text" placeholder="name" name="name" className="form-control"/>
                    <label ><b>Email</b></label><br/>
                    <input type="email" placeholder="email" name="email" className="form-control"/>
                    <label>message:</label><br/>
                    <textarea name="msg" placeholder="write a message" className="form-control"></textarea><br/>
                    <submit className="form-control bg-primary text-light text-center">send message<SendIcon/></submit>
                  
                </div>
               
            </div>

        </div>
        
        </>
    )

}
export default Contact