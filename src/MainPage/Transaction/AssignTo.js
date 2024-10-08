import React, { useState, useEffect } from "react";
import AssignToPage from "./AssignToPage";
import TranModal from "./TranModal";
import InputSelect from "../../CustomComps/InputSelect";
import { useLocation, useNavigate } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import ReactToast, {
  showToastError,
  showToastMessage,
} from "../../CustomComps/ReactToast";
import {EditIcon, DeleteIcon,plusCircle,Eye1} from "../../EntryFile/imagePath";
import { convertDate, convertDate2, filterData } from "../ReuseFunctions/ReuseFunction";
import { Excel } from 'antd-table-saveas-excel';
import moment from "moment/moment";
import PDFModal from "./PDFModal";
import { Table} from 'antd';
import { Margin, usePDF } from "react-to-pdf";
import {BsFiletypePdf,BsFileEarmarkPdfFill} from 'react-icons/bs'


const AssignTo = () => {
  // let iconStyles = { color: "red", cursor:'pointer'};
  const { toPDF, targetRef } = usePDF({
    filename: "AssignReport.pdf",
    page: { margin: Margin.MEDIUM }
  });
  const [showModal, setShowModal] = useState(false);
  const [compList, setCompList] = useState([]);
  const [assignTable, setAssignTable] = useState([]);
  const [driverList, setDriverlist] = useState([]);
  const [vehicleList, setVehiclelist] = useState([]);
  const [transportList, setTransportlist] = useState([]);
  const [selectedRow, setSelectedRow] = useState([]);
  const [selectedCompList, SetSlectedCompList] = useState(null);
  const [transport2Values, setTransport2Values] = useState({});
  const [assignNo, setAssignNo] = useState("");

  const [loading, setLoading] = useState(false);
  const currentDate = new Date();
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const [dates, setDates] = useState({
    fDate: firstDayOfMonth,
    tDate: new Date(),
    Date: new Date(),
  });
  const [selectedValues, setSelectedValues] = React.useState({
    driver: null,
    vehicle: null,
    transport: null,
    transport2:null
  });
  const [driverCode, setDriverCode] = useState(0);
  const [vehicleCode, setVehicleCode] = useState(0);
  const [transportCode, setTransportCode] = useState(0);
  const [values, setValues] = useState({});
  const [initialValue, setInitialValue] = useState(0);
  const [inputfilter, setInputfilter] = useState(false);
  const [searchText, setSearchText] = useState('');

  const location = useLocation();
  let api = useFetch();
console.log('val',values)

//==========================export and search functions==================================

const togglefilter = (value) => {
  setInputfilter(value);
};
const handleSearch = (value) => {
  setSearchText(value);
  getAssignTableData(value)
};
const handleExportClick = () => {

  if (assignTable) {
    const excel = new Excel();

    const filteredColumns = columns.length >0 ? columns.filter(column => column.title !== 'Action') : [];
    console.log('ffffccc',filteredColumns)

    if (filteredColumns.length > 0) {
      excel
        .addSheet('Sheet1')
        .addColumns(filteredColumns)
        .addDataSource(
          assignTable.map(({ key, action, ...rest }) => rest), // Check the data extraction logic here
          {
            str2Percent: true,
          }
        )
        .saveAs('AssignTo.xlsx');
    } else {
      console.error('No valid columns found.');
    }
  } else {
    console.error('No data in listData or listData is undefined.');
  }
};

  // ===========================multi selectlist field handler============================
// Update transport2 value for a specific row
const handleTransport2Change = (rowIndex, value) => {
  console.log("Updating transport2 for row", rowIndex, "with value:", value);
  setTransport2Values(prevState => ({
    ...prevState,
    [rowIndex]: value
  }));
};



  const handleSelectChange = (
    selectedOption,
    selectName,
    setSelectedValues,
    rowIndex
  ) => {
    if (selectName === "driver") {
      if (selectedOption !== null) {
      const selectedDriver = driverList.find(
        (driver) => driver.value === selectedOption.value
      );

      if (selectedDriver) {
      
          setDriverCode(selectedOption.value);
        
        if (
          selectedDriver.transport === "" &&
          selectedDriver.transportCode === 0
        ) {
          setTransportCode(0);
          setSelectedValues((prevSelectedValues) => ({
            ...prevSelectedValues,
            [selectName]: selectedOption,
            transport: { label: "N/A", value: 0 },
          }));
        } else {
          setTransportCode(selectedDriver.transportCode);
          setSelectedValues((prevSelectedValues) => ({
            ...prevSelectedValues,
            [selectName]: selectedOption,
            transport: {
              label: selectedDriver.transport,
              value: selectedDriver.transportCode,
            },
          }));
        }
      }
    }
    } else {
      if (selectName === "vehicle") {
        if (selectedOption !== null) {
          setVehicleCode(selectedOption.value);
        }
      } else if (selectName === "transport") {
        if (selectedOption !== null) {
          setTransportCode(selectedOption.value);
        }
      } else if (selectName === "transport2") {
        handleTransport2Change(rowIndex, selectedOption);
        // if (selectedOption !== null) {
        //   // setTransportCode(selectedOption.value);
        //   console.log('transport2-code',selectedOption.value )
        // }
      }

      setSelectedValues((prevSelectedValues) => ({
        ...prevSelectedValues,
        [selectName]: selectedOption,
      }));
    }
  };

  // ==========================DateHandler===================
  const handleDateChange = (dateFieldName, dateValue) => {
    setDates({
      ...dates,
      [dateFieldName]: dateValue,
    });
  };

  // ====================companyHandler==============================
  const CompanySelectHandler = (selectOption) => {
   
    console.log("soption", selectOption);
    if (selectOption !== null) {
      SetSlectedCompList(selectOption);
    }
  };

  // useEffect(() => {
  //   if (selectedCompList !== null) {
  //     var val = selectedCompList.value;
  //     var fy = selectedCompList.fy;

  //     getAssignTableData(val, fy);
  //     console.log("vvv96#", val, fy);
  //   }
  // }, [selectedCompList]);
  useEffect(()=>{
    getAssignTableData()
  },[values,searchText])

  // =========================Company-list===============================
  // const getCompanyList = async () => {
  //   let corrData = [];
  //   let url = `/api/GetCompany`;
  //   try {
  //     setLoading(true);
  //     let { res, got } = await api(url, "GET", "");
  //     if (res.status == 200) {
  //       console.log("companyList======", got.data);
  //       let list = got.data;
  //       list.map((item) => {
  //         corrData.push({
  //           label: item.compName,
  //           value: item.compCode,
  //           fy: item.fy,
  //         });
  //       });
  //       setCompList(corrData);
  //       // setRowData(transport);
  //       // setMasterType(131003)
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
  // =========================Table-list===============================
  

  const getAssignTableData = async (value,fyear) => {
   
    // e.preventDefault();
    let status = values.assign
    let val;
    let fy;
    if(selectedCompList !== null){
      
      val = selectedCompList.value;
      fy = selectedCompList.fy;
    }
    let fromDate = convertDate2(dates.fDate)||'';
  let toDate = convertDate2(dates.tDate)||'';
  
    // console.log('kkk', val)
    // let url = `/api/GetPenSaleVoucher?CompCode=${val||value}&Fy=${fy||fyear}&SDate=${fromDate}&TDate=${toDate}&Status=${status||0}`;
    let url = `/api/GetPenSaleVoucher?CompCode=""&Fy=""&SDate=${fromDate}&TDate=${toDate}&Status=${status||0}`;
    console.log("tableurl", url);
    // let url = `/api/GetPenSaleVoucher?CompCode=Comp0044&Fy=2024`;
    try {
      setAssignTable([])
      setLoading(true);
      let { res, got } = await api(url, "GET", "");
      if (res.status == 200) {
        console.log("getAssignTableData", got.data);
        let list = got.data;
        let filteredData = filterData(list, searchText, ['compName','billNo','partyName','mobile'])

        setAssignTable(filteredData);
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
  //   =============================Transport-List MasterType=1 ============================
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
  //   =============================Vehicle-List MasterType=2 ============================
  const getVehicleList = async () => {
    // let corrData = [];
    let url = `/api/GetMaster?MasterType=2&TranType=2`;
    try {
      setLoading(true);
      let { res, got } = await api(url, "GET", "");
      if (res.status == 200) {
        console.log("vehicle", got.data);
        let list = got.data;
        // list.map((item) => {
        //   corrData.push({ label: item.name, value: item.code });
        // });
        setVehiclelist(list);
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
  //   =============================Assign No ============================
  const getAssignNo = async () => {
    // let corrData = [];
    let url = `/api/GetAssignVchNo?`;
    try {
      setLoading(true);
      let { res, got } = await api(url, "GET", "");
      if (res.status == 200) {
        console.log("transportlist", got);
        let list = got.assignNo;
        // list.map((item) => {
        //   corrData.push({ label: item.name, value: item.code });
        // });
        setAssignNo(list);
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

  useEffect(() => {
    getVehicleList();
    getDriverList();
    getTransportList();
    getAssignNo();
  }, []);

  // ===================showModal on PageLoad====================================

  // useEffect(() => {
  //   if (location.pathname === "/delivery/transaction/assign_to") {
  //     getCompanyList();
  //     setShowModal(true);
  //   } else {
  //     setShowModal(false);
  //   }
  // }, [location.pathname]);

  const handleSave = () => {
    // Your save logic...
    if (selectedCompList !== null) {
      setShowModal(false);
    }
  };
  const navigate= useNavigate()

  // const handleHide = () => {
  //   if (!selectedCompList){
  //   navigate("/delivery/dashboard")
  //   }else{

  //     setShowModal(false);
  //   }
  // };
  const handleHide = () => {
  

      setShowModal(false);
    
  };
  console.log(showModal);

  const handelSelectedKey = (selectedRowKeys, selectedRows) => {
    setSelectedRow(selectedRows);
    console.log("selectedRowKeys", selectedRowKeys);
    console.log("selectedRows from assignto", selectedRows);
  };

  //   ============================columns======================

  const columns = [
    {
      title: "Company Name",
      dataIndex: "compName",
      sorter: (a, b) => a.compName.length - b.compName.length,
    },
    {
      title: "Invoice Number",
      dataIndex: "billNo",
      sorter: (a, b) => a.billNo.length - b.billNo.length,
    },
    {
      title: "Date",
      dataIndex: "date",
      sorter: (a, b) => a.date.length - b.date.length,
    },
    {
      title: "Customer Name",
      dataIndex: "partyName",
      sorter: (a, b) => a.partyName.length - b.partyName.length,
    },

    {
      title: "Mobile",
      dataIndex: "mobile",
      sorter: (a, b) => a.mobile.length - b.mobile.length,
    },
    {
      title: "Quantity",
      dataIndex: "qty",
      sorter: (a, b) => a.qty.length - b.qty.length,
    },

    {
      title: "Invoice Amount",
      dataIndex: "amount",
      sorter: (a, b) => a.amount.length - b.amount.length,
    },
    {
      title: "Action",
      render: (text, record) => (
        <>
          {/* <span className="me-3" onClick={() => onEditClick(record)} style={{cursor:"pointer"}}>
            <img src={EditIcon} alt="Edit" />
          </span>
          <span className="me-3 confirm-text" onClick={() => onDeleteClick(record)} style={{cursor:'pointer'}}>
            <img src={DeleteIcon} alt="Delete" />
          </span> */}
           <span
             to="#"
             // className="dropdown-item"
             className="me-3"
             data-bs-toggle="modal"
             data-bs-target="#assignto"
            //  onClick={() => handleModalShowClick(record)}
           >
             <img src={Eye1} className="me-2" alt="img" />
             {/* Details */}
           </span>
        </>
      ),
    }, 
  ];

  const showHandler = () => {
    setShowModal(true);
  };
  // ===========================Toggel-Handler=============================================
  const handleValueChange = (id, newValue) => {
    setValues((prevValues) => ({
      ...prevValues,
      [id]: newValue,
    }));
  };
  function formatDateToDdMmmYyyy(inputDate) {
    // Assuming the input date format is DD/MM/YYYY
    const formattedDate = moment(inputDate, "DD/MM/YYYY").format('DD/MMM/YYYY');
    console.log("formattedDate",formattedDate)
    return formattedDate;
  }
  // ========================================save-data===================================
  const saveHandler = async (e) => {
    let date = convertDate2(dates.Date);

    e.preventDefault();
    const urlSaveAssign = "/api/SaveAssign?";
    // console.log('codeUsers', code)
    let postdata = [];
    selectedRow.map((item,index) => {
      let dateChange = formatDateToDdMmmYyyy(item.date)||"";
      console.log("datteChange",dateChange)
      postdata.push({
        BusyCode: item.vchCode,
        vchNo: item.billNo,
        Date: dateChange,
        Qty: item.qty,
        AccCode: item.accCode,
        Amount: item.amount,
        Mobile:item.mobile,
        AccName:item.partyName,
        CompCode:item.compCode,
        FY:item.fy,
        CompName:item.compName,
        InvDrop:transport2Values[index] ? 1 : 0,
        Transport: transport2Values[index] ? transport2Values[index].value : 0
      });
    });
    console.log('postData',postdata)

    var body = {
      AssignNo: assignNo,
      Date: date,
      Driver: driverCode,
      Vechicle: vehicleCode,
      // CompCode: selectedCompList.value,
      // FY: selectedCompList.fy,
      Transport: transportCode,
      AssignBody: [...postdata],
    };
    // console.log("url", urlSaveDep);
    console.log("bodyjson", JSON.stringify(body));
    try {
      setLoading(true);
      let { res, got } = await api(urlSaveAssign, "POST", body);
   
      if (res.status == 200) {
        console.log("maindata", body);
        showToastMessage(got.msg);
        setSelectedValues({
          driver: null,
          vehicle: null,
          transport: null,
        })
        getPDFReportList(got.code)
        // $('#pdfModal').modal('show');
        setShowModal(true)
        getTransportList();
        getVehicleList();
        getDriverList();
        getAssignTableData()
        setLoading(false);

      } else {
        
        setLoading(false);
        showToastError(got.msg);
      }
    } catch (error) {
      setLoading(false);
      showToastError(error);
    }
  };
  // =====================================get-ReportList==================================================
const [PdfTable,setPdfTable] = useState([])
const [pdfDetails,setPdfDetail] = useState([])
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
        setVehiclelist(list);
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
// console.log('totalQuantity',totalQuantity)
  return (
    <React.Fragment>
      <ReactToast />
      {/* {showModal === true && ( */}
      {/* <div className="col-12 d-flex justify-content-end">
        <span onClick={toPDF}><BsFileEarmarkPdfFill size={30} style={iconStyles}/></span>
        </div> */}
      {/* <div ref={targetRef}> */}
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
      {/* </div> */}
      {/* // )} */}
      {/* {showModal === true && (
        <TranModal
          modalTitle="Company"
          onSave={handleSave}
          onHide={handleHide}
          show={showModal}
          selectedCompList={selectedCompList}
          modalContent={
            <InputSelect
              label="Company"
              options={compList}
              value={selectedCompList}
              onChange={CompanySelectHandler}
            />
          }
        />
      )} */}
      {/* {showModal === false && ( */}
      <AssignToPage
        handleSave={handleSave}
        handleHide={handleHide}
        showModal={showModal}
        handelSelectedKey={handelSelectedKey}
        data={assignTable}
        columns={columns}
        showHandler={showHandler}
        vehicleList={vehicleList}
        driverList={driverList}
        transportList={transportList}
        assignNo={assignNo}
        handleDateChange={handleDateChange}
        dates={dates}
        handleSelectChange={handleSelectChange}
        setSelectedValues={setSelectedValues}
        selectedValues={selectedValues}
        saveHandler={saveHandler}
        getAssignTableData={getAssignTableData}
        values={values}
        initialValue={initialValue}
        handleValueChange={handleValueChange}
        setInitialValue={setInitialValue}
        inputfilter={inputfilter}
        togglefilter={togglefilter}
        handleSearch={handleSearch}
        handleExportClick={handleExportClick}
        loading={loading}
        selectedRow={selectedRow}
      />
      {/* )} */}
    </React.Fragment>
  );
};

export default AssignTo;
