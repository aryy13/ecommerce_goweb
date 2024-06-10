import React from "react";
import { Link } from 'react-router-dom'; 
import SearchBox from "../components/Searchbar";

const Home = () => {
  return(
    <>
<header className="navbar navbar-expand-lg navbar-primary bg-primary p-2 shadow-sm fixed-top"> 
            <a className="navbar-brand text-white fw-bold p-2 text-size1" href= "/"> Go 
            <span className="text-color1 text-size2">byAr</span>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" 
            aria-controls='navbarNav' aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">   
            <ul className="navbar-nav ms-auto">

            <Link to="/">
                <li className="nav-item m-2">
                    <a className="nav-link active text-white" aria-current="page" > Home </a>
                </li> </Link>
                
                <Link to="/signin">
                <li className="nav-item m-2">
                    <a className="nav-link text-white" href="#"> Shop </a>
                </li> </Link>

                <Link to="/signin">
                <li className="nav-item m-2">
                    <a className="nav-link text-white" href="#"> Track </a>
                </li></Link>

                <Link to="/signin">
                <li className="nav-item m-2">
                    <a className="nav-link text-white" href="#">Contact Us</a>
                </li> </Link>

                <Link to="/Signin">
                <li className="nav-item m-2">
                    <button type="button" className="btn btn-sm m-2 btn-outline-light" link to="/login"> Login </button>
                </li> </Link>
            </ul>
        </div>
        </header>

        <section className="bg-primary container-md justify-content-center rounded-3"> 
         <div className="row margin-cust-top1  justify-content-center">
      <div className="col-md-12 p-5">
                <h1 className="text-white text-center fw-bold text-size3"> Selamat Datang di GO
                <span className="text-color1 text-size1">byAr</span> </h1>
                <p className=" text-white text-center fw-strong text-size2"> Temukan semua yang kamu inginkan di sini! </p>
            </div>
        <div> 
           <SearchBox /> 
           </div> 
           </div>    
        </section>

    </>
  ); 
}; 

export default Home; 