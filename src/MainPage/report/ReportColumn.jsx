import { Link } from "react-router-dom";
import {EditIcon, DeleteIcon,plusCircle,Eye1} from "../../EntryFile/imagePath";


export const DeliveryDayColumn = (onEditClick, onDeleteClick) => [
  {
    title: "Date",
    dataIndex: "date",
    sorter: (a, b) => a.date.length - b.date.length,
  },
  {
    title: "Assign No.",
    dataIndex: "assignNo",
    sorter: (a, b) => a.assignNo.length - b.assignNo.length,
  },

  {
    title: "Driver Name",
    dataIndex: "driver",
    sorter: (a, b) => a.driver.length - b.driver.length,
  },
  {
    title: "Mobile",
    dataIndex: "mobile",
    sorter: (a, b) => a.mobile.length - b.mobile.length,
  },
  {
    title: "Assign Delivery",
    dataIndex: "shippend",
    sorter: (a, b) => a.shippend.length - b.shippend.length,
  },
  {
    title: "Delivered",
    dataIndex: "deliver",
    sorter: (a, b) => a.deliver.length - b.deliver.length,
  },
  {
    title: "Pending Delivery",
    dataIndex: "pending",
    sorter: (a, b) => a.pending.length - b.pending.length,
  },
  {
    title: "Dispatch Delivery",
    dataIndex: "disp",
    sorter: (a, b) => a.disp.length - b.disp.length,
  },
  {
    title: "Paid",
    dataIndex: "paid",
    sorter: (a, b) => a.paid.length - b.paid.length,
  },
  {
    title: "Cancel Delivery",
    dataIndex: "cancel",
    sorter: (a, b) => a.cancel.length - b.cancel.length,
  },
  {
    title: "Delivery Drop",
    dataIndex: "dDrop",
    sorter: (a, b) => a.dDrop.length - b.dDrop.length,
  },
  // {
  //   title: "Distance",
  //   dataIndex: "distance",
  //   sorter: (a, b) => a.distance.length - b.distance.length,
  // },

  //  {
  //    title: "Action",
  //    render: (text, record) => (
  //      <>
  //        <span className="me-3" onClick={() => onEditClick(record)} style={{cursor:"pointer"}}>
  //          <img src={EditIcon} alt="Edit" />
  //        </span>
  //        <span className="me-3 confirm-text" onClick={() => onDeleteClick(record)} style={{cursor:'pointer'}}>
  //          <img src={DeleteIcon} alt="Delete" />
  //        </span>
  //      </>
  //    ),
  //  },
];
export const DeliveryColumn =[

    // {
    //        title: "Date",
    //        dataIndex: "date",
    //        sorter: (a, b) => a.date.length - b.date.length,
    //      },
         {
           title: "Driver Name",
           dataIndex: "driver",
           sorter: (a, b) => a.driver.length - b.driver.length,
         },
         {
           title: "Mobile No.",
           dataIndex: "mobile",
           sorter: (a, b) => a.mobile.length - b.mobile.length,
         },
         {
           title: "Assigned Delivery",
           dataIndex: "assigned",
           sorter: (a, b) => a.assigned.length - b.assigned.length,
         },
         {
           title: "Out for Delivery",
           dataIndex: "",
           sorter: (a, b) => a.assigned.length - b.assigned.length,
         },
         {
           title: "Delivered",
           dataIndex: "delivered",
           sorter: (a, b) => a.delivered.length - b.delivered.length,
         },
         {
           title: "Failed Delivery",
           dataIndex: "failed",
           sorter: (a, b) => a.failed.length - b.failed.length,
         },
        //  {
        //    title: "Total",
        //    dataIndex: "",
        //    sorter: (a, b) => a.failed.length - b.failed.length,
        //  },
        //  {
        //    title: "Distance",
        //    dataIndex: "distance",
        //    sorter: (a, b) => a.failed.length - b.failed.length,
        //  },
        //  {
        //    title: "Reason for Failed",
        //    dataIndex: "",
        //    sorter: (a, b) => a.failed.length - b.failed.length,
        //  },
        
        //  {
        //    title: "Action",
        //    render: (text, record) => (
        //      <>
        //        <span className="me-3" onClick={() => onEditClick(record)} style={{cursor:"pointer"}}>
        //          <img src={EditIcon} alt="Edit" />
        //        </span>
        //        <span className="me-3 confirm-text" onClick={() => onDeleteClick(record)} style={{cursor:'pointer'}}>
        //          <img src={DeleteIcon} alt="Delete" />
        //        </span>
        //      </>
        //    ),
        //  },
   ]
