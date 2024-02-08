import React from "react";
import {
  menu_icon,
  menu_icon01,
  menu_icon02,
  menu_icon04,
  menu_icon05,
  menu_icon06,
} from "../../../../EntryFile/imagePath";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const SideBarFoure = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [menu6, setMenu6] = useState(false);
  const [menu7, setMenu7] = useState(false);
  const [menu8, setMenu8] = useState(false);
  const [menu9, setMenu9] = useState(false);
  const [menu10, setMenu10] = useState(false);
  const [menu11, setMenu11] = useState(false);
  const [menu12, setMenu12] = useState(false);
  const [menu13, setMenu13] = useState(false);
  const [menu14, setMenu14] = useState(false);
  const [menu15, setMenu15] = useState(false);
  const [menu16, setMenu16] = useState(false);
  const [menu17, setMenu17] = useState(false);
  const [menu18, setMenu18] = useState(false);
  const [menu19, setMenu19] = useState(false);
  const [menu20, setMenu20] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    if (isHovered) {
      document.body.classList.remove("expand-menu");
    } else {
      document.body.classList.remove("expand-menu");
    }

    return () => {
      document.body.classList.remove("expand-menu");
    };
  }, [isHovered]);
  return (
    <>
      {/* Sidebar */}
      <div
        className="sidebar sidebar-four"
        id="sidebar"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="sidebar-inner slimscroll">
          <div id="sidebar-menu" className="sidebar-menu sidebar-menu-three">
            <aside id="aside" className="ui-aside">
              <ul className="tab nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <Link
                    className="tablinks nav-link active"
                    to="#home"
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#home"
                    role="tab"
                    aria-controls="home"
                  >
                    <img src={menu_icon} alt="" />
                  </Link>
                </li>
                <li className="nav-item" role="presentation">
                  <Link
                    className="tablinks nav-link"
                    id="messages-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#messages"
                    role="tab"
                    aria-controls="messages"
                  >
                    <img src={menu_icon01} alt="" />
                  </Link>
                </li>
                <li className="nav-item" role="presentation">
                  <Link
                    className="tablinks nav-link"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile"
                    role="tab"
                    aria-controls="profile"
                  >
                    <img src={menu_icon02} alt="" />
                  </Link>
                </li>
                <li className="nav-item" role="presentation">
                  <Link
                    className="tablinks nav-link"
                    id="apps-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#apps"
                    role="tab"
                    aria-controls="apps"
                  >
                    <img src={menu_icon04} alt="" />
                  </Link>
                </li>
                <li className="nav-item" role="presentation">
                  <Link
                    className="tablinks nav-link"
                    to="#report"
                    id="report-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#report"
                    role="tab"
                    aria-controls="report"
                  >
                    <img src={menu_icon05} alt="" />
                  </Link>
                </li>
                <li className="nav-item" role="presentation">
                  <Link
                    className="tablinks nav-link"
                    to="#set"
                    id="set-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#set"
                    role="tab"
                    aria-controls="set"
                  >
                    <img src={menu_icon06} alt="" />
                  </Link>
                </li>
              </ul>
            </aside>
            <div className="tab-content tab-content-four pt-2">
              <ul
                className="tab-pane active"
                id="home"
                aria-labelledby="home-tab"
              >
                <li>
                  <Link to="/delivery/dashboard">
                    <span> Dashboard</span>{" "}
                  </Link>
                </li>
                <li className="submenu">
                  <Link
                    to="#"
                    className={`${menu6 === true ? "subdrop" : ""}`}
                    onClick={() => {
                      setMenu6(!menu6);
                    }}
                  >
                    <span> Product</span> <span className="menu-arrow" />
                  </Link>
                  <ul className={`${menu6 === true ? "d-block" : ""}`}>
                    <li>
                      <Link to="/delivery/product/productlist-product">
                        Product List
                      </Link>
                    </li>
                    <li>
                      <Link to="/delivery/product/addproduct-product">
                        Add Product
                      </Link>
                    </li>
                    <li>
                      <Link to="/delivery/product/categorylist-product">
                        Category List
                      </Link>
                    </li>
                    <li>
                      <Link to="/delivery/product/addcategory-product">
                        Add Category
                      </Link>
                    </li>
                    <li>
                      <Link to="/delivery/product/subcategorytable-product">
                        Sub Category List
                      </Link>
                    </li>
                    <li>
                      <Link to="/delivery/product/addsubcategory-product">
                        Add Sub Category
                      </Link>
                    </li>
                    <li>
                      <Link to="/delivery/product/brandlist-product">
                        Brand List
                      </Link>
                    </li>
                    <li>
                      <Link to="/delivery/product/addbrand-product">
                        Add Brand
                      </Link>
                    </li>
                    <li>
                      <Link to="/delivery/product/importproduct-product">
                        Import Products
                      </Link>
                    </li>
                    <li>
                      <Link to="/delivery/product/printbarcode-product">
                        Print Barcode
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link
                    to="#"
                    className={`${menu7 === true ? "subdrop" : ""}`}
                    onClick={() => {
                      setMenu7(!menu7);
                    }}
                  >
                    <span> Sales</span> <span className="menu-arrow" />
                  </Link>
                  <ul className={`${menu7 === true ? "d-block" : ""}`}>
                    <li>
                      <Link to="/delivery/sales/saleslist">Sales List</Link>
                    </li>
                    <li>
                      <Link to="/pos">POS</Link>
                    </li>
                    <li>
                      <Link to="/pos">New Sales</Link>
                    </li>
                    <li>
                      <Link to="/delivery/return/salesreturnlist-return">
                        Sales Return List
                      </Link>
                    </li>
                    <li>
                      <Link to="/delivery/return/addsalesreturn-return">
                        New Sales Return
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link
                    to="#"
                    className={`${menu8 === true ? "d-block" : ""}`}
                    onClick={() => {
                      setMenu8(!menu8);
                    }}
                  >
                    <span> Purchase</span> <span className="menu-arrow" />
                  </Link>
                  <ul className={`${menu8 === true ? "d-block" : ""}`}>
                    <li>
                      <Link to="/delivery/purchase/purchaselist-purchase">
                        Purchase List
                      </Link>
                    </li>
                    <li>
                      <Link to="/delivery/purchase/addpurchase-purchase">
                        Add Purchase
                      </Link>
                    </li>
                    <li>
                      <Link to="/delivery/purchase/importpurchase-purchase">
                        Import Purchase
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link
                    to="#"
                    className={`${menu9 === true ? "d-block" : ""}`}
                    onClick={() => {
                      setMenu9(!menu9);
                    }}
                  >
                    <span> Expense</span> <span className="menu-arrow" />
                  </Link>
                  <ul className={`${menu9 === true ? "d-block" : ""}`}>
                    <li>
                      <Link to="/delivery/expense/expenselist-expense">
                        Expense List
                      </Link>
                    </li>
                    <li>
                      <Link to="/delivery/expense/addexpense-expense">
                        Add Expense
                      </Link>
                    </li>
                    <li>
                      <Link to="/delivery/expense/expensecategory-expense">
                        Expense Category
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link
                    to="#"
                    className={`${menu10 === true ? "d-block" : ""}`}
                    onClick={() => {
                      setMenu10(!menu10);
                    }}
                  >
                    <span> Quotation</span> <span className="menu-arrow" />
                  </Link>
                  <ul className={`${menu10 === true ? "d-block" : ""}`}>
                    <li>
                      <Link to="/delivery/quotation/quotationlist-quotation">
                        Quotation List
                      </Link>
                    </li>
                    <li>
                      <Link to="/delivery/quotation/addquotation-quotation">
                        Add Quotation
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link
                    to="#"
                    className={`${menu11 === true ? "d-block" : ""}`}
                    onClick={() => {
                      setMenu11(!menu11);
                    }}
                  >
                    <span> Transfer</span> <span className="menu-arrow" />
                  </Link>
                  <ul className={`${menu11 === true ? "d-block" : ""}`}>
                    <li>
                      <Link to="/delivery/transfer/transferlist-transfer">
                        Transfer List
                      </Link>
                    </li>
                    <li>
                      <Link to="/delivery/transfer/addtransfer-transfer">
                        Add Transfer{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="/delivery/transfer/importtransfer-transfer">
                        Import Transfer{" "}
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link
                    to="#"
                    className={`${menu12 === true ? "d-block" : ""}`}
                    onClick={() => {
                      setMenu12(!menu12);
                    }}
                  >
                    <span> Return</span> <span className="menu-arrow" />
                  </Link>
                  <ul className={`${menu12 === true ? "d-block" : ""}`}>
                    <li>
                      <Link to="/delivery/return/salesreturnlist-return">
                        Sales Return List
                      </Link>
                    </li>
                    <li>
                      <Link to="/delivery/return/addsalesreturn-return">
                        Add Sales Return{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="/delivery/return/purchasereturnlist-return">
                        Purchase Return List
                      </Link>
                    </li>
                    <li>
                      <Link to="/delivery/return/addpurchasereturn-return">
                        Add Purchase Return{" "}
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link
                    to="#"
                    className={`${menu13 === true ? "d-block" : ""}`}
                    onClick={() => {
                      setMenu13(!menu13);
                    }}
                  >
                    <span> People</span> <span className="menu-arrow" />
                  </Link>
                  <ul className={`${menu13 === true ? "d-block" : ""}`}>
                    <li>
                      <Link to="/delivery/people/customerlist-people">
                        Customer List
                      </Link>
                    </li>
                    <li>
                      <Link to="/delivery/people/addcustomer-people">
                        Add Customer
                      </Link>
                    </li>
                    <li>
                      <Link to="/delivery/people/supplierlist-people">
                        Supplier List
                      </Link>
                    </li>
                    <li>
                      <Link to="/delivery/people/addsupplier-people">
                        Add Supplier{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="/delivery/people/userlist-people">
                        User List
                      </Link>
                    </li>
                    <li>
                      <Link to="/delivery/people/adduser-people">
                        Add User
                      </Link>
                    </li>
                    <li>
                      <Link to="/delivery/people/storelist-people">
                        Store List
                      </Link>
                    </li>
                    <li>
                      <Link to="/delivery/people/addstore-people">
                        Add Store
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link
                    to="#"
                    className={`${menu14 === true ? "d-block" : ""}`}
                    onClick={() => {
                      setMenu14(!menu14);
                    }}
                  >
                    <span> Places</span> <span className="menu-arrow" />
                  </Link>
                  <ul className={`${menu14 === true ? "d-block" : ""}`}>
                    <li>
                      <Link to="/delivery/places/newcountry-places">
                        New Country
                      </Link>
                    </li>
                    <li>
                      <Link to="/delivery/places/countrylist-places">
                        Countries list
                      </Link>
                    </li>
                    <li>
                      <Link to="/delivery/places/newstate-places">
                        New State{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="/delivery/places/statelist-places">
                        State list
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul
                className="tab-pane"
                id="messages"
                aria-labelledby="messages-tab"
              >
                <li>
                  <Link to="/delivery/users/newuser">New User </Link>
                </li>
                <li>
                  <Link to="/delivery/users/userlists">Users List</Link>
                </li>
              </ul>
              <ul
                className="tab-pane"
                id="profile"
                aria-labelledby="profile-tab"
              >
                <li>
                  <Link to="/delivery/components">
                    <span> Components</span>{" "}
                  </Link>
                </li>
                <li className="submenu">
                  <Link
                    to="#"
                    className={`${menu15 === true ? "d-block" : ""}`}
                    onClick={() => {
                      setMenu15(!menu15);
                    }}
                  >
                    <span>Elements</span> <span className="menu-arrow" />
                  </Link>
                  <ul className={`${menu15 === true ? "d-block" : ""}`}>
                    <li>
                      <Link to="/delivery/elements/sweetalerts">
                        Sweet Alerts
                      </Link>
                    </li>
                    <li>
                      <Link to="/delivery/elements/tooltip">Tooltip</Link>
                    </li>
                    <li>
                      <Link to="/delivery/elements/popover">Popover</Link>
                    </li>
                    <li>
                      <Link to="/delivery/elements/ribbon">Ribbon</Link>
                    </li>
                    <li>
                      <Link to="/delivery/elements/clipboard">Clipboard</Link>
                    </li>
                    <li>
                      <Link to="/delivery/elements/drag-drop">
                        Drag &amp; Drop
                      </Link>
                    </li>
                    <li>
                      <Link to="/delivery/elements/rangeslider">
                        Range Slider
                      </Link>
                    </li>
                    <li>
                      <Link to="/delivery/elements/rating">Rating</Link>
                    </li>
                    <li>
                      <Link to="/delivery/elements/toastr">Toastr</Link>
                    </li>
                    <li>
                      <Link to="/delivery/elements/text-editor">
                        Text Editor
                      </Link>
                    </li>
                    <li>
                      <Link to="/delivery/elements/counter">Counter</Link>
                    </li>
                    <li>
                      <Link to="/delivery/elements/scrollbar">Scrollbar</Link>
                    </li>
                    <li>
                      <Link to="/delivery/elements/spinner">Spinner</Link>
                    </li>
                    <li>
                      <Link to="/delivery/elements/notification">
                        Notification
                      </Link>
                    </li>
                    <li>
                      <Link to="/delivery/elements/lightbox">Lightbox</Link>
                    </li>
                    <li>
                      <Link to="/delivery/elements/stickynote">
                        Sticky Note
                      </Link>
                    </li>
                    <li>
                      <Link to="/delivery/elements/timeline">Timeline</Link>
                    </li>
                    <li>
                      <Link to="/delivery/elements/form-wizard">
                        Form Wizard
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link
                    to="#"
                    className={`${menu16 === true ? "d-block" : ""}`}
                    onClick={() => {
                      setMenu16(!menu16);
                    }}
                  >
                    <span>Charts</span> <span className="menu-arrow" />
                  </Link>
                  <ul className={`${menu16 === true ? "d-block" : ""}`}>
                    <li>
                      <Link to="/delivery/charts/chart-apex">Apex Charts</Link>
                    </li>
                    <li>
                      <Link to="/delivery/charts/chart-js">Chart Js</Link>
                    </li>
                    <li>
                      <Link to="/delivery/charts/chart-morris">
                        Morris Charts
                      </Link>
                    </li>
                    <li>
                      <Link to="/delivery/charts/chart-flot">Flot Charts</Link>
                    </li>
                    <li>
                      <Link to="/delivery/charts/chart-peity">
                        Peity Charts
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link
                    to="#"
                    className={`${menu17 === true ? "d-block" : ""}`}
                    onClick={() => {
                      setMenu17(!menu17);
                    }}
                  >
                    <span> Icons </span> <span className="menu-arrow" />
                  </Link>
                  <ul className={`${menu17 === true ? "d-block" : ""}`}>
                    <li>
                      <Link to="/delivery/icons/icon-fontawesome">
                        Fontawesome Icons
                      </Link>
                    </li>
                    <li>
                      <Link to="/delivery/icons/icon-feather">
                        Feather Icons
                      </Link>
                    </li>
                    <li>
                      <Link to="/delivery/icons/icon-ionic">Ionic Icons</Link>
                    </li>
                    <li>
                      <Link to="/delivery/icons/icon-material">
                        Material Icons
                      </Link>
                    </li>
                    <li>
                      <Link to="/delivery/icons/icon-pe7">Pe7 Icons</Link>
                    </li>
                    <li>
                      <Link to="/delivery/icons/icon-simpleline">
                        Simpleline Icons
                      </Link>
                    </li>
                    <li>
                      <Link to="/delivery/icons/icon-themify">
                        Themify Icons
                      </Link>
                    </li>
                    <li>
                      <Link to="/delivery/icons/icon-weather">
                        Weather Icons
                      </Link>
                    </li>
                    <li>
                      <Link to="/delivery/icons/icon-typicon">
                        Typicon Icons
                      </Link>
                    </li>
                    <li>
                      <Link to="/delivery/icons/icon-flag">Flag Icons</Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link
                    to="#"
                    className={`${menu18 === true ? "d-block" : ""}`}
                    onClick={() => {
                      setMenu18(!menu18);
                    }}
                  >
                    {" "}
                    <span>Forms</span> <span className="menu-arrow" />
                  </Link>
                  <ul className={`${menu18 === true ? "d-block" : ""}`}>
                    <li>
                      <Link to="/delivery/forms/form-basic-inputs">
                        Basic Inputs{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="/delivery/forms/form-input-groups">
                        Input Groups{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="/delivery/forms/form-horizontal">
                        Horizontal Form{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="/delivery/forms/form-vertical">
                        {" "}
                        Vertical Form{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="/delivery/forms/form-mask">Form Mask </Link>
                    </li>
                    <li>
                      <Link to="/delivery/forms/form-validation">
                        Form Validation{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="/delivery/forms/form-select">
                        Form Select2{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="/delivery/forms/form-fileupload">
                        File Upload{" "}
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link
                    to="#"
                    className={`${menu19 === true ? "d-block" : ""}`}
                    onClick={() => {
                      setMenu19(!menu19);
                    }}
                  >
                    {" "}
                    <span>Table</span> <span className="menu-arrow" />
                  </Link>
                  <ul className={`${menu19 === true ? "d-block" : ""}`}>
                    <li>
                      <Link to="/delivery/table/tables-basic">
                        Basic Tables{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="/delivery/table/data-tables">Data Table </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/delivery/blankpage">
                    <span>
                      {" "}
                      Blank Page<span> </span>
                    </span>
                  </Link>
                </li>
                <li className="submenu">
                  <Link
                    to="#"
                    className={`${menu20 === true ? "d-block" : ""}`}
                    onClick={() => {
                      setMenu20(!menu20);
                    }}
                  >
                    <span> Error Pages</span> <span className="menu-arrow" />
                  </Link>
                  <ul className={`${menu20 === true ? "d-block" : ""}`}>
                    <li>
                      <Link to="/error-404">404 Error </Link>
                    </li>
                    <li>
                      <Link to="/error-500">500 Error </Link>
                    </li>
                  </ul>
                </li>
              </ul>
         
              <ul className="tab-pane" id="report" aria-labelledby="report-tab">
                <li>
                  <Link to="/delivery/report/purchaseorderreport">
                    Purchase order report
                  </Link>
                </li>
                <li>
                  <Link to="/delivery/report/inventoryreport">
                    Inventory Report
                  </Link>
                </li>
                <li>
                  <Link to="/delivery/report/salesreport">Sales Report</Link>
                </li>
                <li>
                  <Link to="/delivery/report/invoicereport">
                    Invoice Report
                  </Link>
                </li>
                <li>
                  <Link to="/delivery/report/purchasereport">
                    Purchase Report
                  </Link>
                </li>
                <li>
                  <Link to="/delivery/report/supplierreport">
                    Supplier Report
                  </Link>
                </li>
                <li>
                  <Link to="/delivery/report/customerreport">
                    Customer Report
                  </Link>
                </li>
              </ul>
              <ul className="tab-pane" id="set" aria-labelledby="set-tab">
                <li>
                  <Link to="/delivery/settings/generalsettings">
                    General Settings
                  </Link>
                </li>
                <li>
                  <Link to="/delivery/settings/emailsettings">
                    Email Settings
                  </Link>
                </li>
                <li>
                  <Link to="/delivery/settings/paymentsettings">
                    Payment Settings
                  </Link>
                </li>
                <li>
                  <Link to="/delivery/settings/currencysettings">
                    Currency Settings
                  </Link>
                </li>
                <li>
                  <Link to="/delivery/settings/grouppermissions">
                    Group Permissions
                  </Link>
                </li>
                <li>
                  <Link to="/delivery/settings/taxrates">Tax Rates</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* /Sidebar */}
    </>
  );
};
export default SideBarFoure;
