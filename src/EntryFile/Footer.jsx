import React from 'react';
import './footer.css'
import { NavLink } from 'react-router-dom';
// import {FaHome} from 'react-icons/fa'
import { FaFacebookF} from 'react-icons/fa'
import { BsTwitter, BsInstagram} from 'react-icons/bs'
// import {BiUser} from 'react-icons/bi'
// import {MdPermContactCalendar} from 'react-icons/md'


const Footer = ({path}) => {

  const navLinkStyle2 = ({ isActive }) => {
    return {
      color: isActive ? "red" : "white",
      textDecoration: "none",
    
    };
  };

  const navLinkStyle3 = ({ isActive }) => {
    return {
      color: isActive ? "red" : "white",
      textDecoration: "none",
    
    };
  };


  return (
    <div className='container-fluid footer-main-ct '>
       <div className="row">
          <div className="col-12 ps-0 pe-0">
            {/* box-1 */}
            <div className={path == "home" ? "col-12  footer-box-one-home d-flex justify-content-center" : "col-12  footer-box-one d-flex justify-content-center"}>
                <div className='col-lg-12 col-12 d-lg-flex d-flex flex-wrap'>
                 {/* <div className="col-lg-3 col-md-6 col-12  d-flex justify-content-lg-start justify-content-center footer-logo-sec ">
                 <NavLink to="/home" style={{textDecoration:'none'}}> <h1 className={path == 'home'?'logo-txt-footer-home' :'logo-txt-footer'} >Portfolio.</h1></NavLink>
                 </div> */}
                 <div className="col-lg-6 col-md-12 col-12 footer-nav-box ">
                
                  <ul className="list-menu d-lg-flex d-flex px-2"> 
                    <li className="d-flex px-lg-4 px-2 "><NavLink to="#" style={path == 'home' ? navLinkStyle3 : navLinkStyle2}>About Us</NavLink></li>
                    <li className="d-flex px-lg-4 px-2 "><NavLink to="#" style={path == 'home' ? navLinkStyle3 : navLinkStyle2}>Blog</NavLink></li>
                    <li className="d-flex px-lg-4 px-2  "><NavLink to="#" style={path == 'home' ? navLinkStyle3 : navLinkStyle2}>Contact</NavLink></li>            
                  </ul>
                
                 </div>
                 <div className="col-lg-6 col-md-12 col-12 footer-social-icons">
                   <ul className='social-icon-list d-flex justify-content-around'>
                    <li className='social-icon-box'><NavLink to="#"><span><FaFacebookF  style={{height: '50px', background: 'none'}} className='icon-footer' /></span></NavLink></li>
                    <li className='social-icon-box'><NavLink to="#"><span><BsTwitter style={{height: '50px', width:'30px', background: 'none' }} className='icon-footer' /></span></NavLink></li>
                    <li className='social-icon-box'><NavLink to="#"><span><BsInstagram style={{height: '50px', width:'30px'}} className='icon-footer' /></span></NavLink></li>
                   </ul>
                 </div>
                </div>
            </div>
            {/* box-2 */}
            <div className="col-12 footer-box-two ">
                <span className= 'text-white'><h6 className='text-white'>©️ Copyright 2023 - Developed By <span className='text-primary pe-1'>Excellent</span><span className='text-danger'>Softwares</span></h6></span>
            </div>
          </div>
       </div>
    </div>
  )
}

export default Footer