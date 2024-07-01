import React from "react";
import { Link, NavLink} from 'react-router-dom'; 
import SearchBox from "../components/Searchbar";
import styled from "styled-components";
import { IoIosArrowForward } from 'react-icons/io';
import { BsPerson } from 'react-icons/bs';
import Footer from "../components/footer";



const GradientNavbar = styled.nav`
  background: linear-gradient(135deg,  #FF7E5F, #FEB47B, #FF6B6B );
`;

const Home = () => {
  return(
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
              
            </ul>
        </div>
        </GradientNavbar>

        <GradientNavbar className="bg-primary container-md justify-content-center rounded-3"> 
         <div className="row margin-cust-top1  justify-content-center">
      <div className="col-md-12 p-4">
                <h1 className="text-white text-center fw-bold text-size3"> Selamat Datang di GO <span className="text-size2" >by</span>
                <span className="text-color1 text-size1">Lunaetic</span> </h1>
                <p className=" text-white text-center fw-strong text-size2"> Temukan semua yang kamu inginkan di sini! </p>
            </div>
      
           </div>    
        </GradientNavbar>


<section className="container-lg container-md container-sm ">
    <div className="row margin-cust-top2">
        <div className="col-md  text-left fw-bold"> 
            <h4> apa yang kamu cari? </h4>
        </div>
    </div>

    <div className="container text-center mt-3">
        <div className="row">
        <div className="col-sm-6 col-md-3 mb-3"> <div class="card shadow-lg " style={{width: '15rem'}}>
                <img src="./engene.jpg" className="card-img-top img-fluid"style={{height:'200px', width:'auto'}}  alt="ENHYPEN"/>
                <div classNames="card-body ">
                  <h5 className="card-title mt-2"> <b>OFFICIAL </b> </h5>
                </div>
              </div>
            </div>

    <div className="col-sm-6 col-md-3 mb-3"> <div class="card shadow-lg " style={{width: '15rem'}}>
                <img src="./enha-doll.jpg" className="card-img-top img-fluid"style={{height:'200px', width:'auto'}}  alt="gambar harvard"/>
                <div classNames="card-body ">
                  <h5 className="card-title mt-2"><b>FANMADE</b> </h5>
                </div>
              </div>
            </div>

    <div className="col-sm-6 col-md-3 mb-3"> <div class="card shadow-lg " style={{width: '15rem'}}>
                <img src="./Tiket.jpg" className="card-img-top img-fluid"style={{height:'200px', width:'auto'}}  alt="gambar harvard"/>
                <div classNames="card-body ">
                  <h5 className="card-title mt-2"> <b> Jasa Tiket</b> </h5>
                </div>
              </div>
            </div>

    <div className="col-sm-6 col-md-3 mb-3"> <div class="card shadow-lg " style={{width: '15rem'}}>
                <img src="./enha-1.jpg" className="card-img-top img-fluid"style={{height:'200px', width:'auto'}}  alt="gambar harvard"/>
                <div classNames="card-body ">
                  <h5 className="card-title mt-2 "> <b> lain-lain </b> </h5>
                 
                </div>
              </div>
            </div>
    </div>
    </div>
</section>


<section className="container-lg container-md container-sm margin-cust-top2 ">
    <div className="row ">
        <div className="col-md  text-left fw-bold"> 
            <h4> Best Buy <IoIosArrowForward /> </h4>
        </div>
    </div>

    <div className="container text-center mt-3">
        <div className="row">
        <div className="col-sm-6 col-md-3 mb-3"> <div class="card shadow-lg " style={{width: '15rem'}}>
                <img src="./engene.jpg" className="card-img-top img-fluid"style={{height:'200px', width:'auto'}}  alt="ENHYPEN"/>
                <div classNames="card-body ">
                  <h5 className="card-title mt-2"> <b>engene bong </b> </h5>
               
                </div>
              </div>
            </div>

    <div className="col-sm-6 col-md-3 mb-3"> <div class="card shadow-lg " style={{width: '15rem'}}>
                <img src="./enha-doll.jpg" className="card-img-top img-fluid"style={{height:'200px', width:'auto'}}  alt="gambar harvard"/>
                <div classNames="card-body ">
                  <h5 className="card-title mt-2"><b>EN-DOLL FANMADE </b> </h5>
                  
                </div>
              </div>
            </div>

    <div className="col-sm-6 col-md-3 mb-3"> <div class="card shadow-lg " style={{width: '15rem'}}>
                <img src="./memorabilia.jpg" className="card-img-top img-fluid"style={{height:'200px', width:'auto'}}  alt="gambar harvard"/>
                <div classNames="card-body ">
                  <h5 className="card-title mt-2"> <b>EN- Memorabilia Album</b> </h5>
                 
                </div>
              </div>
            </div>

    <div className="col-sm-6 col-md-3 mb-3"> <div class="card shadow-lg " style={{width: '15rem'}}>
                <img src="./darkblood.jpg" className="card-img-top img-fluid"style={{height:'200px', width:'auto'}}  alt="gambar harvard"/>
                <div classNames="card-body ">
                  <h5 className="card-title mt-2 "> <b> EN- Dark Blood album </b> </h5>
                 
                </div>
              </div>
            </div>
    </div>
    </div>
</section>

<section>
      <div className="container margin-cust-top2">
        <h4> <b> Testimoni</b></h4>
          <div className="row margin-custom-tp">
          <div className="col-md-4 col-sm-6 mb-4 mx-auto">
          <div className="card text-bg-custom  pt-3 radius-custom" style= {{maxWidth: '18rem', alignItems: 'start'}}>
          <div className="icon"> <BsPerson size={35} color="blue" style={{ marginLeft: '12px'}}/> </div>      
             <div className="card-body">
               <h5 className="card-title" style={{textAlign: 'left'}}> <b>Park Sunghoon</b> </h5>
                   <p className="card-text" style={{textAlign: 'left', color: 'grey', fontSize: '15px'}}> Dengan adanya website ini, memudahkan saya untuk melihat produk yang saya inginkan tanpa harus mencari di grup chat
                  </p>
          </div>
          </div>
          </div>

          <div className="col-md-4 col-sm-6 mb-4 mx-auto">
          <div className="card text-bg-custom  pt-3 radius-custom" style= {{maxWidth: '18rem', alignItems: 'start'}}>
          <div className="icon"> <BsPerson size={35} color="blue" style={{ marginLeft: '12px'}}/> </div>      
             <div className="card-body">
               <h5 className="card-title" style={{textAlign: 'left'}}> <b>Park Jeongseong</b> </h5>
                   <p className="card-text" style={{textAlign: 'left', color: 'grey', fontSize: '15px'}}> Dengan adanya website ini, memudahkan saya untuk melihat produk yang saya inginkan tanpa harus mencari di grup chat
                  </p>
          </div>
          </div>
          </div>

          <div className="col-md-4 col-sm-6 mb-4 mx-auto">
          <div className="card text-bg-custom  pt-3 radius-custom" style= {{maxWidth: '18rem', alignItems: 'start'}}>
          <div className="icon"> <BsPerson size={35} color="blue" style={{ marginLeft: '12px'}}/> </div>      
             <div className="card-body">
               <h5 className="card-title" style={{textAlign: 'left'}}> <b>Yang Jungwon</b> </h5>
                   <p className="card-text" style={{textAlign: 'left', color: 'grey', fontSize: '15px'}}> Dengan adanya website ini, memudahkan saya untuk melihat produk yang saya inginkan tanpa harus mencari di grup chat
                  </p>
          </div>
          </div>
          </div>
           
      </div>
      </div>
      </section>
    
<section className="margin-cust-top1">
  <Footer /> 
</section>
      </>

        
    
  ); 
}; 

export default Home; 