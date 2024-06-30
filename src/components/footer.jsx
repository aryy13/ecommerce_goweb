import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'; 

const Footer = () => {
    return(
<>
<footer>
    <div className="container text-center margin-custom-tp">
      <h5 className="mb-3"><b> Follow Our Socials </b></h5>
       <FaFacebook  size={30}/> 
       <FaInstagram size={30}/> 
       <FaTwitter size={30}/> 
       <FaWhatsapp size={30}/>
       <h5 style= {{color: 'grey', fontSize: '15px', marginBottom: '40px', marginTop: '10px'}}> © 2024 Lunaetic Inc. All rights reserved.</h5>
     
       
      </div>
    </footer>
</>
    );
};

export default Footer; 