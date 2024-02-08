/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-dupe-keys */
import React, { useEffect, useState } from "react";
import DriverManagementPage from "./DriverManagementPage";
import MyColumns, { TransportColumn, VehicleColumn } from "./MyColumns";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import ReactToast, {
  showToastError,
  showToastMessage,
} from "../../CustomComps/ReactToast";
import { filterData } from "../ReuseFunctions/ReuseFunction";
import Swal from "sweetalert2";
import { Excel } from "antd-table-saveas-excel";

const DriverManagementList = () => {
  let api = useFetch();
  const [startDate, setStartDate] = useState(new Date());
  const [inputfilter, setInputfilter] = useState(false);
  const [listData, setListData] = useState([]);
  const [rowData, setRowData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");

  let { userId } = useParams();
  const navigate = useNavigate();
  console.log("userId", userId);

  const options = [
    { id: 1, text: "Disable", text: "Disable" },
    { id: 2, text: "Enable", text: "Enable" },
  ];
  const togglefilter = (value) => {
    setInputfilter(value);
  };

  const handleEditClick = (record) => {
    const code = record.code;
    switch (userId) {
      case "2":
        navigate("/delivery/drivers/transport_master", { state: code });
        break;
      case "3":
        navigate("/delivery/drivers/vehicle_master", { state: code });
        break;
      case "1":
        navigate("/delivery/drivers/newdriver", { state: code });
        break;
      default:
    }
  };
const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-success",
    cancelButton: "btn btn-danger"
  },
  buttonsStyling: false
});

const confirmText = (code, mt) => {
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
      getDeleteApi(code, mt);
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

  const handleDeleteClick = (record) => {
    let code = record.code;
    let mt = record.masterType;
    confirmText(code, mt);
  };
  // =========================transport-table===============================
  const getTransportList = async () => {
    let url = `/api/GetTransportList?Code=0&MasterType=1`;
    try {
      setLoading(true);
      let { res, got } = await api(url, "GET", "");
      if (res.status == 200) {
        console.log("transportlist", got.data);
        let list = got.data;
        let filteredData = filterData(list, searchText, [
          "name",
          "mobile",
          "email",
        ]);
        setListData(filteredData);
        setRowData(transport);
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
  // =========================vehicle-table===============================
  const getVehicleList = async () => {
    let url = `/api/GetVechicleList?Code=0&MasterType=2`;
    try {
      setLoading(true);
      let { res, got } = await api(url, "GET", "");
      if (res.status == 200) {
        console.log("getVehicleList", got.data);
        let list = got.data;
        let filteredData = filterData(list, searchText, [
          "name",
          "transportName",
          "vechicleModel",
          "vechicleType",
        ]);
        setListData(filteredData);
        setRowData(Vehicle);
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
  // =========================Driver-table===============================
  const getDriverList = async () => {
    let url = `/api/GetDriverList?Code=0&MasterType=3`;
    try {
      setLoading(true);
      let { res, got } = await api(url, "GET", "");
      if (res.status == 200) {
        let list = got.data;
        console.log("getDriverList", list);
        let filteredData = filterData(list, searchText, [
          "name",
          "mobile",
          "email",
          "transportName",
          "vechicleModel",
          "vechicleType",
        ]);
        setListData(filteredData);
        setRowData(driver);
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

  // ===================================delete-api==================================
  const getDeleteApi = async (code, mt) => {
    const urlDelete = `/api/DeleteMast?Code=${code}&MasterType=${mt}`;
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
        RecallFunctionHandler();
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

  const RecallFunctionHandler = (searchText) => {
    console.log(userId, "switch");
    switch (userId) {
      case "2":
        getTransportList(searchText);
        break;
      case "3":
        getVehicleList(searchText);
        break;
      case "1":
        getDriverList(searchText);
        break;

      default:
    }
  };
  // =======================for-input-search==============================
  const handleSearch = (value) => {
    setSearchText(value);
    RecallFunctionHandler(value);
  };
  // =================================export-to-excel==============================
  const handleExportClick = () => {
    var exceld;
    {
      userId == 1
        ? (exceld = "DriverList.xlsx")
        : userId == 2
        ? (exceld = "TransportList.xlsx")
        : userId == 3
        ? (exceld = "VehicleList.xlsx")
        : (exceld = "Data.xlsx");
    }
    if (listData) {
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
            listData.map(({ key, action, ...rest }) => rest),
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

  useEffect(() => {
    RecallFunctionHandler();
  }, [userId, searchText]);

  // =======================All columns==========================
  const driver = MyColumns(handleEditClick, handleDeleteClick);
  const transport = TransportColumn(handleEditClick, handleDeleteClick);
  const Vehicle = VehicleColumn(handleEditClick, handleDeleteClick);
  return (
    <React.Fragment>
      <ReactToast />
      <DriverManagementPage
        data={listData}
        togglefilter={togglefilter}
        options={options}
        startDate={startDate}
        setStartDate={setStartDate}
        inputfilter={inputfilter}
        columns={rowData}
        loading={loading}
        userId={userId}
        handleSearch={handleSearch}
        handleExportClick={handleExportClick}
      />
    </React.Fragment>
  );
};

export default DriverManagementList;
