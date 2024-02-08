import {EditIcon, DeleteIcon} from "../../EntryFile/imagePath";

export const DeliveryDayColumn =(onEditClick, onDeleteClick)=>[

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
          dataIndex: "assigned",
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
         {
          title: "Distance",
          dataIndex: "distance",
          sorter: (a, b) => a.distance.length - b.distance.length,
        },
         {
           title: "Date",
           dataIndex: "date",
           sorter: (a, b) => a.date.length - b.date.length,
         },
         
        
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
export const DeliveryColumn =[

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
         {
           title: "Total",
           dataIndex: "",
           sorter: (a, b) => a.failed.length - b.failed.length,
         },
         {
           title: "Distance",
           dataIndex: "distance",
           sorter: (a, b) => a.failed.length - b.failed.length,
         },
         {
           title: "Reason for Failed",
           dataIndex: "",
           sorter: (a, b) => a.failed.length - b.failed.length,
         },
        
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
           dataIndex: "tripId",
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

export const TripColumn =[

    {
           title: "Trip Id",
           dataIndex: "tripID",
           sorter: (a, b) => a.tripID.length - b.tripID.length,
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
           title: "Order",
           dataIndex: "assigned",
           sorter: (a, b) => a.assigned.length - b.assigned.length,
         },
         {
           title: "Total Amount",
           dataIndex: "amount",
           sorter: (a, b) => a.amount.length - b.amount.length,
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