/* eslint-disable react/prop-types */
import React,{useEffect, useState} from 'react'
import TransportPage from './TransportPage'
import useFetch from '../../Hooks/useFetch';
import ReactToast, { showToastError, showToastMessage } from '../../CustomComps/ReactToast';
import { useLocation, useNavigate} from 'react-router-dom';

const TransportComp = () => {
 let api = useFetch()
 const location = useLocation()
 const navigate = useNavigate()
 if(location != undefined && location != null){
   var receivedCode = location.state
console.log('receivedCode', receivedCode)
 }
  const [passwordShown, setPasswordShown] = useState(false);
  const [imagePath, setImagePath] = useState('')

  const [inputValue, setInputValue] = useState({
    name:'',
    Address:'',
    Email:'',
    Mobile:''
  });
  const [loading, setLoading] = useState(false)

  const handleInputField = (e) => {
    const { name, value } = e.target;
    setInputValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const { Name, Address, Email, Mobile } = inputValue;

  const saveHandler = async (e) => {
    e.preventDefault();
    // if (state && state.code) {
    //   var code = state.code;}
    const urlSaveDep = "/api/SaveTranport?";
    // console.log('codeUsers', code)
    var body = {
      MasterType:1,
      Code: receivedCode||0,
      Name,
      Email,
      Mobile,
      Address ,
      ImgPath:"",
      ImgExt:''
    };
    // console.log("url", urlSaveDep);
    console.log("bodyjson", JSON.stringify(body));
    try {
      setLoading(true)
      let { res, got } = await api(urlSaveDep, "POST", body);
      if (res.status == 200) {
        console.log("maindata", body);
        showToastMessage(got.msg);
        setLoading(false)
        setInputValue({
          Name:'',
          Address:'',
          Email:'',
          Mobile:''
        })
        navigate("/delivery/drivers/driver_management_list/2")
        // if(code !== 0 && code != undefined){
        //   history.push('/list/2')
        // }
      } else {
        setLoading(false)
        showToastError(got.msg);
      }
    } catch (error) {
      setLoading(false)
      showToastError(error);
    }
  }

  // =========================Modify-data=====================================
  const getTransportModify = async () => {
    let url = `/api/GetTransportList?Code=${receivedCode}&MasterType=1`;
    try {
      setLoading(true);
      let { res, got } = await api(url, "GET", "");
      if (res.status == 200) {
        console.log("modifyData", got.data);
        let list = got.data[0];
        setInputValue({
          Name:list.name,
          Address:list.address,
          Email:list.email,
          Mobile:list.mobile
        })
       
        // setMasterType(131003)
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

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const handleImageConverted = (base64Data) => {
    // Do something with the base64Data, like send it to a server or perform other operations
    console.log('Base64 image:', base64Data);
    setImagePath(base64Data)
  };

  useEffect(()=>{
    if(location != null && location != undefined && receivedCode != null){
      getTransportModify()
    }
  },[receivedCode])
  
  return (
   <>
   <ReactToast/>
   <TransportPage
   passwordShown={passwordShown}
   togglePassword={togglePassword}
   handleImageConverted={handleImageConverted}
   handleInputField={handleInputField}
   inputValue={inputValue}
   saveHandler={saveHandler}
   loading={loading}
   />
   </>
  )
}

export default TransportComp