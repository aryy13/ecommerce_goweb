import React from "react";
import {  FaTwitter, FaShoppingCart} from 'react-icons/fa'; 
import { FaMapLocation } from "react-icons/fa6";

const Footer = () => {
    return(
<>
<footer>
    <div className="container text-center margin-custom-tp">
      <h5 className="mb-3"><b> Follow Our Socials </b></h5>
    <a href ="https://x.com/markincity_?t=E7Thg7sFdEatdFYljvLxyA&s=09"> 
    <FaTwitter size={40} color="black" margin-right="5px" /> 
    </a>
    <a href ="https://s.shopee.co.id/3VPhUSk4wU"> 
     <FaShoppingCart size={40} color="black" margin-right="5px"/> 
     </a>
     <a href ="https://www.bing.com/maps?osid=0d217607-9a90-42c9-9be0-558882e7b2ba&cp=-6.589241~106.
     721186&lvl=12.444968&pi=0&imgid=d07d1c8c-
     f5f6-4ffd-8da4-4370ba93144a&v=2&sV=2&form=S00027"> 
     <FaMapLocation size={40} color="black" /> 
     </a>
       
      </div>
    </footer>
</>
    );
};

export default Footer; 