/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Table from "../../EntryFile/datatable";
// import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import InvoicePage from "./InvoicePage";
import useFetch from "../../Hooks/useFetch";
import { convertDate2 } from "../ReuseFunctions/ReuseFunction";


const Sales = () => {
  let api = useFetch()
  const [tableData, setTableData] = useState([]);
  const [driverList, setDriverlist] = useState([]);
  const [compList, setCompList] = useState([]);
  const [loading, setLoading] = useState(false)
  const [values, setValues] = useState({});
const [initialValue, setInitialValue] = useState(0);
const [selectedCompany, setSelectedCompany] = useState(null);
const [dates, setDates] = useState({
  fDate: new Date(),
  tDate: new Date()
});

// ==================================DateHandler==================================
const handleDateChange = (dateFieldName, dateValue) => {
  setDates({
    ...dates,
    [dateFieldName]: dateValue,
  });
};

// ============================Company-Handler================================
const SelectCompanyHandler=(select)=>{
  setSelectedCompany(select)
}

const handleValueChange = (id, newValue) => {
  setValues((prevValues) => ({
    ...prevValues,
    [id]: newValue,
  }));
};
 // =========================Company-list===============================
 const getCompanyList = async () => {
  let corrData = [];
  let url = `/api/GetCompany`;
  try {
    setLoading(true);
    let { res, got } = await api(url, "GET", "");
    if (res.status == 200) {
      console.log("companyList======", got.data);
      let list = got.data;
      list.map((item) => {
        corrData.push({
          label: item.compName,
          value: item.compCode,
          fy: item.fy,
        });
      });
      setCompList(corrData);
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

 // =========================Invoice-table===============================
 console.log('selected', selectedCompany)
 const getSaleInvoiceList = async () => {
  if (selectedCompany !== null){
    var company = selectedCompany.value 
    var Fy = selectedCompany.fy 
  }
  if(values.assign !== 0){

    var fdate = convertDate2(dates.fDate)||''
    var tdate = convertDate2(dates.tDate)||''
  }
  var status = values.assign||0
  let url = `/api/GetSaleVoucher?Status=${status||0}&CompCode=${company}&Fy=${Fy}&SDate=${fdate}&TDate=${tdate}`;
  console.log('url', url)
  try {
    setLoading(true);
    let { res, got } = await api(url, "GET", "");
    if (res.status == 200) {
      console.log("setTableData", got);
      let list = got.data;
      setTableData(list);
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

 
  const columns = [
    {
      title: "Company Name",
      dataIndex: "compName",
      sorter: (a, b) => a.compName.length - b.compName.length,
    },
    {
      title: "Invoice number",
      dataIndex: "billNo",
      sorter: (a, b) => a.billNo.length - b.billNo.length,
    },
    {
      title: "Customer name",
      dataIndex: "partyName",
      sorter: (a, b) => a.partyName.length - b.partyName.length,
    },
    {
      title: "Date",
      dataIndex: "date",
      sorter: (a, b) => a.Brand.length - b.Brand.length,
    },
    {
      title: "Quantity",
      dataIndex: "qty",
      sorter: (a, b) => a.qty - b.qty,
    },
    {
      title: "Amount",
      dataIndex: "amount",
      sorter: (a, b) => a.amount - b.amount,
    },
    // {
    //   title: "Paid",
    //   dataIndex: "Paid",
    //   sorter: (a, b) => a.Unit.length - b.Unit.length,
    // },
    // {
    //   title: "Amount due",
    //   dataIndex: "due",
    //   sorter: (a, b) => a.Instock.length - b.Instock.length,
    // },
    // {
    //   title: "Status",
    //   dataIndex: "Status",
    //   render: (text, record) => (
    //     <>
    //       {text === "Paid" && (
    //         <span className="badges bg-lightgreen">{text}</span>
    //       )}
    //       {text === "Unpaid" && (
    //         <span className="badges bg-lightgrey">{text}</span>
    //       )}
    //       {text === "Overdue" && (
    //         <span className="badges bg-lightred">{text}</span>
    //       )}
    //     </>
    //   ),
    //   sorter: (a, b) => a.Name.length - b.Name.length,
    // },
  ];

  React.useEffect(()=>{
    getSaleInvoiceList()
    // getCompanyList()
  },[values])

  return (
    <React.Fragment>
        <InvoicePage
         columns={columns}
         data={tableData}
         loading={loading}
         handleValueChange={handleValueChange}
         values={values}
         initialValue={initialValue}
         handleDateChange={handleDateChange}
         compList={compList}
         dates={dates}
         selectedCompany={selectedCompany}
         SelectCompanyHandler={SelectCompanyHandler}
         getSaleInvoiceList={getSaleInvoiceList}
        />
    </React.Fragment>
  );
};

export default Sales;
