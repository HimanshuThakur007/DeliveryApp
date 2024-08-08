import React,{useState} from 'react'
import { DeliveryColumn, DeliveryDayColumn, ImgSummaryColumn, OrderSummary, PendingDelivery, PendingDispColumn, TripColumn, TripModalColumn, vehicleStatusColumn } from './ReportColumn'
import useFetch from '../../Hooks/useFetch'
import { convertDate, convertDate2, filterData } from '../ReuseFunctions/ReuseFunction'
import { useParams } from 'react-router-dom'
import ReportPage from './ReportPage';
import { Excel } from "antd-table-saveas-excel";
import { Table, Modal, Button } from 'antd';
import { Margin, usePDF } from "react-to-pdf";
import PDFModal from '../Transaction/PDFModal'

const ReportComp = () => {
    let api = useFetch()
    const param = useParams()
    let userId = param.userId
    console.log('paraam',userId)
    const [rowData, setRowData] = useState([]);
    const [tableData, setTableData] = useState([]);
    const [driverList, setDriverlist] = useState([]);
    const [tripModalData, setTripModalData] = useState([]);
    const [loading, setLoading] = useState(false)
    const [values, setValues] = useState({});
  const [initialValue, setInitialValue] = useState(0);
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [inputfilter, setInputfilter] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [dates, setDates] = useState({
    fDate: new Date(),
    tDate: new Date()
  });
    const [PdfTable,setPdfTable] = useState([])
    const [pdfDetails,setPdfDetail] = useState([])
    const { toPDF, targetRef } = usePDF({
      filename: "TripReport.pdf",
      page: { margin: Margin.MEDIUM }
    });
  //====================toggel-filter=================
  const togglefilter = (value) => {
    setInputfilter(value);
  };
    // =======================for-input-search==============================
    const handleSearch = (value) => {
      setSearchText(value);
      DynamicFunctionCaller(value)
    };
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
    console.log('driver-select',select)
  }
    
  
   const handleEditClick = (record) => {
    // const code = record.code;
    console.log("record", record)
    
  };
   const handleModalShowClick = async (record) => {
    let code = record.code;
    console.log("Modal record", record)
  
    // let url = `/api/GetTripWiseRpt?Code=${code}`;
    // console.log('url', url)
    // try {
    //   setLoading(true);
    //   let { res, got } = await api(url, "GET", "");
    //   if (res.status == 200) {
    //     console.log("tripReport", got.data);
    //     let list = got.data;
    //     setTripModalData(list);
    //     // setRowData(tripModalCol);
    //     setLoading(false);
    //   } else {
    //     setLoading(false);
    //     alert("Something Went Wrong in List loading");
    //   }
    // } catch (err) {
    //   setLoading(false);
    //   alert(err);
    // }
    getPDFReportList(code)
    setShowModal(true)
  };

  const getPDFReportList = async (code) => {
    // let corrData = [];
    let url = `/api/GetPDFDetails?Code=${code}`;
    try {
      setLoading(true);
      let { res, got } = await api(url, "GET", "");
      if (res.status == 200) {
        console.log("vehicle", got.data);
        let list = got.data[0];
        let TableData = list.bodyDet
        console.log('getPDFReportList', TableData)
        console.log('PDFReportList', list)
        setPdfDetail(list)
        setPdfTable(TableData)
        // list.map((item) => {
        //   corrData.push({ label: item.name, value: item.code });
        // });
        // setVehiclelist(list);
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
        let filteredData = filterData(list, searchText, [
          "driver",
          "mobile",
        ]);
        setTableData(filteredData);
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
  // const getDeliveryList = async () => {
  //   if (selectedDriver !== null){
  //     var driver = selectedDriver.value 
  //   }
  //   if(values.assign !== 0){

  //     var fdate = convertDate2(dates.fDate)||''
  //     var tdate = convertDate2(dates.tDate)||''
  //   }
  //   var status = values.assign||0
  //   let url = `/api/GetDelivery?Status=${status||0}&Driver=${driver||0}&SDate=${fdate}&TDate=${tdate}`;
  //   console.log('url', url)
  //   try {
  //     setLoading(true);
  //     let { res, got } = await api(url, "GET", "");
  //     if (res.status == 200) {
  //       console.log("GetDelivery", got.data);
  //       let list = got.data;
  //       let filteredData = filterData(list, searchText, [
  //         "driver",
  //         "mobile",
  //       ]);
  //       setTableData(filteredData);
  //       setRowData(deliveryColumn);
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
        let filteredData = filterData(list, searchText, [
          "accName",
          "vchNo",
        ]);
        setTableData(filteredData);
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
        let filteredData = filterData(list, searchText, [
          "accName",
          "vchNo",
        ]);
        setTableData(filteredData);
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
        let filteredData = filterData(list, searchText, [
          "assignNO",
          "vechicle",
          "vechicleModel"
        ]);
        setTableData(filteredData);
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
        let filteredData = filterData(list, searchText, [
          "driver",
          "mobile",
          "accName",
          "aMobile"
        ]);
        setTableData(filteredData);
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
  // =========================ImgSummary-List===============================
  const getImgSummary = async () => {
    if (selectedDriver !== null){
      var driver = selectedDriver.value 
    }
    if(values.assign !== 0){

      var fdate = convertDate2(dates.fDate)||''
      var tdate = convertDate2(dates.tDate)||''
    }
    var status = values.assign||0
    let url = `/Api/GetSummmaryDetails?Status=${status||0}&Driver=${driver||0}&SDate=${fdate}&TDate=${tdate}`;
    console.log('url', url)
    try {
      setLoading(true);
      let { res, got } = await api(url, "GET", "");
      if (res.status == 200) {
        console.log("getImgSummary", got.data);
        let list = got.data;
        let filteredData = filterData(list, searchText, [
          "mobile",
          "accName",
          "compName",
          "billNo"
        ]);
        setTableData(filteredData);
        setRowData(ImgSummaryCol);
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
  // =========================Vehicle Status===============================
  const getVehicleStatus = async () => {
    if (selectedDriver !== null){
      var driver = selectedDriver.value 
    }
    if(values.assign !== 0){

      var fdate = convertDate2(dates.fDate)||''
      var tdate = convertDate2(dates.tDate)||''
    }
    var status = values.assign||0
    let url = `/Api/GetAssignList`;
    // let url = `/Api/GetAssignList?Status=${status||0}&Driver=${driver||0}&SDate=${fdate}&EDate=${tdate}`;
    console.log('url', url)
    try {
      setLoading(true);
      let { res, got } = await api(url, "GET", "");
      if (res.status == 200) {
        console.log("getVehicleStatus", got.data);
        let list = got.data;
        let filteredData = filterData(list, searchText, [
          "driver",
          "vechicle",
          "assignNo",
          "date"
        ]);
        setTableData(filteredData);
        setRowData(VehicleColumn);
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
    let url = `/api/GetMaster?MasterType=3&TranType=3`;
    try {
      setLoading(true);
      let { res, got } = await api(url, "GET", "");
      if (res.status == 200) {
        console.log("driver", got.data);
        let list = got.data;
        let addobj = { label: "All", value: 0 };
        list[0] = addobj
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

  const DynamicFunctionCaller = (searchText)=>{
    setRowData([])
    setTableData([])
    switch(userId){
      case "1":
      getDeliveryDayList(searchText)
      break;
      // case "2":
      //   getDeliveryList()
      //   break
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
      case "7":
        getImgSummary()
        break
      case "8":
        getVehicleStatus()
        break
        default:
    }
  }
  React.useEffect(()=>{
    DynamicFunctionCaller()
    
  },[values,userId,searchText])

  React.useEffect(()=>{getDriverList()},[])

    // =================================export-to-excel==============================
    const handleExportClick = () => {
      var exceld;
      {
        userId == 1
          ? (exceld = "DriveryDay.xlsx")
          // : userId == 2
          // ? (exceld = "Delivery.xlsx")
          : userId == 3
          ? (exceld = "PendingDispatch.xlsx")
          : userId == 4 ?
          (exceld = "PendingDelivery.xlsx")
          : userId ==5 ?
          (exceld ="TripReport.xlsx"):
          userId == 6 ?
          (exceld ="OrderSummary.xlsx"):(exceld = "excel.xlsx")
      }
      if (tableData) {
        const excel = new Excel();
  
        const filteredColumns =
          rowData.length > 0
            ? rowData.filter((column) => column.title !== "Action")
            : [];
  
        if (filteredColumns.length > 0) {
          excel
            .addSheet("test")
            .addColumns(filteredColumns)
            .addDataSource(
              tableData.map(({ key, action, ...rest }) => rest),
              {
                str2Percent: true,
              }
            )
            .saveAs(exceld);
        } else {
          console.error("No valid columns found.");
        }
      } else {
        console.error("No data in listData or listData is undefined.");
      }
    };

  const columnsdel = DeliveryDayColumn(handleEditClick, handleDeleteClick)
  const deliveryColumn = DeliveryColumn
  const pendingDispColumn = PendingDispColumn
  const pendingDeliveryCol = PendingDelivery
  const tripCol = TripColumn(handleModalShowClick)
  const tripModalCol = TripModalColumn
  const orderSummaryCol = OrderSummary
  const [modalVisible, setModalVisible] = useState(false);
  const [modalImageUrl, setModalImageUrl] = useState('');
  const [modalTitle, setModalTitle] = useState('');

  const handleSocialMediaShare = (platform) => {
    // Logic to share the image on the selected social media platform
    let shareUrl = '';
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(modalImageUrl)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(modalImageUrl)}`;
        break;
        case 'whatsapp': {
          // Copy URL to clipboard
          const tempInput = document.createElement('input');
          tempInput.style = 'position: absolute; left: -1000px; top: -1000px';
          tempInput.value = modalImageUrl;
          document.body.appendChild(tempInput);
          tempInput.select();
          document.execCommand('copy');
          document.body.removeChild(tempInput);
          alert('The link has been copied to the clipboard. You can paste it into a WhatsApp conversation with your contact.');
          break;
      }
      case 'gmail':
        shareUrl = `mailto:?body=${encodeURIComponent(modalImageUrl)}`;
        break;
      case 'instagram':
        // You can't directly share to Instagram via a URL. You can open the Instagram app with the image in the browser.
        window.open(`https://www.instagram.com/`, '_blank');
        break;
      default:
        break;
    }
    if (shareUrl !== '') {
      window.open(shareUrl, '_blank');
    }
  };

  const handleImageClick = (imageUrl,name) => {
    setModalTitle(name)
    setModalImageUrl(imageUrl);
    setModalVisible(true);
    console.log
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };
  const ImgSummaryCol = ImgSummaryColumn(handleImageClick)
  const VehicleColumn= vehicleStatusColumn
  const Pdfcolumns = [
    {
      title: "Party Name",
      dataIndex: "accName",
      // sorter: (a, b) => a.accName.length - b.accName.length,
    },
    {
      title: "Invoice Number",
      dataIndex: "vchno",
      // sorter: (a, b) => a.vchno.length - b.vchno.length,
    },
    {
      title: "Date",
      dataIndex: "vchDate",
      // sorter: (a, b) => a.vchDate.length - b.vchDate.length,
    },

    {
      title: "Mobile",
      dataIndex: "mobile",
      // sorter: (a, b) => a.mobile.length - b.mobile.length,
    },
    {
      title: "Quantity",
      dataIndex: "qty",
      render: (text, record) => parseFloat(text),
      // sorter: (a, b) => a.qty.length - b.qty.length,
    },

    {
      title: "Amount",
      dataIndex: "amount",
      // sorter: (a, b) => a.amount.length - b.amount.length,
    },
  ]
console.log('showModal', showModal)
const totalQuantity = PdfTable.reduce((acc, curr) => acc + parseFloat(curr.qty), 0);
const footer = () => (
  <div style={{ textAlign: 'right' }}>
  <strong>Total Quantity: {totalQuantity}</strong>
</div>
);
const handleSave = () => {

    setShowModal(false);
};
const handleHide = () => {
  setShowModal(false);

};

// const downloadImage = (imageUrl) => {
//   const link = document.createElement('a');
//   link.href = imageUrl;
//   link.download = 'image.jpg'; // Name the file as it will be saved
//   link.target = '_blank'; // Ensures the image opens in a new tab, which can sometimes enforce the download behavior
//   document.body.appendChild(link);
//   link.click();
//   document.body.removeChild(link);
// };
const downloadImage = async () => {
  const imageUrl = 'http://103.194.9.31:207/File/VoucherStatusImg/Drop-15~2.jpg';
  console.log(imageUrl,'image-url')
  try {
    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const blob = await response.blob();
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'sample-image.jpg'; // Specify the file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error('Image download failed:', error);
  }
};
  return (
    <React.Fragment>
        <ReportPage
        setShowModal={setShowModal}
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
        tripModalData={tripModalData}
        tripModalCol={tripModalCol}
        inputfilter={inputfilter}
        togglefilter={togglefilter}
        handleSearch={handleSearch}
        handleExportClick={handleExportClick}
        />
        <Modal
        visible={modalVisible}
        onCancel={handleModalClose}
        footer={null}
        title={modalTitle}
        width={700}
        style={{ maxHeight: '50vh', zIndex:2000 }}
      >
        <div className='col-xl-12 d-flex align-items-center'>
          <div className='col-xl-6'>
        <img src={modalImageUrl} alt="Modal" style={{ width: '50vh'}} />
        </div>
        <div className='col-xl-6'>
        <div style={{ marginTop: '1em', textAlign: 'center' }}>
          <div className='col-xl-12 mb-3'>
        <Button style={{ width: '100%', marginLeft: '1em' }} onClick={() => handleSocialMediaShare('facebook')}>
          Share on Facebook
        </Button>
        </div>
        <div className='col-xl-12 mb-3'>
        <Button style={{ width: '100%', marginLeft: '1em' }} onClick={() => handleSocialMediaShare('twitter')}>
          Share on Twitter
        </Button>
        </div>
          <div className='col-xl-12 mb-3'>
        <Button style={{ width: '100%', marginLeft: '1em' }} onClick={() => handleSocialMediaShare('whatsapp')}>
          Share on WhatsApp
        </Button>
        </div>
        <div className='col-xl-12 mb-3'>
        <Button style={{ width: '100%', marginLeft: '1em' }} onClick={() => handleSocialMediaShare('gmail')}>
          Share on Gmail
        </Button>
        </div>
        <div className='col-xl-12 mb-3'>
        <Button style={{ width: '100%', marginLeft: '1em' }} onClick={() => handleSocialMediaShare('instagram')}>
          Share on Instagram
        </Button>
        </div>
        <div className='col-xl-12 mb-3'>
        <Button style={{ width: '100%', marginLeft: '1em' }} onClick={() => downloadImage(modalImageUrl)}>
            Download Image
          </Button>
        </div>
        {/* Add buttons for other social media platforms as needed */}
      </div>
      </div>
      </div>
      </Modal>

      <PDFModal
        modalTitle="SHANTI SALES"
        targetRef={targetRef}
        toPDF={toPDF}
        onSave={handleSave}
        onHide={handleHide}
        showModal={showModal}
        // selectedCompList={selectedCompList}
        modalContent={
          <>
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group row">
               
                  <label className="col-form-label col-lg-3">Assign No.: </label>
                  <div className="col-lg-9">
                    <input value={pdfDetails.assignNo} className="form-control" style={{border:"none",outline:'none',borderBottom:'1px dotted'}}/>
                  
                </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group row">
               
                  <label className="col-form-label col-lg-3">Driver : </label>
                  <div className="col-lg-9">
                    <input value={pdfDetails.driver} className="form-control" style={{border:"none",outline:'none',borderBottom:'1px dotted'}}/>
                  
                </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group row">
                  <label className="col-form-label col-lg-3">Date : </label>
                  <div className="col-lg-9">
                    <input value={pdfDetails.date} className="form-control" style={{border:"none",outline:'none',borderBottom:'1px dotted'}}/>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group row">
                  <label className="col-form-label col-lg-3">Vehicle No.:</label>
                  <div className="col-lg-9">
                    <input value={pdfDetails.vechicle} className="form-control" style={{border:"none",outline:'none',borderBottom:'1px dotted'}}/>
                  </div>
                </div>
              </div>
            </div>
            <div className="table-responsive">
              <Table
                columns={Pdfcolumns}
                dataSource={PdfTable}
                pagination={false}
                footer={footer}
                // rowKey={rowKey}
                //   handelSelectedKey={props.handelSelectedKey}
              />
            </div>
          </>
        }
      />
    </React.Fragment>
  )
}

export default ReportComp