export const PendingDispColumn =[

    {
           title: "Date",
           dataIndex: "vchDate",
           sorter: (a, b) => a.vchDate.length - b.vchDate.length,
         },
         {
           title: "Party Name",
           dataIndex: "accName",
           sorter: (a, b) => a.accName.length - b.accName.length,
         },
         {
           title: "Invoice No.",
           dataIndex: "vchNo",
           sorter: (a, b) => a.vchNo.length - b.vchNo.length,
         },
         {
           title: "Quantity",
           dataIndex: "qty",
           sorter: (a, b) => a.assigned.length - b.assigned.length,
         },
         {
           title: "Trip Id",
           dataIndex: "bVchNo",
           sorter: (a, b) => a.assigned.length - b.assigned.length,
         },
         {
           title: "Vehicle No",
           dataIndex: "vechicle",
           sorter: (a, b) => a.vechicle.length - b.vechicle.length,
         },
        
   ]
export const PendingDelivery =[

    {
           title: "Date",
           dataIndex: "vchDate",
           sorter: (a, b) => a.vchDate.length - b.vchDate.length,
         },
         {
           title: "Party Name",
           dataIndex: "accName",
           sorter: (a, b) => a.accName.length - b.accName.length,
         },
         {
           title: "Invoice No.",
           dataIndex: "vchNo",
           sorter: (a, b) => a.vchNo.length - b.vchNo.length,
         },
         {
           title: "Quantity",
           dataIndex: "qty",
           sorter: (a, b) => a.qty.length - b.qty.length,
         },
         {
           title: "Dispatch Date",
           dataIndex: "dispDate",
           sorter: (a, b) => a.dispDate.length - b.dispDate.length,
         },
         {
           title: "Status",
           dataIndex: "status",
           sorter: (a, b) => a.status.length - b.status.length,
         },
        
   ]

export const TripColumn =(handleModalShowClick)=>[

    {
           title: "Assign No.",
           dataIndex: "assignNO",
           sorter: (a, b) => a.assignNO.length - b.assignNO.length,
         },
         {
           title: "Trip Date",
           dataIndex: "date",
           sorter: (a, b) => a.date.length - b.date.length,
         },
         {
           title: "Vehicle Name",
           dataIndex: "vechicle",
           sorter: (a, b) => a.vechicle.length - b.vechicle.length,
         },
         {
           title: "Vehicle No.",
           dataIndex: "vechicleModel",
           sorter: (a, b) => a.vechicleModel.length - b.vechicleModel.length,
         },
         {
           title: "Total Qty",
           dataIndex: "qty",
           sorter: (a, b) => a.qty.length - b.qty.length,
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
                  // to="#"
                  // // className="dropdown-item"
                  // className="me-3"
                  // data-bs-toggle="modal"
                  // data-bs-target="#tripDetail"
                  onClick={() => handleModalShowClick(record)}
                >
                  <img src={Eye1} className="me-2" alt="img" />
                  {/* Details */}
                </span>
             </>
           ),
         },     
   ]
export const OrderSummary =[

    {
           title: "Date",
           dataIndex: "date",
           sorter: (a, b) => a.date.length - b.date.length,
         },
         {
           title: "Driver Name",
           dataIndex: "driver",
           sorter: (a, b) => a.driver.length - b.driver.length,
         },
         {
           title: "Mobile Number",
           dataIndex: "mobile",
           sorter: (a, b) => a.mobile.length - b.mobile.length,
         },
         {
          title: "Customer Name",
          dataIndex: "accName",
          sorter: (a, b) => a.accName.length - b.accName.length,
        },     
        {
          title: "Mobile Number",
          dataIndex: "aMobile",
          sorter: (a, b) => a.aMobile.length - b.aMobile.length,
        },  
         {
           title: "Order ID",
           dataIndex: "tripID",
           sorter: (a, b) => a.tripID.length - b.tripID.length,
         },
         {
           title: "Total Amount",
           dataIndex: "amount",
           sorter: (a, b) => a.amount.length - b.amount.length,
         },     
          
        //  {
        //    title: "Address",
        //    dataIndex: "",
        //    sorter: (a, b) => a.assigned.length - b.assigned.length,
        //  },     
        //  {
        //    title: "Status",
        //    dataIndex: "status",
        //    sorter: (a, b) => a.status.length - b.status.length,
        //  },
        {
          title: "Status",
          dataIndex: "status",
          render: (text, record) => (
            <>
              {text === "Pending" && (
                <span className="badges bg-warning">{text}</span>
              )}
              {text === "Dilevered" && (
                <span className="badges bg-info">{text}</span>
              )}
              {text === "Paid" && (
                <span className="badges bg-lightgreen">{text}</span>
              )}
              {text === "Dispatched" && (
                <span className="badges bg-lightgreen">{text}</span>
              )}
              {text === "Cancel" && (
                <span className="badges bg-lightred">{text}</span>
              )}
            </>
          ),
          sorter: (a, b) => a.Status.length - b.Status.length,
        }, 
         {
           title: "Remark",
           dataIndex: "remark",
           sorter: (a, b) => a.remark.length - b.remark.length,
         },     
         {
           title: "Distance",
           dataIndex: "distance",
           sorter: (a, b) => a.distance.length - b.distance.length,
         },     
   ]
