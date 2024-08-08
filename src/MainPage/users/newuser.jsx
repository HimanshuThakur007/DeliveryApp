/* eslint-disable no-dupe-keys */
/* eslint-disable react/prop-types */
import React, { useState,useEffect } from "react";
import useFetch from "../../Hooks/useFetch";
import ReactToast, { showToastError, showToastMessage } from "../../CustomComps/ReactToast";
import { useLocation, useNavigate } from "react-router-dom";
import NewUserPage from "./NewUserPage";

const Newuser = () => {
  let api = useFetch();
  const location = useLocation();
  const navigate = useNavigate();
  if (location != undefined && location != null) {
    var receivedCode = location.state;
    // console.log("receivedCode", receivedCode);
  }
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordShown1, setPasswordShown1] = useState(false);

  const [imagePath, setImagePath] = useState("");
  const [inputValue, setInputValue] = useState({
    UserName:'',Email:'',Password:'',Mobile:''
  });
  const [selectedRole, setSelectedRole] = useState(null)
  const [roleList, setRoleList] = useState([
    {value:1,label:"Administrator"},
    {value:2,label:"Manager"},
    {value:3,label:"Executive"}
  ])
    // const [transportlist, setTransportlist] = useState([])
    const [loading, setLoading] = useState(false)

  // ==========================select-field-handler=====================
  const selectHandler = (selected) => {
    setSelectedRole(selected);
  };

  const handleInputField = (e) => {
    const { name, value } = e.target;
    if (name === "Mobile") {
      const numericValue = value.replace(/\D/g, ''); // Remove non-numeric characters
      setInputValue(prevState => ({
        ...prevState,
        [name]: numericValue.slice(0, 10) // Limit to 10 digits
      }));
    } else {
      setInputValue(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };
  const {UserName,Email,Password,Mobile,} = inputValue

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const togglePassword1 = () => {
    setPasswordShown1(!passwordShown1);
  };

  const handleImageConverted = (base64Data) => {
    console.log("Base64 image:", base64Data);
    setImagePath(base64Data)
  };

  // ==================================transport-list=================================
  // const getTransportList = async () => {
  //   let corrData = [];
  //   let url = `/api/GetTransportList?Code=0&MasterType=1`;
  //   try {
  //     setLoading(true);
  //     let { res, got } = await api(url, "GET", "");
  //     if (res.status == 200) {
  //       console.log("transportlist", got.data);
  //       let list = got.data;
  //       list.map((item) => {
  //         corrData.push({ label: item.name, value: item.code });
  //       });
  //       setTransportlist(corrData);
  //       setLoading(false);
  //     } else {
  //       setLoading(false);
  //       alert("Something Went Wrong in List loading");
  //     }
  //   } catch (err) {
  //     setLoading(false);
  //     alert(err);
  //   }
  // };
  // const isPasswordValid = (password) => {
  //   const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/;
  //   return regex.test(password);
  // };
  const isPasswordValid = (password) => {
    // Minimum 4 characters, no maximum limit
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{4,}$/;
    return passwordRegex.test(password);
  };
  
  // ========================================save-data===================================
  const saveHandler = async (e) => {
    e.preventDefault();
    const urlSaveDriver = "/api/SaveUserMaster?";
    // console.log('codeUsers', code)
    var body = {
      Code: receivedCode || 0,
      UserName,
      Mobile,
      Password,
      Email,
      Role: selectedRole != null ? parseInt(selectedRole.value):0,
      RoleName: selectedRole != null ? selectedRole.label:'',
      Deactivate:0,
      ImgPath:imagePath,
      ImgExt:'',
    };

     // Email validation
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     if (!emailRegex.test(Email)) {
         showToastError('Please enter a valid email address.');
         return;
     }

     // Mobile validation
     const mobileRegex = /^\d{10}$/; // Assuming mobile number should be 10 digits
     if (!mobileRegex.test(body.Mobile)) {
       showToastError('Please enter a valid 10-digit mobile number.');
       return;
     }

    if (!isPasswordValid(Password)) {
      showToastError('Password must be at least 4 characters long and include at least one letter and one digit.');
      return;
    }
    // console.log("url", urlSaveDep);
    console.log("bodyjson", JSON.stringify(body));
    try {
      setLoading(true);
      let { res, got } = await api(urlSaveDriver, "POST", body);
      if (res.status == 200) {
        console.log("maindata", body);
        showToastMessage(got.msg);
        setLoading(false);
        setInputValue({
          UserName:'',Email:'',Password:'',Mobile:''
        });
        setSelectedRole(null);
        navigate('/delivery/users/userlists')
        // if(code !== 0 && code != undefined){
        //   history.push('/list/2')
        // }
      } else {
        setLoading(false);
        showToastError(got.msg);
      }
    } catch (error) {
      setLoading(false);
      showToastError(error);
    }
  };

  // =========================Modify-data=====================================
  const getDriverModify = async () => {
    let url = `/api/GetUserList?Code=${receivedCode}`;
    try {
      setLoading(true);
      let { res, got } = await api(url, "GET", "");
      if (res.status == 200) {
        console.log("modifyData", got.data);
        let list = got.data[0];
       
        setInputValue({
          UserName:list.userName,
          Email:list.email,
          Password:list.password,
          Mobile:list.mobile,
        })
        setSelectedRole({value:list.role, label:list.roleName})

        // setMasterType(131003)
        setLoading(false);
      } else {
        setLoading(false);
        showToastError("Something Went Wrong in List loading");
      }
    } catch (err) {
      setLoading(false);
      showToastError(err);
    }
  };

  useEffect(() => {
    // getTransportList();
    if (location != null && location != undefined && receivedCode != null) {
      getDriverModify();
    }
  }, [receivedCode]);

  return (
    <React.Fragment>
      <ReactToast/>
      <NewUserPage
       passwordShown={passwordShown}
       passwordShown1={passwordShown1}
       togglePassword={togglePassword}
       togglePassword1={togglePassword1}
       inputValue={inputValue}
       handleImageConverted={handleImageConverted}
       selectHandler={selectHandler}
       saveHandler={saveHandler}
       handleInputField={handleInputField}
       loading={loading}
       roleList={roleList}
       selectedRole={selectedRole}
      />
    </React.Fragment>
  );
};

export default Newuser;
