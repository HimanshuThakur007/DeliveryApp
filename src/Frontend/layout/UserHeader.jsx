
import React, { useEffect, useRef, useState } from "react";
import {
  Logo,
  SmallLogo,
  Closes,
  HeaderSearch,
  Flag,
  FlagUS,
  FlagFR,
  FlagES,
  FlagDE,
  Notification,
  Avatar2,
  Avatar3,
  Avatar6,
  Avatar17,
  Avatar13,
  Avatar,
  Logout,
  LogoWhite,
  Avatar1,
  logoExc2,
  logoWhite
} from "../../EntryFile/imagePath";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import '../css/posHeader.css'



const UserHeader = (props) => {
  const [searchBar, SetSearchBar] = useState(false);
  const [toggle, SetToggle] = useState(false);



  let pathname = location.pathname;

  return (
    <>
     <div className="container-fluid header-ct-main" >
       <div className="row ">
        <div className="col-12 d-flex flex-wrap ps-0 pe-0 " >
          {/* ---logo section--------- */}
          <div className="col-lg-2 col-md-2 col-3 order-lg-1 order-md-1 order-1  pt-lg-0 pt-md-0 pt-2 ">
           <div className="d-flex justify-content-end align-self-center">
           <div className="">
           <Link to="/es-ecommerce/dashboard" className="">
            <img src={logoWhite} alt="" style={{height:'50px', width:'80px', objectFit:'contain'}} />
           </Link>
          </div>
           </div>
          </div>
          {/* searchbar------------ */}
          <div className="col-lg-6 col-md-6 col-12 d-flex justify-content-center align-self-center order-lg-2 order-md-2 order-3" >
             <div className="search-bar">
                  <input type="text" placeholder="Search..." className="search-inpt mt-0" />
                  <div className="search-icon">
                    <span>
                      <FeatherIcon icon="search" className="feather-14" />
                    </span>
                  </div>
                </div>
          </div>
          {/* ----cart section----- */}
          <div className="col-lg-4 col-md-4 col-9 order-lg-3 order-md-3 order-2  " >
            <div className=" pt-2 ">
             <ul className="d-flex justify-content-center align-self-center ">
              <li className="nav-item nav-item-box px-lg-5 px-2"><button  className="login-btn">LogIn</button></li>
                  <li className="nav-item nav-item-box px-3"> <button className=" cart-btn "> <span>
                      <FeatherIcon icon="shopping-cart" className="feather-15" style={{color:'white', height:'25px', width:'25px'}} />
                    </span><span className="ps-2 text-white">Cart</span></button>
                  </li>
             </ul>
             </div>
          </div>
        </div>
       </div>
     </div>

     
    </>
  );
};

export default UserHeader;