export const TripModalColumn = [
  {
    title: "Company Name",
    dataIndex: "compName",
    sorter: (a, b) => a.compName.length - b.compName.length,
  },
  {
    title: "Bill No",
    dataIndex: "vchNo",
    sorter: (a, b) => a.vchNo.length - b.vchNo.length,
  },

  {
    title: "Date",
    dataIndex: "date",
    sorter: (a, b) => a.date.length - b.date.length,
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
  //  {
  //    title: "Address",
  //    dataIndex: "",
  //    sorter: (a, b) => a.assigned.length - b.assigned.length,
  //  },
  {
    title: "Status",
    dataIndex: "status",
    sorter: (a, b) => a.status.length - b.status.length,
  },
];
export const ImgSummaryColumn =(handleImageClick)=> [
  {
    title: "Company Name",
    dataIndex: "compName",
    sorter: (a, b) => a.compName.length - b.compName.length,
  },
  {
    title: "Bill No",
    dataIndex: "billNo",
    sorter: (a, b) => a.billNo.length - b.billNo.length,
  },
  {
    title: "Assign No",
    dataIndex: "assignNo",
    sorter: (a, b) => a.assignNo.length - b.assignNo.length,
  },

  {
    title: "Date",
    dataIndex: "actionDate",
    sorter: (a, b) => a.actionDate.length - b.actionDate.length,
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
    title: 'Dispatch Image',
    dataIndex: 'dispImg',
    key: 'image',
    render: dispImg => <img src={dispImg} alt="" style={{ width: 50, height: 50 }} className="enlarge-hover" onClick={() => handleImageClick(dispImg, "Dispatch Image")}/>,
  },
  {
    title: 'Delivered Image',
    dataIndex: 'delImg',
    key: 'image',
    render: (delImg,record) => <img src={delImg} alt="" style={{ width: 50, height: 50 }} className="enlarge-hover" onClick={() => handleImageClick(delImg,"Delivered Image")}/>,
  },
  {
    title: 'Cancel Image',
    dataIndex: 'cancelImg',
    key: 'image',
    render: cancelImg => <img src={cancelImg} alt="" style={{ width: 50, height: 50 }} className="enlarge-hover" onClick={() => handleImageClick(cancelImg, 'Cancel Image')}/>,
  },
  {
    title: 'Paid Image',
    dataIndex: 'paidImg',
    key: 'image',
    render: paidImg => <img src={paidImg} alt="" style={{ width: 50, height: 50 }} className="enlarge-hover" onClick={() => handleImageClick(paidImg, "Paid Image")}/>,
  },
  {
    title: 'Drop Image',
    dataIndex: 'dropImg',
    key: 'image',
    render: dropImg => <img src={dropImg} alt="" style={{ width: 50, height: 50 }} className="enlarge-hover" onClick={() => handleImageClick(dropImg, 'Drop Image')}/>,
  },
  //  {
  //    title: "Address",
  //    dataIndex: "",
  //    sorter: (a, b) => a.assigned.length - b.assigned.length,
  //  },
 
];

export const vehicleStatusColumn = [
  {
    title: "Date",
    dataIndex: "date",
    sorter: (a, b) => a.date.length - b.date.length,
  },
  {
    title: "Assign Number",
    dataIndex: "assignNo",
    sorter: (a, b) => a.assignNo.length - b.assignNo.length,
  },
  {
    title: "Driver Name",
    dataIndex: "driver",
    sorter: (a, b) => a.driver.length - b.driver.length,
  },
  {
    title: "Vehicle Number",
    dataIndex: "vechicle",
    sorter: (a, b) => a.vechicle.length - b.vechicle.length,
  },

 

];