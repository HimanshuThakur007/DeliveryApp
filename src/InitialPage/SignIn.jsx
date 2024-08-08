/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import {
  LoginImage,
  Logo,
  MailIcon,
  GoogleIcon,
  FacebookIcon,
} from "../EntryFile/imagePath";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Slogo from "../assets/images/shantiLogo1.png";
import { encryptCBC } from "../components/common/CryptoUtils";
import CryptoJS from "crypto-js";
// import ReactLoader from '../components/common/ReactLoader';
import { useAuthContext } from "../components/common/AuthContext";
import ReactLoader from "../CustomComps/ReactLoader";

const SignInPage = (props) => {
  const { actions } = useAuthContext();
  const secretKey = process.env.REACT_APP_SECRET_KEY;
  const url = process.env.REACT_APP_PRO_BASEURL;
  const port = process.env.REACT_APP_PRO_PORT;
  const [key] = useState(CryptoJS.enc.Utf8.parse(secretKey));
  const [iv] = useState(CryptoJS.lib.WordArray.create());
  const [encryptData, setEncryptData] = useState("");
  const [loading, setLoading] = useState(false);
  const [eye, seteye] = useState(true);
  const [userData, setUserData] = useState({
    customerId: "",
    userName: "",
    password: "",
  });

  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const onEyeClick = () => {
    seteye(!eye);
  };

  //----input handler--------------
  const inputHanlder = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  // const onSubmit = (data) => {
  //     navigate('/delivery/dashboard')
  //     console.log('ddddd',data)
  // };

  useEffect(() => {
    if (!localStorage.getItem("reloaded")) {
      localStorage.setItem("reloaded", true);
      window.location.reload();
    }
  }, []);
  const currentYear = new Date().getFullYear();
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //-------------json data ------------------------
  const jsonData = {
    UType: parseInt(1),
    // CustomerID:userData.customerId,
    UName: userData.userName,
    PWD: userData.password,
  };

  //---encrypition json data for sending in api body-----
  const encryptAndSetCiphertext = async () => {
    const encrypted = encryptCBC(JSON.stringify(jsonData), key, iv);
    await setEncryptData(encrypted);
  };

  useEffect(() => {
    encryptAndSetCiphertext();
  }, [jsonData]);

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(encryptData, "encryptData");
    console.log(JSON.stringify(jsonData), "json data ");
    //--setting customer id in context api--------------
    // const cId = userData.customerId;
    // actions.setCustomerId(cId);
    try {
      setLoading(true);
      var bodyEnc = { RequestBodyEncrypted: encryptData };
      const response = await fetch(
        url + ":" + port + "/api/UserAuthentication",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bodyEnc),
        }
      );

      const result = await response.json();
      console.log(result, "result of login data user");
      setLoading(false);
      if (result.msg == "Valid User" && result.status == 1) {
        const userData = JSON.stringify(result.responseBodyEncrypted);
        sessionStorage.setItem("encryptedData", userData);

        navigate("/delivery/dashboard");
        setLoading(false);
      } else if (result.status != 1) {
        alert("Invalid userId or password");
        setLoading(false);
      } else {
        alert("Invalid userId or password");
        setLoading(false);
      }
    } catch (e) {
      alert("Error" + e);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="main-wrapper">
        <Helmet>
          <title>Fleet Management System/Login</title>
          <meta name="description" content="SignIn page" />
        </Helmet>
        <div className="account-content">
          {loading ? (
            <ReactLoader loaderClass="position-absolute" loading={loading} />
          ) : null}
          <div className="login-wrapper">
            <div className="login-content">
              <div className="login-userset">
                <form onSubmit={onSubmit}>
                  <div className="login-logo">
                    <img src={Slogo} alt="img" />
                  </div>
                  <div className="login-userheading">
                    <h3>Sign In</h3>
                    <h4>Please login to your account</h4>
                  </div>
                  {/* <div className="form-login">
                      <label>Email</label>
                      <div className="form-addons">
                        <input
                          type="text"
                          {...register("email")}
                          className={` ${errors.email ? "is-invalid" : ""}`}
                          placeholder="Enter your email address"
                          defaultValue="admin@dreamguystech.com"
                        />
                        <img src={MailIcon} alt="img" />
                        <div className="invalid-feedback">
                          {errors.email?.message}
                        </div>
                      </div>
                    </div> */}
                  <div className="form-login">
                    <label>UserID</label>
                    <div className="form-addons">
                      <input
                        type="text"
                        name="userName"
                        placeholder="Email address or phone number"
                        autoComplete="off"
                        value={userData.userName}
                        onChange={inputHanlder}
                        required
                      />
                      <img src={MailIcon} alt="img" />
                    </div>
                  </div>
                  {/* <div className="form-login">
                      <label>Password</label>
                      <div className="pass-group">
                        <input
                          type={eye ? "password" : "text"}
                          className={` ${errors.password ? "is-invalid" : ""}`}
                          placeholder="Enter your password"
                          {...register("password")}
                          value={userData.password}
                          onChange={inputHanlder}
                        />
                        <span
                          onClick={onEyeClick}
                          className={`fas toggle-password ${
                            eye ? "fa-eye-slash" : "fa-eye"
                          } `}
                        />
                        <div className="invalid-feedback">
                          {errors.password?.message}
                        </div>
                      </div>
                    </div> */}
                  <div className="form-login">
                    <label>Password</label>
                    <div className="pass-group">
                      <input
                        type={eye ? "password" : "text"}
                        name="password"
                        placeholder="Enter your password"
                        autoComplete="off"
                        value={userData.password}
                        onChange={inputHanlder}
                        required
                      />
                      <span
                        onClick={onEyeClick}
                        className={`fas toggle-password ${
                          eye ? "fa-eye-slash" : "fa-eye"
                        }`}
                      />
                    </div>
                  </div>
                  <div className="form-login">
                    <div className="alreadyuser">
                      <h4>
                        <Link to="/forgetPassword" className="hover-a">
                          Forgot Password?
                        </Link>
                      </h4>
                    </div>
                  </div>
                  <div className="form-login">
                    <button className="btn btn-login">Sign In</button>
                  </div>
                </form>
                {/* <div className="signinform text-center">
                                    <h4>
                                        Don’t have an account?{" "}
                                        <Link to="/signUp" className="hover-a">
                                            Sign Up
                                        </Link>
                                    </h4>
                                </div> */}
                {/* <div className="form-setlogin">
                                    <h4>Or sign up with</h4>
                                </div> */}
                {/* <div className="form-sociallink">
                                    <ul>
                                        <li>
                                            <Link to="/signin">
                                                <img
                                                    src={GoogleIcon}
                                                    className="me-2"
                                                    alt="google"
                                                />
                                                Sign Up using Google
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/signin">
                                                <img
                                                    src={FacebookIcon}
                                                    className="me-2"
                                                    alt="google"
                                                />
                                                Sign Up using Facebook
                                            </Link>
                                        </li>
                                    </ul>
                                </div> */}
                <div
                  className="col-12 login-footer"
                  style={{
                    backgroundColor: "#f0f0f0",
                    padding: "10px",
                    textAlign: "center",
                    bottom: "0",
                    left: "0",
                    position: "fixed",
                    width: windowWidth > 768 ? "40%" : "100%",
                  }}
                >
                  <div>
                    {" "}
                    <p>
                      Shanti Sales &copy; {currentYear}{" "}
                      <span style={{ fontWeight: "700" }}>Developed by : </span>
                      <span style={{ color: "blue" }}>Excellent</span>{" "}
                      <span style={{ color: "red" }}>Softwares</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="login-img">
              <img src={LoginImage} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInPage;
