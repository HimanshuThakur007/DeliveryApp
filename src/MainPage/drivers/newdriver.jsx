/* eslint-disable no-dupe-keys */
/* eslint-disable react/prop-types */
import React, { useState,useEffect } from "react";
import NewDriverPage from "./NewDriverPage";
import useFetch from "../../Hooks/useFetch";
import ReactToast, { showToastError, showToastMessage } from "../../CustomComps/ReactToast";
import { useLocation, useNavigate } from "react-router-dom";

const NewDriver = () => {
  let api = useFetch();
  const location = useLocation();
  if (location != undefined && location != null) {
    var receivedCode = location.state;
    // console.log("receivedCode", receivedCode);
  }
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordShown1, setPasswordShown1] = useState(false);
  const [values, setValues] = useState({});
  const [initialValue, setInitialValue] = useState(0);
  const [imagePath, setImagePath] = useState("");
  const [inputValue, setInputValue] = useState({
    Name:'',Email:'',cPassword:'',Password:'',Mobile:'',VechicleNum:'',VechicleModel:'',VechicleType:'',Address:''
  });
  const [selectedTransport, setSelectedTransport] = useState(null)
    const [transportlist, setTransportlist] = useState([])
    const [loading, setLoading] = useState(false)

     const navigate = useNavigate()
  // ==========================select-field-handler=====================
  const selectHandler = (selected) => {
    if(selected !== null){

      setSelectedTransport(selected);
    }
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
  const {Name,Email,cPassword,Password,Mobile,VechicleNum,VechicleModel,VechicleType,Address} = inputValue

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const togglePassword1 = () => {
    setPasswordShown1(!passwordShown1);
  };

  const handleValueChange = (id, newValue) => {
    setValues((prevValues) => ({
      ...prevValues,
      [id]: newValue,
    }));
  };

  const handleImageConverted = (base64Data) => {
    // let base64String = base64Data;
    // base64String = base64String.substring(base64String.indexOf(',') + 1);
    // console.log("Base64 image:", base64String);
    setImagePath(base64Data)
  };

  // ==================================transport-list=================================
  const getTransportList = async () => {
    // let corrData = [];
    let url = `/api/GetMaster?MasterType=1`;
    try {
      setLoading(true);
      let { res, got } = await api(url, "GET", "");
      if (res.status == 200) {
        console.log("transportlist", got.data);
        let list = got.data;
        // list.map((item) => {
        //   corrData.push({ label: item.name, value: item.code });
        // });
        setTransportlist(list);
        setLoading(false);
      } else {
        setLoading(false);
        alert("Something Went Wrong in List loading");
      }
    } catch (err) {
      setLoading(false);
      alert(err);
    }
  };
  // ===========================password-validation=====================================
  const isPasswordValid = (password) => {
    // Minimum 4 characters, no maximum limit
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{4,}$/;
    return passwordRegex.test(password);
  };
  // ==========================vehicle number validation===================================
  const isVehicleNumberValid = (vehicleNumber) => {
    const vehicleNumberRegex = /^[A-Z]{2}\d{2}[A-Z]{2}\d{4}$/;
    return vehicleNumberRegex.test(vehicleNumber);
  };

  // ========================================save-data===================================
  const saveHandler = async (e) => {
    e.preventDefault();
    let trancode;
    let tranlabel;
    if(selectedTransport !== null){
      trancode=parseInt(selectedTransport.value)
      tranlabel=selectedTransport.label
    }else{
      trancode=0
      tranlabel=""
    }
    const urlSaveDriver = "/api/SaveDriver?";
    // console.log('codeUsers', code)
    var body = {
      MasterType: 3,
      Code: receivedCode || 0,
      Name,
      Mobile,
      Password,
      Email,
      Address,
      VechicleNum,
      VechicleType,
      VechicleModel,
      Transporter: parseInt(values.transport)||0,
      TransportCode: trancode,
      TransportName: tranlabel,
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
    // Name validation
    const nameRegex = /^[a-zA-Z0-9 ]{2,}$/; // Minimum 2 characters, only letters, numbers, and spaces allowed
    if (!nameRegex.test(body.Name)) {
      showToastError('Name should be at least 2 characters long and should not contain special characters.');
      return;
    }
if (!isVehicleNumberValid(VechicleNum)) {
  showToastError('Please enter a valid vehicle number.');
  return;
}

    if (!isPasswordValid(Password)) {
      showToastError('Password must be at least 4 characters long and include at least one letter and one digit.');
      return;
    }
    if (Password !== inputValue.cPassword) {
      showToastError('Password and Confirm Password do not match.');
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
          Name:'',Email:'',cPassword:'',Password:'',Mobile:'',VechicleNum:'',VechicleModel:'',VechicleType:'',Address:''
        });
        setSelectedTransport(null);
        setInitialValue(0);
        navigate("/delivery/drivers/driver_management_list/1")
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
    let url = `/api/GetDriverList?Code=${receivedCode}&MasterType=3`;
    try {
      setLoading(true);
      let { res, got } = await api(url, "GET", "");
      if (res.status == 200) {
        console.log("modifyData", got.data);
        let list = got.data[0];
       
        setInputValue({
          Name:list.name,
          Email:list.email,
          cPassword:list.password,
          Password:list.password,
          Mobile:list.mobile,
          VechicleNum:list.vechicleNum,
          VechicleModel:list.vechicleModel,
          VechicleType:list.vechicleType,
          Address:list.address
        })
        setInitialValue({transport:list.transporter})
        setSelectedTransport({value:list.transportCode, label:list.transportName})
        setValues({transport:list.transporter})
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
    getTransportList();
    if (location != null && location != undefined && receivedCode != null) {
      getDriverModify();
    }
  }, [receivedCode]);

  return (
    <React.Fragment>
      <ReactToast/>
      <NewDriverPage
        passwordShown={passwordShown}
        passwordShown1={passwordShown1}
        togglePassword={togglePassword}
        togglePassword1={togglePassword1}
        values={values}
        initialValue={initialValue}
        inputValue={inputValue}
        handleValueChange={handleValueChange}
        setInitialValue={setInitialValue}
        handleImageConverted={handleImageConverted}
        selectHandler={selectHandler}
        saveHandler={saveHandler}
        handleInputField={handleInputField}
        loading={loading}
        transportlist={transportlist}
        selectedTransport={selectedTransport}
      />
    </React.Fragment>
  );
};

export default NewDriver;
