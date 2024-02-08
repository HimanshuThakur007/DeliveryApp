/* eslint-disable react/prop-types */
import React,{useEffect, useState} from 'react'
import VehiclePage from './VehiclePage'
import useFetch from '../../Hooks/useFetch'
import { useLocation, useNavigate } from 'react-router-dom'
import ReactToast, { showToastError, showToastMessage } from '../../CustomComps/ReactToast'

const VehicleComp = () => {
  let api = useFetch()
 const location = useLocation()
 const navigate = useNavigate()
 if(location != undefined && location != null){
   var receivedCode = location.state
 }
    const [values, setValues] = useState({});
    const [initialValue, setInitialValue] = useState(0);
    const [imagePath, setImagePath] = useState('')
    const [selectedTransport, setSelectedTransport] = useState(null)
    const [transportlist, setTransportlist] = useState([])
    const [loading, setLoading] = useState(false)
    const [inputValue, setInputValue] = useState({
      Name:'',
      VechicleType:'',
      VechicleModel:'',
    });
// ==========================select-field-handler=====================
const selectHandler =(selected)=>{
  if (values.transport === 1 && selected != null) {
    setSelectedTransport(selected);
    return
  }
}
  
    const handleInputField = (e) => {
      const { name, value } = e.target;
      setInputValue((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };
    const { Name, VechicleType, VechicleModel } = inputValue;
    // =============for-transporter-toggle================================
    const handleValueChange = (id, newValue) => {
        setValues((prevValues) => ({
          ...prevValues,
          [id]: newValue,
        }));
      };

      const handleImageConverted = (base64Data) => {
        console.log('Base64 image:', base64Data);
        setImagePath(base64Data)
      };
      // ==================================transport-list=================================
      const getTransportList = async () => {
        
        let url = `/api/GetMaster?MasterType=1`;
        try {
          setLoading(true);
          let { res, got } = await api(url, "GET", "");
          if (res.status == 200) {
            console.log("transportlist", got.data);
            let list = got.data;
       
           setTransportlist(list)
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

// ========================================save-data===================================
      const saveHandler = async (e) => {
        e.preventDefault();
        const urlSavevehicle = "/api/SaveVechicle?";
        // console.log('codeUsers', code)
        var body = {
          MasterType:2,
          Code: receivedCode||0,
          Name,
          VechicleType,
          VechicleModel,
          Transporter:parseInt(values.transport)||0,
          TransportCode: values.transport === 1 && selectedTransport != null
          ? parseInt(selectedTransport.value)
          : 0,
          TransportName :values.transport === 1 && selectedTransport != null ? selectedTransport.label:'',
          ImgPath:"",
          ImgExt:''
        };
        // console.log("url", urlSaveDep);
        console.log("bodyjson", JSON.stringify(body));
        try {
          setLoading(true)
          let { res, got } = await api(urlSavevehicle, "POST", body);
          if (res.status == 200) {
            console.log("maindata", body);
            showToastMessage(got.msg);
            setLoading(false)
            setInputValue({
              Name:'',
              VechicleType:'',
              VechicleModel:'',
            })
            setSelectedTransport(null)
            setInitialValue(0)
            navigate("/delivery/drivers/driver_management_list/3")
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
      const getVechicleModify = async () => {
        let url = `/api/GetVechicleList?Code=${receivedCode}&MasterType=2`;
        try {
          setLoading(true);
          let { res, got } = await api(url, "GET", "");
          if (res.status == 200) {
            console.log("modifyData", got.data);
            let list = got.data[0];
            setInputValue({
              Name:list.name,
              VechicleType:list.vechicleType,
              VechicleModel:list.vechicleModel,
             
            })
            setInitialValue(list.transporter)
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

      useEffect(()=>{
        getTransportList()
        if(location != null && location != undefined && receivedCode != null){
          getVechicleModify()
        }
      },[receivedCode])

      console.log('valuesToggel',values.transport)

  return (
    <React.Fragment>
      <ReactToast/>
        <VehiclePage
        values={values}
        initialValue={initialValue}
        setInitialValue={setInitialValue}
        handleValueChange={handleValueChange}
        handleImageConverted={handleImageConverted}
        inputValue={inputValue}
        handleInputField={handleInputField}
        loading={loading}
        transportlist={transportlist}
        selectedTransport={selectedTransport}
        selectHandler={selectHandler}
        saveHandler={saveHandler}
        />
    </React.Fragment>
  )
}

export default VehicleComp