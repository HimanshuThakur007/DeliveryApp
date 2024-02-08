import React,{useState} from 'react'
import { DeliveryColumn, DeliveryDayColumn, OrderSummary, PendingDelivery, PendingDispColumn, TripColumn } from './ReportColumn'
import useFetch from '../../Hooks/useFetch'
import { convertDate, convertDate2 } from '../ReuseFunctions/ReuseFunction'
import { useParams } from 'react-router-dom'
import ReportPage from './ReportPage'

const ReportComp = () => {
    let api = useFetch()
    const param = useParams()
    let userId = param.userId
    console.log('paraam',userId)
    const [rowData, setRowData] = useState([]);
    const [tableData, setTableData] = useState([]);
    const [driverList, setDriverlist] = useState([]);
    const [loading, setLoading] = useState(false)
    const [values, setValues] = useState({});
  const [initialValue, setInitialValue] = useState(0);
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [dates, setDates] = useState({
    fDate: new Date(),
    tDate: new Date()
  });

  // ==================================DateHandler==================================
  const handleDateChange = (dateFieldName, dateValue) => {
    setDates({
      ...dates,
      [dateFieldName]: dateValue,
    });
  };

  // ============================driver-Handler================================
  const SelectDriverHandler=(select)=>{
    setSelectedDriver(select)
  }
    
  
   const handleEditClick = (record) => {
    // const code = record.code;
    console.log("record", record)
    
  };
   const handleDeleteClick = (record) => {
    // const code = record.code;
    console.log("record", record)
    
  };
  const handleValueChange = (id, newValue) => {
    setValues((prevValues) => ({
      ...prevValues,
      [id]: newValue,
    }));
  };

  // =========================DeliveryDay-table===============================
  const getDeliveryDayList = async () => {
    if (selectedDriver !== null){
      var driver = selectedDriver.value 
    }
    if(values.assign !== 0){

      var fdate = convertDate2(dates.fDate)||''
      var tdate = convertDate2(dates.tDate)||''
    }
    var status = values.assign||0
    let url = `/api/GetDeliveryDay?Status=${status||0}&Driver=${driver||0}&SDate=${fdate}&TDate=${tdate}`;
    console.log('url', url)
    try {
      setLoading(true);
      let { res, got } = await api(url, "GET", "");
      if (res.status == 200) {
        console.log("setTableData", got.data);
        let list = got.data;
        setTableData(list);
        setRowData(columnsdel);
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
  // =========================Delivery-table===============================
  const getDeliveryList = async () => {
    if (selectedDriver !== null){
      var driver = selectedDriver.value 
    }
    if(values.assign !== 0){

      var fdate = convertDate2(dates.fDate)||''
      var tdate = convertDate2(dates.tDate)||''
    }
    var status = values.assign||0
    let url = `/api/GetDelivery?Status=${status||0}&Driver=${driver||0}&SDate=${fdate}&TDate=${tdate}`;
    console.log('url', url)
    try {
      setLoading(true);
      let { res, got } = await api(url, "GET", "");
      if (res.status == 200) {
        console.log("GetDelivery", got.data);
        let list = got.data;
        setTableData(list);
        setRowData(deliveryColumn);
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
  // =========================Pending Dispatch===============================
  const getPendingDispList = async () => {
    if (selectedDriver !== null){
      var driver = selectedDriver.value 
    }
    if(values.assign !== 0){

      var fdate = convertDate2(dates.fDate)||''
      var tdate = convertDate2(dates.tDate)||''
    }
    var status = values.assign||0
    let url = `/Api/GetPendingDisp?Status=${status||0}&Driver=${driver||0}&SDate=${fdate}&TDate=${tdate}`;
    console.log('url', url)
    try {
      setLoading(true);
      let { res, got } = await api(url, "GET", "");
      if (res.status == 200) {
        console.log("GetPendingDisp", got.data);
        let list = got.data;
        setTableData(list);
        setRowData(pendingDispColumn);
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
  // =========================Pending Delivery===============================
  const getPendingDeliveryList = async () => {
    if (selectedDriver !== null){
      var driver = selectedDriver.value 
    }
    if(values.assign !== 0){

      var fdate = convertDate2(dates.fDate)||''
      var tdate = convertDate2(dates.tDate)||''
    }
    var status = values.assign||0
    let url = `/Api/GetPendingdil?Status=${status||0}&Driver=${driver||0}&SDate=${fdate}&TDate=${tdate}`;
    console.log('url', url)
    try {
      setLoading(true);
      let { res, got } = await api(url, "GET", "");
      if (res.status == 200) {
        console.log("GetPendingdil", got.data);
        let list = got.data;
        setTableData(list);
        setRowData(pendingDeliveryCol);
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
  // =========================Trip-List===============================
  const getTripList = async () => {
    if (selectedDriver !== null){
      var driver = selectedDriver.value 
    }
    if(values.assign !== 0){

      var fdate = convertDate2(dates.fDate)||''
      var tdate = convertDate2(dates.tDate)||''
    }
    var status = values.assign||0
    let url = `/Api/GetTripList?Status=${status||0}&Driver=${driver||0}&SDate=${fdate}&TDate=${tdate}`;
    console.log('url', url)
    try {
      setLoading(true);
      let { res, got } = await api(url, "GET", "");
      if (res.status == 200) {
        console.log("getDeliveryList", got.data);
        let list = got.data;
        setTableData(list);
        setRowData(tripCol);
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
  // =========================OrderSummary-List===============================
  const getOrderSummary = async () => {
    if (selectedDriver !== null){
      var driver = selectedDriver.value 
    }
    if(values.assign !== 0){

      var fdate = convertDate2(dates.fDate)||''
      var tdate = convertDate2(dates.tDate)||''
    }
    var status = values.assign||0
    let url = `/Api/GetSummaryRpt?Status=${status||0}&Driver=${driver||0}&SDate=${fdate}&TDate=${tdate}`;
    console.log('url', url)
    try {
      setLoading(true);
      let { res, got } = await api(url, "GET", "");
      if (res.status == 200) {
        console.log("GetSummaryRpt", got.data);
        let list = got.data;
        setTableData(list);
        setRowData(orderSummaryCol);
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

   //   =============================Driver-List MasterType=3 ============================
   const getDriverList = async () => {
    // let corrData = [];
    let url = `/api/GetMaster?MasterType=3&TranType=1`;
    try {
      setLoading(true);
      let { res, got } = await api(url, "GET", "");
      if (res.status == 200) {
        console.log("driver", got.data);
        let list = got.data;
        // list.map((item) => {
        //   corrData.push({ label: item.name, value: item.code });
        // });
        setDriverlist(list);
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

  const DynamicFunctionCaller = ()=>{
    setRowData([])
    setTableData([])
    switch(userId){
      case "1":
      getDeliveryDayList()
      break;
      case "2":
        getDeliveryList()
        break
      case "3":
        getPendingDispList()
        break
      case "4":
        getPendingDeliveryList()
        break
      case "5":
        getTripList()
        break
      case "6":
        getOrderSummary()
        break
        default:
    }
  }
  React.useEffect(()=>{
    DynamicFunctionCaller()
    getDriverList()
  },[values,userId])

  const columnsdel = DeliveryDayColumn(handleEditClick, handleDeleteClick)
  const deliveryColumn = DeliveryColumn
  const pendingDispColumn = PendingDispColumn
  const pendingDeliveryCol = PendingDelivery
  const tripCol = TripColumn
  const orderSummaryCol = OrderSummary
  return (
    <React.Fragment>
        <ReportPage
        columns={rowData}
        data={tableData}
        loading={loading}
        handleValueChange={handleValueChange}
        values={values}
        initialValue={initialValue}
        handleDateChange={handleDateChange}
        driverList={driverList}
        dates={dates}
        selectedDriver={selectedDriver}
        SelectDriverHandler={SelectDriverHandler}
        DynamicFunctionCaller={DynamicFunctionCaller}
        userId={userId}
        />
    </React.Fragment>
  )
}

export default ReportComp