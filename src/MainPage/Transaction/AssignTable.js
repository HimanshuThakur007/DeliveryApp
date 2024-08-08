import React,{useEffect, useState} from 'react'
import AssignTablePage from './AssignTablePage'
import useFetch from '../../Hooks/useFetch';
import { convertDate2 } from '../ReuseFunctions/ReuseFunction';
import Swal from "sweetalert2";
import {EditIcon, DeleteIcon} from "../../EntryFile/imagePath";
import ReactToast, { showToastError, showToastMessage } from '../../CustomComps/ReactToast';
import { FcCancel } from "react-icons/fc";

const AssignTable = () => {
    let api = useFetch()
    const [loading, setLoading] = useState(false);
    const [AssignTable, setAssignTable] = useState([]);
    const [driverList, setDriverlist] = useState([]);
    const [values, setValues] = useState({});
    const [selectedDriver, setSelectedDriver] = useState(null);
    const [dates, setDates] = useState({
        fDate: new Date(),
        tDate: new Date()
      });

    //   ============================================sweetAlert======================
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
      });
      const confirmText = (vcode,comp,Fy,bCode) => {
        swalWithBootstrapButtons.fire({
          title: "Are you sure?",
          text: "You want  to cancel this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, cancel it!",
          cancelButtonText: "No, Don't cancel!",
          reverseButtons: true
        }).then((result) => {
          if (result.isConfirmed) {
            getDeleteApi(vcode,comp,Fy,bCode);
            swalWithBootstrapButtons.fire({
              title: "Cancelled!",
              text: "Your Ride is Cancelled",
              icon: "success"
            });
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire({
              title: "Cancelled",
              text: "Your imaginary file is safe :)",
              icon: "error"
            });
          }
        });
      };
    //   ===================================delete-Handler=============================
    const onDeleteClick = (record) => {
      console.log(record)
        let vcode = record.vchCode;
        let comp = record.compCode;
        let Fy = record.fy
        let bCode=record.busyCode
        confirmText(vcode,comp,Fy,bCode);
      };

      const getDeleteApi=async(vcode,comp,Fy,bCode)=>{
        console.log('deleted')
        const urlDelete = `/api/CancleStatus?vCode=${vcode}&CompCode=${comp}&FY=${Fy}&BusyCode=${bCode}`;
    var body = {
      // Code: code,
      // MasterType: mt
    };
    try {
      setLoading(true);
      let { res, got } = await api(urlDelete, "POST", body);
      if (res.status == 200) {
        console.log("getDeleteApi", got);
        showToastMessage(got.msg);
        getAssignListData()
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
// ==================================DateHandler==================================
  const handleDateChange = (dateFieldName, dateValue) => {
    setDates({
      ...dates,
      [dateFieldName]: dateValue,
    });
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

  const getAssignListData = async () => {
    setAssignTable([])
    // e.preventDefault();
    if (selectedDriver !== null){
      var driver = selectedDriver.value 
    }
    if(values.assign !== 0){
      
    var fromDate = convertDate2(dates.fDate)||'';
    var toDate = convertDate2(dates.tDate)||'';
    }
  var status = values.assign||0
    // console.log('kkk', val)
    let url = `/api/GetaSSIGNVoucher?SDate=${fromDate}&TDate=${toDate}&Status=${status}&Driver=${driver||0}`;
    console.log("uu56", url);
    try {
      setLoading(true);
      let { res, got } = await api(url, "GET", "");
      if (res.status == 200) {
        console.log("getAssignTableData", got.data);
        let list = got.data;

        setAssignTable(list);
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
    // ============================driver-Handler================================
    const SelectDriverHandler=(select)=>{
      setSelectedDriver(select)
    }

    const handleValueChange = (id, newValue) => {
      setValues((prevValues) => ({
        ...prevValues,
        [id]: newValue,
      }));
    };

  useEffect(()=>{
    getDriverList()
  },[])

  useEffect(()=>{
    getAssignListData()
  },[values])

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      sorter: (a, b) => a.date.length - b.date.length,
    },
    {
      title: "Order Id",
      dataIndex: "tripID",
      sorter: (a, b) => a.tripID.length - b.tripID.length,
    },
    {
      title: "Assign Number",
      dataIndex: "assign",
      sorter: (a, b) => a.assign.length - b.assign.length,
    },
     
    {
      title: "Invoice Number",
      dataIndex: "vchNo",
      sorter: (a, b) => a.vchNo.length - b.vchNo.length,
    },
    {
      title: "Driver Name",
      dataIndex: "driver",
      sorter: (a, b) => a.driver.length - b.driver.length,
    },
    {
      title: "Mobile Number",
      dataIndex: "dMobile",
      sorter: (a, b) => a.dMobile.length - b.dMobile.length,
    },
   
    {
      title: "Customer Name",
      dataIndex: "accName",
      sorter: (a, b) => a.accName.length - b.accName.length,
    },
    {
      title: "Customer Mobile No.",
      dataIndex: "mobile",
      sorter: (a, b) => a.mobile.length - b.mobile.length,
    },

    {
        title: "Status",
        dataIndex: "Status",
        render: (text, record) => (
          <>
            {record.status === 0 && (
              <span className="badges" style={{background:'#FE9705'}}>Pending</span>
            )}
            {record.status === 2 && (
              <span className="badges bg-lightgreen">Completed</span>
            )}
            {record.status === 1 && (
              <span className="badges" style={{background:'0569FF'}}>Undelivered</span>
            )}
            {/* {record.status === 4 && (
              <span className="badges bg-lightyellow">Cancelled</span>
            )} */}
          </>
        ),
        sorter: (a, b) => a.Status.length - b.Status.length,
      },
      {
        title: "Action",
        render: (text, record) => (
          <>
            
            {record.status === 0?(
            <>
            <span className="me-3 confirm-text" 
            onClick={() => onDeleteClick(record)} 
            style={{cursor:'pointer'}}>
              <img src={DeleteIcon} alt="Delete" />
            </span>
            </>
            ):<>
               <span className="me-3 confirm-text">
               <FcCancel size={30}/>
               </span>
            </>}
          </>
        ),
      },
  ];


  return (
    <React.Fragment>
      <ReactToast/>
        <AssignTablePage 
        handleDateChange={handleDateChange}
        dates={dates}
        columns={columns}
        data = {AssignTable}
        loading={loading}
        getAssignListData={getAssignListData}
        driverList={driverList}
        selectedDriver={selectedDriver}
        SelectDriverHandler={SelectDriverHandler}
        handleValueChange={handleValueChange}
        values={values}
        />
    </React.Fragment>
  )
}

export default AssignTable