/* eslint-disable no-unused-vars */
import React, { useState } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  AvocatImage,
  Dash1,
  Dash2,
  Dash3,
  Dash4,
  Dropdown,
  OrangeImage,
  PineappleImage,
  EarpodIcon,
  StawberryImage,
  IphoneIcon,
  SamsungIcon,
  MacbookIcon,
} from "../EntryFile/imagePath";
import Table from "../EntryFile/datatables"
// import Chart from "react-apexcharts";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import CountUp from "react-countup";
import { Helmet } from "react-helmet";
import RightSideBar from "../components/rightSidebar";
import { Chart } from "react-google-charts";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useFetch from "../Hooks/useFetch";
import { useAuthContext } from "../components/common/AuthContext";
import { convertDate2 } from "./ReuseFunctions/ReuseFunction";
// import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";





const Dashboard = () => {
  const { url, port, state, actions } = useAuthContext();
  const decData = state.decryptedData;
  console.log('decData',decData)
var { Token } = decData;
  const [expiredData] = useState([
    {
      id: 1,
      code: "IT001",
      image: OrangeImage,
      productName: "Orange",
      brandName: "N/D",
      categoryName: "Fruits",
      expiryDate: "12-12-2022",
    },
    {
      id: 2,
      code: "IT002",
      image: PineappleImage,
      productName: "Pineapple",
      brandName: "N/D",
      categoryName: "Fruits",
      expiryDate: "10-12-2022",
    },
    {
      id: 3,
      code: "IT003",
      image: StawberryImage,
      productName: "Stawberry",
      brandName: "N/D",
      categoryName: "Fruits",
      expiryDate: "27-06-2022",
    },
    {
      id: 4,
      code: "IT004",
      image: AvocatImage,
      productName: "Avocat",
      brandName: "N/D",
      categoryName: "Fruits",
      expiryDate: "20-05-2022",
    },
  ]);
  const [cardData, setCardData] = useState({ })
  const [recentlyDeliveredOrder, setRecentlyDeliveredOrder] = useState([])
  const [dates, setDates] = useState({
    deliveredOrder: new Date(),
    tDate: new Date()
  });

  const [recentData] = useState([
    { id: 1, image: EarpodIcon, products: "Apple Earpods", price: "$891.2" },
    { id: 2, image: IphoneIcon, products: "iPhone 11", price: "$91.2" },
    { id: 3, image: SamsungIcon, products: "Samsung", price: "$561.2" },
    { id: 4, image: MacbookIcon, products: "Macbook Pro", price: "$1009.2" },
  ]);

 const data = [
    ["Sales", "Status"],
    ["Delivered", cardData.totDeliver],
    ["Cancel", cardData.totCancel],
    ["Paid", cardData.totPaid],
    // ["Paid", 2],
    // ["Watch TV", 2],
    // ["Sleep", 7],
  ];
const options = {
    title: "",
    is3D: true,
  };
  const handleDateChange = (dateFieldName, dateValue) => {
    setDates({
      ...dates,
      [dateFieldName]: dateValue,
    });
  };

  const expiredProductColumns = [
    {
      title: "SNo",
      dataIndex:"id",
      sorter: (a, b) => a.id.length - b.id.length,
    },
    {
      title: "Product Code",
      dataIndex: "code",
      render: (text, record) => (
        <Link to="#" style={{ fontSize: "14px" }}>
          {text}
        </Link>
      ),
      sorter: (a, b) => a.code.length - b.code.length,
    },
    {
      title: "Product Name",
      dataIndex: "productName",
      render: (text, record) => (
        <div className="productimgname">
          <Link to="#" className="product-img">
            <img alt="" src={record.image} />
          </Link>
          <Link to="#" style={{ fontSize: "14px" }}>
            {record.productName}
          </Link>
        </div>
      ),
      sorter: (a, b) => a.productName.length - b.productName.length,
    },
    {
      title: "Brand Name",
      dataIndex: "brandName",
      render: (text, record) => <div style={{ fontSize: "14px" }}>{text}</div>,
      sorter: (a, b) => a.brandName.length - b.brandName.length,
    },
    {
      title: "Category Name",
      dataIndex: "categoryName",
      render: (text, record) => <div style={{ fontSize: "14px" }}>{text}</div>,
      sorter: (a, b) => a.categoryName.length - b.categoryName.length,
    },
    {
      title: "Expiry Date",
      dataIndex: "expiryDate",
      render: (text, record) => <div style={{ fontSize: "14px" }}>{text}</div>,
      sorter: (a, b) => a.expiryDate.length - b.expiryDate.length,
    },
  ];

  const recentDataColumns = [
   
    {
      title: "Vehicle",
      dataIndex: "vechicle",
      // render: (text, record) => <div style={{ fontSize: "14px" }}>{text}</div>,
      sorter: (a, b) => a.vechicle.length - b.vechicle.length,
    },
    {
      title: "Account Name",
      dataIndex: "accName",
      // render: (text, record) => <div style={{ fontSize: "14px" }}>{text}</div>,
      sorter: (a, b) => a.accName.length - b.accName.length,
    },
    {
      title: "Mobile No",
      dataIndex: "mobile",
      // render: (text, record) => <div style={{ fontSize: "14px" }}>{text}</div>,
      sorter: (a, b) => a.mobile.length - b.mobile.length,
    },
    {
      title: "Quantity",
      dataIndex: "qty",
      // render: (text, record) => <div style={{ fontSize: "14px" }}>{text}</div>,
      sorter: (a, b) => a.qty.length - b.qty.length,
    },
    {
      title: "Amount",
      dataIndex: "amount",
      // render: (text, record) => <div style={{ fontSize: "14px" }}>{text}</div>,
      sorter: (a, b) => a.amount.length - b.amount.length,
    },
    {
      title: "Dispatch Date",
      dataIndex: "dispDate",
      // render: (text, record) => <div style={{ fontSize: "14px" }}>{text}</div>,
      sorter: (a, b) => a.dispDate.length - b.dispDate.length,
    },
  ];
  const datePickerStyle = {
    width: '50%', // Adjust the width as needed
  };
    let api = useFetch()
  //   =============================Assign No ============================
  const getDashboardData = async () => {
    // let corrData = [];
    let url = `/api/GetDashBoardData?`;
    try {
      // setLoading(true);
      let { res, got } = await api(url, "GET", "");
      console.log("dashboardData", got);
      if (got.status === 1) {
        let data = got.data
        setCardData(data)
        // setLoading(false);
      } else {
        // setLoading(false);
        alert("Something Went Wrong in List loading");
      }
    } catch (err) {
      // setLoading(false);
      alert(err);
    }
  };
  //   =============================Recently Delivered Order ============================
  const getRecentDeliveredOrder = async () => {
    var fdate = convertDate2(dates.deliveredOrder)||''
    // let corrData = [];
    let url = `/api/GetRecentDeliver?SDate=${fdate}`;
    try {
      // setLoading(true);
      let { res, got } = await api(url, "GET", "");
      console.log("dashboardData", got);
      if (got.status === 1) {
        let data = got.data
        setRecentlyDeliveredOrder(data)
        // setLoading(false);
      } else {
        // setLoading(false);
        alert("Something Went Wrong in List loading");
      }
    } catch (err) {
      // setLoading(false);
      alert(err);
    }
  };


  React.useEffect(()=>{
    if(Token){
      getDashboardData();
    }
  },[Token])
  React.useEffect(()=>{
    if(Token){
      getRecentDeliveredOrder()
    }
  },[Token,dates])

  return (
    <>
      <div className=" page-wrapper">
        <Helmet>
          <title>Fleet Management System Dashboard</title>
          <meta name="description" content="Dashboard page" />
        </Helmet>
        <div className="content ">
          <div className="row">
            <div className="col-lg-3 col-sm-6 col-12">
              <div className="dash-widget">
                <div className="dash-widgetimg">
                  <span>
                    <img src={Dash1} alt="img" />
                  </span>
                </div>
                <div className="dash-widgetcontent">
                  <h5>
                    
                    <span className="counters">
                      <CountUp end={cardData.assignvechicle} />
                    </span>
                  </h5>
                  <h6>On Route Vehicle</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12">
              <div className="dash-widget dash1">
                <div className="dash-widgetimg">
                  <span>
                    <img src={Dash2} alt="img" />
                  </span>
                </div>
                <div className="dash-widgetcontent">
                  <h5>
                    
                    <span className="counters">
                      <CountUp end={cardData.totvechicle} />
                    </span>
                  </h5>
                  <h6>Vehicle</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12">
              <div className="dash-widget dash2">
                <div className="dash-widgetimg">
                  <span>
                    <img src={Dash3} alt="img" />
                  </span>
                </div>
                <div className="dash-widgetcontent">
                  <h5>
                    
                    <span className="counters">
                      <CountUp end={cardData.totDriver} />
                    </span>
                  </h5>
                  <h6>Driver</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12">
              <div className="dash-widget dash3">
                <div className="dash-widgetimg">
                  <span>
                    <img src={Dash4} alt="img" />
                  </span>
                </div>
                <div className="dash-widgetcontent">
                  <h5>
                    
                    <span className="counters">
                      <CountUp end={cardData.totTransport} />
                      {/* {global.transport!= undefined? global.transport:0} */}
                    </span>
                  </h5>
                  <h6>Transport</h6>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-3 col-sm-6 col-12 d-flex">
              <div className="dash-count">
                <div className="dash-counts">
                  <h4>100</h4>
                  <h5>On Route Vehicle</h5>
                </div>
                <div className="dash-imgs">
                  <FeatherIcon icon="user" />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12 d-flex">
              <div className="dash-count das1">
                <div className="dash-counts">
                  <h4>100</h4>
                  <h5>Vehicle</h5>
                </div>
                <div className="dash-imgs">
                  <FeatherIcon icon="user-check" />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12 d-flex">
              <div className="dash-count das2">
                <div className="dash-counts">
                  <h4>100</h4>
                  <h5>Driver</h5>
                </div>
                <div className="dash-imgs">
                  <FeatherIcon icon="file-text" />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12 d-flex">
              <div className="dash-count das3">
                <div className="dash-counts">
                  <h4>105</h4>
                  <h5>Transport</h5>
                </div>
                <div className="dash-imgs">
                  <FeatherIcon icon="file" />
                </div>
              </div>
            </div> */}
            <div className="col-lg-3 col-sm-6 col-12 d-flex">
              <div className="dash-count">
                <div className="dash-counts">
                  <h4>{cardData.totAssign}</h4>
                  <h5>Assigned Delivery</h5>
                </div>
                <div className="dash-imgs">
                  <FeatherIcon icon="user" />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12 d-flex">
              <div className="dash-count das1">
                <div className="dash-counts">
                  <h4>{cardData.totDeliver}</h4>
                  <h5>Delivered Order</h5>
                </div>
                <div className="dash-imgs">
                  <FeatherIcon icon="user-check" />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12 d-flex">
              <div className="dash-count das2">
                <div className="dash-counts">
                  <h4>{cardData.totCancel}</h4>
                  <h5>Cancel Order</h5>
                </div>
                <div className="dash-imgs">
                  <FeatherIcon icon="file-text" />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12 d-flex">
              <div className="dash-count das3">
                <div className="dash-counts">
                  <h4>{cardData.totPaid}</h4>
                  <h5>Paid Order</h5>
                </div>
                <div className="dash-imgs">
                  <FeatherIcon icon="file" />
                </div>
              </div>
            </div>
          </div>
          {/* Button trigger modal */}
          <div className="row">
            <div className="col-lg-6 col-sm-12 col-12 d-flex">
              <div className="card flex-fill">
                <div className="card-header pb-0 d-flex justify-content-between align-items-center">
                  <h5 className="card-title mb-0">Purchase &amp; Sales</h5>
                  <div className="graph-sets">
                    <div className="dropdown">
                      <button
                        className="btn btn-white btn-sm dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        2022
                        <img src={Dropdown} alt="img" className="ms-2" />
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <li>
                          <Link to="#" className="dropdown-item">
                            2022
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="dropdown-item">
                            2021
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="dropdown-item">
                            2020
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <Chart
                    chartType="PieChart"
                    data={data}
                    options={options}
                    width={"100%"}
                    height={"400px"}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 col-12 d-flex">
              <div className="card flex-fill">
                <div className="card-header pb-0 d-flex justify-content-between align-items-center">
                  {/* <h4 className="card-title mb-0">Recently Added Products</h4> */}
                  <h4 className="card-title mb-0">
                    Recently Delivered Order
                  </h4>
                  <div className="col-3">
                  <DatePicker
                    dateFormat="dd/MM/yyyy"
                    selected={dates.deliveredOrder}
                    onChange={(date) => handleDateChange("deliveredOrder", date)}
                    style={{ width: '20px' }}
                    className="form-control"
                  />
                  </div>
                  {/* <div className="dropdown dropdown-action profile-action">
                    <Link
                      to="#"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      className="dropset"
                    >
                      <FontAwesomeIcon icon={""} />
                    </Link>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <li>
                        <Link
                          to="/delivery/product/productlist-product"
                          className="dropdown-item"
                        >
                          Product List
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/delivery/product/addproduct-product"
                          className="dropdown-item"
                        >
                          Product Add
                        </Link>
                      </li>
                    </ul>
                  </div> */}
                </div>
                <div className="card-body">
                  <div className="table-responsive dataview">
                    <Table
                      className="bg-denger"
                      columns={recentDataColumns}
                      dataSource={recentlyDeliveredOrder}
                      pagination={false}
                      scroll={{
                        y:300
                      }}
                      rowKey={(record)=>record.busyCode}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-0">
            <div className="card-body">
              <h4 className="card-title">On Route Vehicles</h4>
              <div className="table-responsive dataview">
                <Table
                  columns={expiredProductColumns}
                  dataSource={expiredData}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <RightSideBar />
    </>
  );
};

export default Dashboard;
