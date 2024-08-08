// import { Table } from 'antd';
import { Link } from "react-router-dom";
import {EditIcon, DeleteIcon} from "../../EntryFile/imagePath";

const MyColumns = (onEditClick, onDeleteClick) => [
    {
        title: "User Name",
        dataIndex: "name",
        render: (text, record) => (
          <div className="productimgname">
            <Link to="#" className="product-img">
              <img alt="" src={record.imgPath} />
            </Link>
            <Link to="#" style={{ fontSize: "15px", marginLeft: "10px" }}>
              {record.name}
            </Link>
          </div>
        ),
        sorter: (a, b) => a.name.length - b.name.length,
      },
      {
        title: "Mobile Number",
        dataIndex: "mobile",
        sorter: (a, b) => a.mobile.length - b.mobile.length,
      },
      {
        title: "Email Id",
        dataIndex: "email",
        sorter: (a, b) => a.email.length - b.email.length,
      },
      {
        title: "Transport Name",
        dataIndex: "transportName",
        sorter: (a, b) => a.transportName.length - b.transportName.length,
      },
      {
        title: "Vehicle Type",
        dataIndex: "vechicleType",
        sorter: (a, b) => a.vechicleType.length - b.vechicleType.length,
      },
      {
        title: "Vehicle Modal",
        dataIndex: "vechicleModel",
        sorter: (a, b) => a.vechicleModel.length - b.vechicleModel.length,
      },
      // {
      //   title: "Status",
      //   dataIndex: "Status",
      //   render: (text) => (
      //       // console.log(record)
      //     <>
      //       {text === "Active" && (
      //         <span className="badges bg-lightgreen">{text}</span>
      //       )}
      //       {text === "Restricted" && (
      //         <span className="badges bg-lightred">{text}</span>
      //       )}
      //     </>
      //   ),
      //   sorter: (a, b) => a.Status.length - b.Status.length,
      // },
      {
        title: "Action",
        render: (text, record) => (
          <>
            <span className="me-3" onClick={() => onEditClick(record)} style={{cursor:'pointer'}}>
              <img src={EditIcon} alt="Edit" />
            </span>
            <span className="me-3 confirm-text" onClick={() => onDeleteClick(record)} style={{cursor:'pointer'}}>
              <img src={DeleteIcon} alt="Delete" />
            </span>
          </>
        ),
      },
]

export default MyColumns


export const TransportColumn =(onEditClick, onDeleteClick)=>[
  {
    title: "Transporter Name",
    dataIndex: "name",
    render: (text, record) => (
      <div className="productimgname">
        <Link to="#" className="product-img">
          <img alt="" src={record.imgPath} />
        </Link>
        <Link to="#" style={{ fontSize: "15px", marginLeft: "10px" }}>
          {record.name}
        </Link>
      </div>
    ),
    sorter: (a, b) => a.name.length - b.name.length,
  },

//  {
//         title: "Transporter Name",
//         dataIndex: "name",
//         sorter: (a, b) => a.name.length - b.name.length,
//       },
      {
        title: "Mobile Number",
        dataIndex: "mobile",
        sorter: (a, b) => a.mobile.length - b.mobile.length,
      },
      {
        title: "Email Id",
        dataIndex: "email",
        sorter: (a, b) => a.email.length - b.email.length,
      },
      {
        title: "Address",
        dataIndex: "address",
        sorter: (a, b) => a.address.length - b.address.length,
      },
     
      {
        title: "Action",
        render: (text, record) => (
          <>
            <span className="me-3" onClick={() => onEditClick(record)} style={{cursor:"pointer"}}>
              <img src={EditIcon} alt="Edit" />
            </span>
            <span className="me-3 confirm-text" onClick={() => onDeleteClick(record)} style={{cursor:'pointer'}}>
              <img src={DeleteIcon} alt="Delete" />
            </span>
          </>
        ),
      },
]

export const VehicleColumn =(onEditClick, onDeleteClick)=>[

 {
        title: "Vehicle Name",
        dataIndex: "name",
        render: (text, record) => (
          <div className="productimgname">
            <Link to="#" className="product-img">
              <img alt="" src={record.imgPath} />
            </Link>
            <Link to="#" style={{ fontSize: "15px", marginLeft: "10px" }}>
              {record.name}
            </Link>
          </div>
        ),
        sorter: (a, b) => a.name.length - b.name.length,
      },
      {
        title: "Vehicle Modal",
        dataIndex: "vechicleModel",
        sorter: (a, b) => a.vechicleModel.length - b.vechicleModel.length,
      },
      {
        title: "Vehicle Type",
        dataIndex: "vechicleType",
        sorter: (a, b) => a.vechicleType.length - b.vechicleType.length,
      },
      {
        title: "Transport",
        dataIndex: "transportName",
        sorter: (a, b) => a.transportName.length - b.transportName.length,
      },
     
      {
        title: "Action",
        render: (text, record) => (
          <>
            <span className="me-3" onClick={() => onEditClick(record)} style={{cursor:'pointer'}}>
              <img src={EditIcon} alt="Edit" />
            </span>
            <span className="me-3 confirm-text" onClick={() => onDeleteClick(record)} style={{cursor:'pointer'}}>
              <img src={DeleteIcon} alt="Delete" />
            </span>
          </>
        ),
      },
]

 