/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-dupe-keys */
import React, { useEffect, useState } from "react";
import UserListPage from "./UserListPage";
import UsersColumn from "./UsersColumn";
import useFetch from "../../Hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { filterData } from "../ReuseFunctions/ReuseFunction";
import { Excel } from 'antd-table-saveas-excel';
import Swal from "sweetalert2";
import { showToastError, showToastMessage } from "../../CustomComps/ReactToast";

const UserLists = () => {
  let api = useFetch()
  const navigate = useNavigate()
  const [startDate, setStartDate] = useState(new Date());
  const [inputfilter, setInputfilter] = useState(false);
  const [listData, setListData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState('');
    // const [rowData, setRowData] = useState([]);
  const options = [
    { id: 1, text: "Disable", text: "Disable" },
    { id: 2, text: "Enable", text: "Enable" },
  ];
  const togglefilter = (value) => {
    setInputfilter(value);
  };

  const handleEditClick = (record) => {
    let code = record.code
    console.log(record)
    navigate('/delivery/users/newuser' ,{state:code});
  };
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger"
    },
    buttonsStyling: false
  });

  const confirmText = (code) => {
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        getDeleteApi(code);
        swalWithBootstrapButtons.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
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

  const getDeleteApi = async (code) => {
    const urlDelete = `/api/DeleteUser?Code=${code}`;
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
        getUserList()
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

  const handleDeleteClick = (record) => {
    let code = record.code;
    confirmText(code);
    
  };
   // =========================user-table===============================
   const getUserList = async () => {
    let url = `/api/GetUserList?Code=0`;
    try {
      setLoading(true);
      let { res, got } = await api(url, "GET", "");
      if (res.status == 200) {
        console.log("transportlist", got.data);
        let list = got.data;
        let filteredData = filterData(list, searchText, ['userName','mobile','email','roleName'])
        setListData(filteredData);
        // setRowData(transport);
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
  const columns = UsersColumn(handleEditClick, handleDeleteClick)
    // =======================for-input-search==============================
    const handleSearch = (value) => {
      setSearchText(value);
      getUserList(value)
    };

  useEffect(()=>{
    getUserList()
  },[searchText])
  // =================================export-to-excel==============================
  const handleExportClick = () => {

    if (listData) {
      const excel = new Excel();
  
      const filteredColumns = columns.length >0 ? columns.filter(column => column.title !== 'Action') : [];
      console.log('ffffccc',filteredColumns)
  
      if (filteredColumns.length > 0) {
        excel
          .addSheet('test')
          .addColumns(filteredColumns)
          .addDataSource(
            listData.map(({ key, action, ...rest }) => rest), // Check the data extraction logic here
            {
              str2Percent: true,
            }
          )
          .saveAs('Users.xlsx');
      } else {
        console.error('No valid columns found.');
      }
    } else {
      console.error('No data in listData or listData is undefined.');
    }
  };
  
  



 

  return (
   <React.Fragment>
     <UserListPage 
     togglefilter={togglefilter}
     options={options}
     startDate={startDate}
     setStartDate={setStartDate}
     inputfilter={inputfilter}
     data={listData}
     columns={columns}
     loading={loading}
     handleSearch={handleSearch}
     handleExportClick={handleExportClick}
     />
   </React.Fragment>
  );
};

export default UserLists;
