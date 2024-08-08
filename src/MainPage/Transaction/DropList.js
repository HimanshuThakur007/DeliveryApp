import React, { useState } from "react";
import useFetch from "../../Hooks/useFetch";
import {
  convertDate,
  convertDate2,
  filterData,
} from "../ReuseFunctions/ReuseFunction";
import {
  ClosesIcon,
  Filter,
  Pdf,
  Eye1,
  Calendar,
  Printer,
  search_whites,
  Search,
  PlusIcon,
  EditIcon,
  Dollar1,
  plusCircle,
  Download,
  delete1,
  DeleteIcon,
  datepicker,
} from "../../EntryFile/imagePath";
import { useParams } from "react-router-dom";
import { Excel } from "antd-table-saveas-excel";
import DropListPage from "./DropListPage";
import { Link } from "react-router-dom";
import ReactToast, { showToastError, showToastMessage } from "../../CustomComps/ReactToast";

const DropList = () => {
  const [uploadedImages, setUploadedImages] = useState({});
  console.log('upImage',uploadedImages)
  const handleImageUpload = (event, record) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      let base64String = event.target.result;
      // base64String = base64String.substring(base64String.indexOf(',') + 1);
      setUploadedImages(prevState => ({
        ...prevState,
        [record.srNo]: base64String 
      }));
    };
    reader.readAsDataURL(file);
  };

  const renderUploadedImage = (record) => {
    return (
        <>
            <div className="productimgname">
                <div className="product-img stock-img" style={{ display: "flex", alignItems: "center" }}>
                    {uploadedImages[record.srNo] && (
                        <img
                            src={uploadedImages[record.srNo]}
                            alt="Thumbnail"
                            className="uploaded-image"
                            style={{ height: "8vh" }}
                        />
                    )}
                    <div className="image-options">
                        <input
                            type="file"
                            accept="image/*"
                            id={`file-input-${record.srNo}`}
                            style={{ display: "none" }}
                            onChange={(event) => handleImageUpload(event, record)}
                        />
                        <label
                            htmlFor={`file-input-${record.srNo}`}
                            className="upload-image-label"
                            style={{ cursor: "pointer", textDecoration: 'underline', color: "orange", marginLeft: "10px" }}
                        >
                            {uploadedImages[record.srNo] ? "Change Image" : "Upload Image"}
                        </label>
                    </div>
                </div>
            </div>
        </>
    );
};

    const columns = [
        {
            title: "Date",
            dataIndex: "date",
            sorter: (a, b) => a.date.length - b.date.length,
          },
          {
            title: "Upload Image",
            dataIndex: "image",
           render: (text, record) => renderUploadedImage(record)
          },
          {
            title: "Assign No",
            dataIndex: "assignNo",
            sorter: (a, b) => a.assignNo.length - b.assignNo.length,
          },
          {
            title: "Bill No",
            dataIndex: "vchNo",
            sorter: (a, b) => a.vchNo.length - b.vchNo.length,
          },
        {
            title: "Transporter Name",
            dataIndex: "trasportName",
            sorter: (a, b) => a.trasportName.length - b.trasportName.length,
          },
         
          {
            title: "Account Name",
            dataIndex: "accName",
            sorter: (a, b) => a.accName.length - b.accName.length,
          },
        
          {
            title: "Mobile Number",
            dataIndex: "mobile",
            sorter: (a, b) => a.mobile.length - b.mobile.length,
          },
        
          {
            title: "Quantity",
            dataIndex: "qty",
            sorter: (a, b) => a.accName.length - b.accName.length,
          },
          {
            title: "Amount",
            dataIndex: "amount",
            sorter: (a, b) => a.aMobile.length - b.aMobile.length,
          },
          {
            title: "Status",
            render: (text, record) => (
              <>
                <div className="text-center">
                  <Link
                    className="action-set"
                    to="#"
                    data-bs-toggle="dropdown"
                    aria-expanded="true"
                  >
                    <i className="fa fa-ellipsis-v" aria-hidden="true" />
                  </Link>
                  <ul className="dropdown-menu">
                   
                    {/* <li>
                      <Link
                        to="/es-ecommerce/sales/edit-sales"
                        className="dropdown-item"
                      >
                        <img src={EditIcon} className="me-2" alt="img" />
                        Edit Sale
                      </Link>
                    </li> */}
                  
                    
                    <li>
                      <Link className="dropdown-item"  onClick={()=>onDeliveredHandler(record,"2")}>
                        <img src={Download} className="me-2" alt="img"/>
                        Delivered
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item confirm-text"
                        onClick={()=>onDeliveredHandler(record,"3")}
                        // onClick={confirmText}
                      >
                        <img src={delete1} className="me-2" alt="img" />
                        Cancel
                      </Link>
                    </li>
                  </ul>
                </div>
              </>
            ),
          },
        
    ];
  let api = useFetch();

  const [rowData, setRowData] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [driverList, setDriverlist] = useState([]);
  const [tripModalData, setTripModalData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({});
  const [initialValue, setInitialValue] = useState(0);
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [inputfilter, setInputfilter] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [dates, setDates] = useState({
    fDate: new Date(),
    tDate: new Date(),
  });

  //====================toggel-filter=================
  const togglefilter = (value) => {
    setInputfilter(value);
  };
  // =======================for-input-search==============================
  const handleSearch = (value) => {
    setSearchText(value);
    DynamicFunctionCaller(value);
  };
  // ==================================DateHandler==================================
  const handleDateChange = (dateFieldName, dateValue) => {
    setDates({
      ...dates,
      [dateFieldName]: dateValue,
    });
  };

  // ============================driver-Handler================================
  const SelectDriverHandler = (select) => {
    setSelectedDriver(select);
  };

  const handleEditClick = (record) => {
    // const code = record.code;
    console.log("record", record);
  };
  const handleModalShowClick = async (record) => {
    let code = record.code;
    console.log("Modal record", record);

    let url = `/api/GetTripWiseRpt?Code=${code}`;
    console.log("url", url);
    try {
      setLoading(true);
      let { res, got } = await api(url, "GET", "");
      if (res.status == 200) {
        console.log("tripReport", got.data);
        let list = got.data;
        setTripModalData(list);
        // setRowData(tripModalCol);
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
    console.log("record", record);
  };
  const handleValueChange = (id, newValue) => {
    setValues((prevValues) => ({
      ...prevValues,
      [id]: newValue,
    }));
  };

  // =========================DeliveryDay-table===============================
  const getDropList = async () => {
    if (selectedDriver !== null) {
      var driver = selectedDriver.value;
    }
    if (values.assign !== 0) {
      var fdate = convertDate2(dates.fDate) || "";
      var tdate = convertDate2(dates.tDate) || "";
    }
    var status = values.assign || 0;
    let url = `/api/GetDropListRpt?Status=${status || 0}&Driver=${
      driver || 0
    }&SDate=${fdate}&TDate=${tdate}`;
    console.log("url", url);
    try {
      setLoading(true);
      let { res, got } = await api(url, "GET", "");
      //   if (res.Status == 200) {
   
      // let list = got.data;
      let list = got.data.map(item => {
        return {
          ...item,
          image: uploadedImages[item.srNo] || ""
        }
      });
      console.log("RowData", list);
      // console.log("getDropList", got.data);
      let filteredData = filterData(list, searchText, [
        "trasportName",
        "mobile","assignNo","accName","vchNo","date"
      ]);
      setTableData(filteredData);
      // setRowData(columnsdel);
      setLoading(false);
      //   } else {
      //     setLoading(false);
      //     alert("Something Went Wrong in List loading");
      //   }
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
        let addobj = {value:0,label:"All"}
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

  const DynamicFunctionCaller = (searchText) => {
    setRowData([]);
    setTableData([]);

    getDropList(searchText);
  };
  React.useEffect(() => {
    DynamicFunctionCaller();
  }, [values, searchText, uploadedImages]);

  React.useEffect(() => {
    getDriverList();
  }, []);

  // =================================export-to-excel==============================
  const handleExportClick = () => {
    if (tableData) {
      const excel = new Excel();

      const filteredColumns =
        columns.length > 0
          ? columns.filter((column) => column.title !== "Action")
          : [];

      if (filteredColumns.length > 0) {
        excel
          .addSheet("Sheet1")
          .addColumns(filteredColumns)
          .addDataSource(
            tableData.map(({ key, action, ...rest }) => rest),
            {
              str2Percent: true,
            }
          )
          .saveAs("dropList.xlsx");
      } else {
        console.error("No valid columns found.");
      }
    } else {
      console.error("No data in listData or listData is undefined.");
    }
  };

  const rowSelectHandler = (selectKey, selectRow) =>{
         console.log('selectRow90',selectRow)
        // selectRow.map((item)=>{
        // let vchCode = item.vchCode;
        // let busyCode =item.busyCode
        // onDeliveredHandler(vchCode,busyCode)
        //  })
  }

  const onDeliveredHandler =async(record,id)=>{
      console.log('code',record,id)
      console.log('record',record)
      // let corrData = [];
    // let url = `/api/UpdateDropVoucherStatus?VchCode=${record.vchCode}&BusyCode=${record.busyCode}&Sts=${id}`;
    let url = `/api/UpdateDropVoucherStatus`;
    console.log('url90',url)
    let convertedBase64 = record.image.substring(record.image.indexOf(',') + 1);
    let mimeType = record.image.match(/data:image\/([a-zA-Z+]*);/)[1];
    let ext = `image/${mimeType}`
    console.log("extension",ext)

    console.log("to save base64",convertedBase64)
    console.log("mimeType",mimeType)
    var body = {
    Address: "",
    BusyCode: record.busyCode,
    Distance: 0,
    Driver: record.driver,
    ImgExt: ext||'',
    ImgStr: convertedBase64||'',
    Latitude: "",
    Longitude: "",
    Remark: "",
    Vchcode: record.vchCode,
    Vechicle: record.vechicle,
    sts: parseInt(id)
      // Code: code,
      // MasterType: mt
    };
      console.log('jsonBody',JSON.stringify(body))
    try {
      setLoading(true);
      let { res, got } = await api(url, "POST", body);
      if (res.status == 200) {
        console.log("getDelivered and cancel", got);
        showToastMessage(got.msg);
        setUploadedImages({})
        getDropList()
        setLoading(false);
      } else {
        setLoading(false);
        showToastError(got.msg);
      }
    } catch (error) {
      setLoading(false);
      showToastError(error);
    }
  }


  return (
    <React.Fragment>
       <ReactToast/>
      <DropListPage
        columns={columns}
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
        tripModalData={tripModalData}
        inputfilter={inputfilter}
        togglefilter={togglefilter}
        handleSearch={handleSearch}
        handleExportClick={handleExportClick}
        rowSelectHandler={rowSelectHandler}
      />
    </React.Fragment>
  );
};

export default DropList;
