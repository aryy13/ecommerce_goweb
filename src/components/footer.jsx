import React from "react";
import {  FaTwitter, FaShopee } from 'react-icons/fa'; 

const Footer = () => {
    return(
<>
<footer>
    <div className="container text-center margin-custom-tp">
      <h5 className="mb-3"><b> Follow Our Socials </b></h5>
    <a href ="https://x.com/markincity_?t=E7Thg7sFdEatdFYljvLxyA&s=09"> 
    <FaTwitter /> 
    </a>
    <a href ="https://s.shopee.co.id/3VPhUSk4wU"> 
     <FaShopee /> 
     </a>
       
      </div>
    </footer>
</>
    );
};

export default Footer; 