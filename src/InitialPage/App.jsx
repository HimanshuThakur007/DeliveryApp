import React, { useEffect,useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import SignIn from './SignIn';
import ForgetPassword from './ForgetPassword';
import SignUp from './SignUp';

import DefaultLayout from './Sidebar/DefaultLayout';
import HomeThree from '../MainPage/Home/home3';

import "../assets/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/js/bootstrap.bundle.min.js";
import "../assets/css/line-awesome.min.css";
import "../assets/css/style.css";
import {decryptCBC } from "../components/common/CryptoUtils.js";
import CryptoJS from 'crypto-js';
import { useAuthContext } from '../components/common/AuthContext.js';


export default function App() {
  const { actions: { setDecryptData } } = useAuthContext();
  const secretKey = process.env.REACT_APP_SECRET_KEY;
  const [key] = useState(CryptoJS.enc.Utf8.parse(secretKey));
  const [iv] = useState(CryptoJS.lib.WordArray.create());
  const location = useLocation();
  const navigate = useNavigate();

  
//----getting data encrypted from session
const storedEncryptedData = JSON.parse(sessionStorage.getItem('encryptedData'));
const getEncData = () => {
  if (storedEncryptedData) {
    const decrypted = decryptCBC(storedEncryptedData, key, iv);
    try {       
      const parsedDecryptedData = JSON.parse(decrypted);
      setDecryptData(parsedDecryptedData);
     } catch (error) {
      console.error('Error while parsing decrypted data:', error);
    }
  }
}

useEffect(() => {
if(storedEncryptedData){
  getEncData()
}  
},[storedEncryptedData]);

  useEffect(() => {
    if (location.pathname.includes('signIn') ||
        location.pathname.includes('signUp') ||
        location.pathname.includes('index-three') ||
        location.pathname.includes('forgetPassword')) {
      document.body.classList.add('account-page');
    }

    return () => {
      document.body.classList.remove('account-page');
    };
  }, [location.pathname]);

  // let url = '103.234.94.224';
  // let port = '881'
  // // let url = '103.194.9.31';
  // // let port = '207'

  // let serverUrl = '103.234.94.224';
  // let serverPort = '881'


  // let localUrl = '103.234.94.224'
  // let localPort ='881';

  // let currentPath = window.location.hostname || "";
  // console.log('cr path',currentPath)
  // React.useEffect(()=>{
  //     if(currentPath == 'localhost' ){
  //         // development
  //         localStorage.setItem('Url',url)
  //         localStorage.setItem('Port', port)

  //     }
  //     else if(currentPath == '103.234.94.224'){
  //         // local server
  //         localStorage.setItem('Url',localUrl)
  //         localStorage.setItem('Port', localPort)
  //     }
  //     else
  //     {
  //         // main external server
  //         localStorage.setItem('Url',serverUrl)
  //         localStorage.setItem('Port', serverPort)
  //     }
  
  // },[currentPath])

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/LogIn');
    }
  }, [location.pathname, navigate]);



  return (
    <Routes>
      <Route path="LogIn" element={<SignIn />} />
      <Route path="forgetPassword" element={<ForgetPassword />} />
      <Route path="signUp" element={<SignUp />} />
      <Route path="delivery/*" element={<DefaultLayout />} />
      <Route path="index-three" element={<HomeThree />} />
    </Routes>
  );
}
