// import { Table } from 'antd';
import {EditIcon, DeleteIcon} from "../../EntryFile/imagePath";

const UsersColumn = (onEditClick, onDeleteClick) => [
      {
      title: "UserName",
      dataIndex: "userName",
      sorter: (a, b) => a.userName.length - b.userName.length,
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
      title: "Role",
      dataIndex: "roleName",
      sorter: (a, b) => a.roleName.length - b.roleName.length,
    },
    // {
    //   title: "Created On",
    //   dataIndex: "On",
    //   sorter: (a, b) => a.On.length - b.On.length,
    // },
    // {
    //   title: "Status",
    //   dataIndex: "deactivate",
    //   render: (text, record) => (
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

export default UsersColumn;