import React from "react";
import { Link, NavLink } from 'react-router-dom'; 
import styled  from "styled-components";
import Footer from "../components/footer";

const GradientNavbar = styled.nav`
  background: linear-gradient(135deg,  #FF7E5F, #FEB47B, #FF6B6B );
`;

const Shop = () => {
 return (

    <>
    <GradientNavbar className="navbar navbar-expand-lg nav-bg p-2 shadow-sm fixed-top"> 
            <a className="navbar-brand text-white fw-bold p-2 text-size1" href= "/"> GO <span className="text-size2 p-1" >by</span> 
            <span className="text-color1 text-size2">Lunaetic</span>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" 
            aria-controls='navbarNav' aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">   
            <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <NavLink className="nav-link text-white m-2" to="/" activeClassName="active">Home</NavLink>
              </li>
                
              <li className="nav-item">
              <NavLink className="nav-link text-white m-2" to="/shop" activeClassName="active">Katalog</NavLink>
              </li>

                <Link to="/Signin">
                <li className="nav-item text-white m-2">
                    <button type="button" className="btn btn-sm m-2 btn-outline-light" link to="/login"> Login </button>
                </li> </Link>
            </ul>
        </div>
        </GradientNavbar>

        <GradientNavbar className="nav-bg container-md container-lg justify-content-center rounded-3"> 
         <div className="row margin-cust-top1 justify-content-center">
      <div className="col-md-12 p-3">
                <h1 className="text-white text-center fw-bold text-size1"> Mari Mulai Belanja! </h1>
                
            </div>
           </div> 
</GradientNavbar>

<section> 
           <div className="container-fluid m-5">
           <div className="row">
               <GradientNavbar className="col-md-4 background-card text-white margin-cust-left2 ml-auto">
               <GradientNavbar className="background-card  d-flex justify-content-center align-items-center">
                  <button type="button" className="btn btn-danger m-3 center" disabled data-bs-toggle="button">Kategori Produk</button>
               </GradientNavbar>
               <button type="button" class="btn btn-primary">Fanmade</button>
<button type="button" class="btn btn-secondary">Official</button>
<button type="button" class="btn btn-success">Membership</button>
<button type="button" class="btn btn-danger">Merch</button>
<button type="button" class="btn btn-warning">album</button>
<button type="button" class="btn btn-info">season greeting</button>
<button type="button" class="btn btn-light">dicon</button>
<button type="button" class="btn btn-dark">Doll</button>
<button type="button" class="btn btn-secondary">lightstick</button>
<button type="button" class="btn btn-warning">magazine</button>

               </GradientNavbar>

          <div className="col-md-6 bg-light text-dark margin-cust-left2">
          <div className="container text-center mt-3">
          <div className="row">

          <div className="col-sm-6 col-md-3 mb-3">
          <div className="card shadow-lg " style={{width: '200px'}}>
            <img src="./engene.jpg" className="card-img-top img-fluid"style={{height:'150px', width:'200px'}}  alt="ENHYPEN"/>
          <div classNames="card-body ">
            <a href="#" class="btn btn-sm btn-custom"> engene bong </a> 
            </div>
            </div>
            </div>

          <div className="col-sm-6 col-md-3 margin-cust-left2">
          <div className="card shadow-lg " style={{width: '200px'}}>
            <img src="./memorabilia.jpg" className="card-img-top img-fluid"style={{height:'150px', width:'200px'}}  alt="ENHYPEN"/>
          <div classNames="card-body ">
            <a href="#" class="btn btn-sm btn-custom"> EN- Memorabilia album </a> 
          </div>
          </div>
          </div>

          <div className="col-sm-6 col-md-3 margin-cust-left2">
          <div className="card shadow-lg " style={{width: '200px'}}>
            <img src="./enha-doll.jpg" className="card-img-top img-fluid"style={{height:'150px', width:'200px'}}  alt="ENHYPEN"/>
          <div classNames="card-body ">
            <a href="#" class="btn btn-sm btn-custom"> ENHYPEN doll fanmade </a> 
          </div>
          </div>
          </div>

          <div className="col-sm-6 col-md-3 mb-3">
          <div className="card shadow-lg " style={{width: '200px'}}>
            <img src="./orangeblood.jpg" className="card-img-top img-fluid"style={{height:'150px', width:'200px'}}  alt="ENHYPEN"/>
          <div classNames="card-body ">
            <a href="#" class="btn btn-sm btn-custom"> EN- Orange Blood album</a> 
          </div>
          </div>
          </div>

          <div className="col-sm-6 col-md-3 margin-cust-left2 ">
          <div className="card shadow-lg " style={{width: '200px'}}>
            <img src="./darkblood.jpg" className="card-img-top img-fluid"style={{height:'150px', width:'200px'}}  alt="ENHYPEN"/>
          <div classNames="card-body ">
            <a href="#" class="btn btn-sm btn-custom"> EN- Dark Blood album </a> 
          </div>
          </div>
          </div>

          <div className="col-sm-6 col-md-3 margin-cust-left2 ">
          <div className="card shadow-lg " style={{width: '200px'}}>
            <img src="./manifesto.jpg" className="card-img-top img-fluid"style={{height:'150px', width:'200px'}}  alt="ENHYPEN"/>
          <div classNames="card-body ">
            <a href="#" class="btn btn-sm btn-custom"> EN- Manifesto album </a> 
          </div>
          </div>
          </div>

          <div className="col-sm-6 col-md-3 mb-3 ">
          <div className="card shadow-lg " style={{width: '200px'}}>
            <img src="./bordercarnival.jpg" className="card-img-top img-fluid"style={{height:'150px', width:'200px'}}  alt="ENHYPEN"/>
          <div classNames="card-body ">
            <a href="#" class="btn btn-sm btn-custom"> EN- Border: Carnival album </a> 
          </div>
          </div>
          </div>

          <div className="col-sm-6 col-md-3 margin-cust-left2 ">
          <div className="card shadow-lg " style={{width: '200px'}}>
            <img src="./dimensiondilemma.jpg" className="card-img-top img-fluid"style={{height:'150px', width:'200px'}}  alt="ENHYPEN"/>
          <div classNames="card-body ">
            <a href="#" class="btn btn-sm btn-custom"> EN- Dimention Dilemma </a> 
          </div>
          </div>
          </div>

          <div className="col-sm-6 col-md-3 margin-cust-left2 ">
          <div className="card shadow-lg " style={{width: '200px'}}>
            <img src="./borderday1.jpg" className="card-img-top img-fluid"style={{height:'150px', width:'200px'}}  alt="ENHYPEN"/>
          <div classNames="card-body ">
            <a href="#" class="btn btn-sm btn-custom"> EN- Border: day one album </a> 
          </div>
          </div>
          </div>

          <div className="col-sm-6 col-md-3 mb-3">
          <div className="card shadow-lg " style={{width: '200px'}}>
            <img src="./dimensionanswer.jpg" className="card-img-top img-fluid"style={{height:'150px', width:'200px'}}  alt="ENHYPEN"/>
          <div classNames="card-body ">
            <a href="#" class="btn btn-sm btn-custom"> EN- Dimension: Answer album </a> 
          </div>
          </div>
          </div>

          <div className="col-sm-6 col-md-3 margin-cust-left2 ">
          <div className="card shadow-lg " style={{width: '200px'}}>
            <img src="./japan.jpg" className="card-img-top img-fluid"style={{height:'150px', width:'200px'}}  alt="ENHYPEN"/>
          <div classNames="card-body ">
            <a href="#" class="btn btn-sm btn-custom"> EN- Japan album </a> 
          </div>
          </div>
          </div>

          <div className="col-sm-6 col-md-3 margin-cust-left2">
          <div className="card shadow-lg " style={{width: '200px'}}>
            <img src="./engene.jpg" className="card-img-top img-fluid"style={{height:'150px', width:'200px'}}  alt="ENHYPEN"/>
          <div classNames="card-body ">
            <a href="#" class="btn btn-sm btn-custom"> engene bong </a> 
          </div>
          </div>
          </div>



          



</div>     
</div>
</div> 

</div>
</div> 
    
</section>

<section> 
  <Footer /> 
</section>

    </>
 )
}



export default Shop; 