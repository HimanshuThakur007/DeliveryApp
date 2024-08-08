
/* eslint-disable no-constant-condition */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars";
import FeatherIcon from "feather-icons-react";
import { MdOutlinePinDrop } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineAssignmentTurnedIn } from "react-icons/md";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { SiPivotaltracker } from "react-icons/si";

const Sidebar = () => {
  const [isSideMenu, setSideMenu] = useState("");
  // const [path, setPath] = useState("");
  const navigate = useNavigate();

  const toggleSidebar = (value) => {
    setSideMenu(value);
  };

  const expandMenu = () => {
    document.body.classList.remove("expand-menu");
  };

  const expandMenuOpen = () => {
    document.body.classList.add("expand-menu");
  };

  const pageRefresh = (url, page) => {
    navigate(`/delivery/${url}/${page}`, { replace: true });
    window.location.reload();
  };

  const location = useLocation();
  let pathname = location.pathname;

  useEffect(() => {
    document.querySelector(".main-wrapper").classList.remove("slide-nav");
    document.querySelector(".sidebar-overlay").classList.remove("opened");
    document.querySelector(".sidebar-overlay").onclick = function () {
      this.classList.remove("opened");
      document.querySelector(".main-wrapper").classList.remove("slide-nav");
    };
  }, [pathname]);

  const exclusionArray = [
    "/reactjs/template/delivery/index-three",
    "/reactjs/template/delivery/index-four",
    "/reactjs/template/delivery/index-two",
    "/reactjs/template/delivery/index-one",
  ];

  if (exclusionArray.indexOf(window.location.pathname) >= 0) {
    return "";
  }
  return (
    <>
      <div className={`sidebar index-4 ${pathname.includes("/index-three")?"d-none":""}`} id="sidebar">
        <Scrollbars>
          <div className="slimScrollDiv">
          <div className="sidebar-inner slimscroll">
            <div
              id="sidebar-menu"
              className="sidebar-menu"
              onMouseOver={expandMenuOpen}
              onMouseLeave={expandMenu}
            >
              <ul>
                <li className="submenu-open">
                  <h6 className="submenu-hdr">Main</h6>
                  <ul>
                    <li
                      className={pathname.includes("dashboard") ? "active" : ""}
                    >
                      <Link to="/delivery/dashboard">
                        {/* <i data-feather="grid" /> */}
                        <FeatherIcon icon="grid" />
                        <span>Dashboard</span>
                      </Link>
                    </li>
                  
                  </ul>
                </li>
                <li className="submenu-open">
                  <h6 className="submenu-hdr">User Management</h6>
                  <ul>
                    <li className="submenu">
                      <Link
                        to="#"
                        className={
                          pathname.includes("/delivery/users")
                            ? "subdrop active"
                            : "" || isSideMenu == "Users"
                            ? "subdrop active"
                            : ""
                        }
                        onClick={() =>
                          toggleSidebar(isSideMenu == "Users" ? "" : "Users")
                        }
                      >
                        <FeatherIcon icon="users" />
                        <span>Manage Users</span>{" "}
                        <span className="menu-arrow" />
                      </Link>
                      {isSideMenu == "Users" ? (
                        <ul>
                          <li>
                            <Link
                              to="/delivery/users/newuser"
                              className={
                                pathname.includes("newuser") ? "active" : ""
                              }
                            >
                              New User{" "}
                            </Link>
                          </li>
                       
                          <li>
                            <Link
                              to="/delivery/users/userlists"
                              className={
                                pathname.includes("userlists") ? "active" : ""
                              }
                            >
                              Users List
                            </Link>
                          </li>
                        </ul>
                      ) : (
                        ""
                      )}
                    </li>
                  </ul>
                </li>
                <li className="submenu-open">
                  <h6 className="submenu-hdr">Driver Management</h6>
                  <ul>
                    <li className="submenu">
                      <Link
                        to="#"
                        className={
                          pathname.includes("/delivery/drivers")
                            ? "subdrop active"
                            : "" || isSideMenu == "Drivers"
                            ? "subdrop active"
                            : ""
                        }
                        onClick={() =>
                          toggleSidebar(isSideMenu == "Drivers" ? "" : "Drivers")
                        }
                      >
                        <FeatherIcon icon="users" />
                        <span>Manage Drivers</span>{" "}
                        <span className="menu-arrow" />
                      </Link>
                      {isSideMenu == "Drivers" ? (
                        <ul>
                          <li>
                            <Link
                              to="/delivery/drivers/transport_master"
                              className={
                                pathname.includes("transport_master") ? "active" : ""
                              }
                            >
                              New Transport{" "}
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/delivery/drivers/driver_management_list/2"
                              className={
                                pathname.includes("driver_management_list/2") ? "active" : ""
                              }
                            >
                              Transport List
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/delivery/drivers/vehicle_master"
                              className={
                                pathname.includes("vehicle_master") ? "active" : ""
                              }
                            >
                             New Vehicle{" "}
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/delivery/drivers/driver_management_list/3"
                              className={
                                pathname.includes("driver_management_list/3") ? "active" : ""
                              }
                            >
                              Vehicle List
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/delivery/drivers/newdriver"
                              className={
                                pathname.includes("newdriver") ? "active" : ""
                              }
                            >
                              New Driver{" "}
                            </Link>
                          </li>
                       
                          <li>
                            <Link
                              to="/delivery/drivers/driver_management_list/1"
                              className={
                                pathname.includes("driver_management_list/1") ? "active" : ""
                              }
                            >
                              Drivers List
                            </Link>
                          </li>
                        
                         
                        </ul>
                      ) : (
                        ""
                      )}
                    </li>
                  </ul>
                </li>
                <li className="submenu-open">
                  <h6 className="submenu-hdr">Sales</h6>
                  <ul>
                    <li
                      className={pathname.includes("saleslist") ? "active" : ""}
                    >
                      <Link
                        className={
                          pathname.includes("saleslist") ? "active" : ""
                        }
                        to="/delivery/sales/saleslist"
                      >
                        <i data-feather="shopping-cart" />
                        <FeatherIcon icon="shopping-cart" />
                        <span>Sales</span>
                      </Link>
                    </li>
                    <li
                      className={pathname.includes("sales-invioce") ? "active" : ""}
                    >
                      <Link
                        className={
                          pathname.includes("sales-invioce") ? "active" : ""
                        }
                        to="/delivery/sales/sales-invioce"
                      >
                        {/* <i data-feather="sales-invoice" />
                        <FeatherIcon icon="sales-invoice" /> */}
                        <LiaFileInvoiceSolid size={30}/>

                        <span>Invoice</span>
                      </Link>
                    </li>
                    {/* <li
                      className={
                        pathname.includes("invoicereport") ? "active" : ""
                      }
                    >
                      <Link
                        to="/delivery/report/invoicereport"
                        className={
                          pathname.includes("invoicereport") ? "active" : ""
                        }
                      >
                        <i data-feather="file-text" />
                        <FeatherIcon icon="file-text" />
                        <span>Invoices</span>
                      </Link>
                    </li> */}
                    {/* <li
                      className={
                        pathname.includes("salesreturnlist-return")
                          ? "active"
                          : ""
                      }
                    >
                      <Link
                        className={
                          pathname.includes("salesreturnlist-") ? "active" : ""
                        }
                        to="/delivery/return/salesreturnlist-return"
                      >
                        <i data-feather="copy" />
                        <FeatherIcon icon="copy" />
                        <span>Sales Return</span>
                      </Link>
                    </li> */}
                    </ul>
                    </li>
                {/* <li className="submenu-open">
                  <h6 className="submenu-hdr">Sales</h6>
                  <ul>
                    <li
                      className={pathname.includes("saleslist") ? "active" : ""}
                    >
                      <Link
                        className={
                          pathname.includes("saleslist") ? "active" : ""
                        }
                        to="/delivery/sales/saleslist"
                      >
                        <i data-feather="shopping-cart" />
                        <FeatherIcon icon="shopping-cart" />
                        <span>Sales</span>
                      </Link>
                    </li>
                   
                    <li
                      className={
                        pathname.includes("invoicereport") ? "active" : ""
                      }
                    >
                      <Link
                        to="/delivery/report/invoicereport"
                        className={
                          pathname.includes("invoicereport") ? "active" : ""
                        }
                      >
                        <FeatherIcon icon="file-text" />
                        <span>Invoices</span>
                      </Link>
                    </li>
                  </ul>
                </li> */}
                <li className="submenu-open">
                  <h6 className="submenu-hdr">Dispatch</h6>
                  <ul>
                    <li
                      className={pathname.includes("assign_to") ? "active" : ""}
                    >
                      <Link
                        className={
                          pathname.includes("assign_to") ? "active" : ""
                        }
                        to="/delivery/transaction/assign_to"
                      >
                        {/* <i data-feather="shopping-cart" />
                        <FeatherIcon icon="shopping-cart" /> */}
                        <MdOutlineAssignmentTurnedIn size={30}/>
                        <span>Assign Delivery</span>
                      </Link>
                    </li>
                    <li
                      className={pathname.includes("assign_List") ? "active" : ""}
                    >
                      <Link
                        className={
                          pathname.includes("assign_List") ? "active" : ""
                        }
                        to="/delivery/transaction/assign_List"
                      >
                        {/* <i data-feather="shopping-cart" />
                        <FeatherIcon icon="shopping-cart" /> */}
                        <TbTruckDelivery size={30}/>
                        <span>Delivery List</span>
                      </Link>
                    </li>
                    <li
                      className={pathname.includes("drop_List") ? "active" : ""}
                    >
                      <Link
                        className={
                          pathname.includes("drop_List") ? "active" : ""
                        }
                        to="/delivery/transaction/drop_List"
                      >
                        {/* <i data-feather="shopping-cart" />
                        <FeatherIcon icon="shopping-cart" /> */}
                        <MdOutlinePinDrop size={30}/>
                        <span>Transport Delivery</span>
                      </Link>
                    </li>
                   
                  </ul>
                </li>
                <li className="submenu-open">
                  <h6 className="submenu-hdr">Tracking</h6>
                  <ul>
                    <li
                      className={pathname.includes("tracking") ? "active" : ""}
                    >
                      <Link
                        className={
                          pathname.includes("tracking") ? "active" : ""
                        }
                        to="/delivery/tracking/tracking"
                      >
                       <SiPivotaltracker size={30}/>

                        <span>Driver Tracker</span>
                      </Link>
                    </li>
                   
                  </ul>
                </li>



                <li className="submenu-open">
                  <h6 className="submenu-hdr">Products</h6>
                  <ul>
                    <li
                      className={
                        pathname.includes("productlist-product") ? "active" : ""
                      }
                    >
                      <Link
                        className={
                          pathname.includes("productlist-") ? "active" : ""
                        }
                        to="/delivery/product/productlist-product"
                      >
                        <FeatherIcon icon="box" />
                        <span>Products</span>
                      </Link>
                    </li>
                    <li
                      className={
                        pathname.includes("addproduct-product") ? "active" : ""
                      }
                    >
                      <Link
                        className={
                          pathname.includes("addproduct-") ? "active" : ""
                        }
                        to="/delivery/product/addproduct-product"
                      >
                        <FeatherIcon icon="plus-square" />
                        <span>Create Product</span>
                      </Link>
                    </li>
                   
                    <li
                      className={
                        pathname.includes("importproduct-product")
                          ? "active"
                          : ""
                      }
                    >
                      <Link
                        className={
                          pathname.includes("importproduct-") ? "active" : ""
                        }
                        to="/delivery/product/importproduct-product"
                      >
                        {/* <i data-feather="minimize-2" /> */}
                        <FeatherIcon icon="minimize-2" />
                        <span>Import Products</span>
                      </Link>
                    </li>
                  </ul>
                </li>
                

                <li className="submenu-open">
                  <h6 className="submenu-hdr">Peoples</h6>
                  <ul>
                    <li
                      className={
                        pathname.includes("customerlist-people") ? "active" : ""
                      }
                    >
                      <Link
                        className={
                          pathname.includes("customerlist-") ? "active" : ""
                        }
                        to="/delivery/people/customerlist-people"
                      >
                      
                        <FeatherIcon icon="user" />
                        <span>Customers</span>
                      </Link>
                    </li>
                    {/* ---suppliers-- */}
                    {/* <li
                      className={
                        pathname.includes("supplierlist-people") ? "active" : ""
                      }
                    >
                      <Link
                        className={
                          pathname.includes("supplierlist-") ? "active" : ""
                        }
                        to="/delivery/people/supplierlist-people"
                      >
                        <FeatherIcon icon="users" />
                        <span>Suppliers</span>
                      </Link>
                    </li> */}
                 
                    <li
                      className={
                        pathname.includes("storelist-people") ? "active" : ""
                      }
                    >
                      <Link
                        className={
                          pathname.includes("storelist-") ? "active" : ""
                        }
                        to="/delivery/people/storelist-people"
                      >
                        <FeatherIcon icon="home" />
                        <span>Stores</span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu-open">
                  <h6 className="submenu-hdr">Reports</h6>
                  <ul>
                    {/* <li
                      className={
                        pathname.includes("salesreport") ? "active" : ""
                      }
                    >
                      <Link
                        to="/delivery/report/salesreport"
                        className={
                          pathname.includes("salesreport") ? "active" : ""
                        }
                      >
                       
                        <FeatherIcon icon="bar-chart-2" />
                        <span>Sales Report</span>
                      </Link>
                    </li> */}
                    {/* <li
                      className={
                        pathname.includes("purchasereport") ? "active" : ""
                      }
                    >
                      <Link
                        to="/delivery/report/purchasereport"
                        className={
                          pathname.includes("purchasereport") ? "active" : ""
                        }
                      >
                        <FeatherIcon icon="bar-chart" />
                        <span>Purchase Report</span>
                      </Link>
                    </li> */}
                    <li
                      className={
                        pathname.includes("report/1") ? "active" : ""
                      }
                    >
                      <Link
                        to="/delivery/report/report/1"
                        className={
                          pathname.includes("report/1") ? "active" : ""
                        }
                      >
                        <FeatherIcon icon="bar-chart" />
                        <span>Delivery day Report</span>
                      </Link>
                    </li>
                    {/* <li
                      className={
                        pathname.includes("report/2") ? "active" : ""
                      }
                    >
                      <Link
                        to="/delivery/report/report/2"
                        className={
                          pathname.includes("report/2") ? "active" : ""
                        }
                      >
                        <FeatherIcon icon="bar-chart" />
                        <span>Delivery Report</span>
                      </Link>
                    </li> */}
                    <li
                      className={
                        pathname.includes("report/6") ? "active" : ""
                      }
                    >
                      <Link
                        to="/delivery/report/report/6"
                        className={
                          pathname.includes("report/6") ? "active" : ""
                        }
                      >
                        <FeatherIcon icon="bar-chart" />
                        <span>Order Summary</span>
                      </Link>
                    </li>
                    <li
                      className={
                        pathname.includes("report/3") ? "active" : ""
                      }
                    >
                      <Link
                        to="/delivery/report/report/3"
                        className={
                          pathname.includes("report/3") ? "active" : ""
                        }
                      >
                        <FeatherIcon icon="bar-chart" />
                        <span>Pending Dispatch</span>
                      </Link>
                    </li>
                    <li
                      className={
                        pathname.includes("report/4") ? "active" : ""
                      }
                    >
                      <Link
                        to="/delivery/report/report/4"
                        className={
                          pathname.includes("report/4") ? "active" : ""
                        }
                      >
                        <FeatherIcon icon="bar-chart" />
                        <span>Pending Delivery</span>
                      </Link>
                    </li>
                    <li
                      className={
                        pathname.includes("report/5") ? "active" : ""
                      }
                    >
                      <Link
                        to="/delivery/report/report/5"
                        className={
                          pathname.includes("report/5") ? "active" : ""
                        }
                      >
                        <FeatherIcon icon="bar-chart" />
                        <span>Trip Report</span>
                      </Link>
                    </li>
                    <li
                      className={
                        pathname.includes("report/7") ? "active" : ""
                      }
                    >
                      <Link
                        to="/delivery/report/report/7"
                        className={
                          pathname.includes("report/7") ? "active" : ""
                        }
                      >
                        <FeatherIcon icon="bar-chart" />
                        <span>Order Image</span>
                      </Link>
                    </li>
                    <li
                      className={
                        pathname.includes("report/8") ? "active" : ""
                      }
                    >
                      <Link
                        to="/delivery/report/report/8"
                        className={
                          pathname.includes("report/8") ? "active" : ""
                        }
                      >
                        <FeatherIcon icon="bar-chart" />
                        <span>Vehicle Status</span>
                      </Link>
                    </li>
                  </ul>
                </li>
            
                {/* <li className="submenu-open">
                  <h6 className="submenu-hdr">Pages</h6>
                  <ul>
                    <li className="submenu">
                      <Link
                        to="#"
                        className={
                          pathname.includes("/delivery/authentication")
                            ? "subdrop active"
                            : "" || isSideMenu == "authentication"
                            ? "subdrop active"
                            : ""
                        }
                        onClick={() =>
                          toggleSidebar(
                            isSideMenu == "authentication"
                              ? ""
                              : "authentication"
                          )
                        }
                      >
                        <FeatherIcon icon="shield" />
                        <span>Authentication</span>
                        <span className="menu-arrow" />
                      </Link>
                      {isSideMenu == "authentication" ? (
                        <ul>
                          <li>
                            <Link
                              to="/signIn"
                              className={
                                pathname.includes("signIn") ? "active" : ""
                              }
                            >
                              Log in
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/signUp"
                              className={
                                pathname.includes("signUp") ? "active" : ""
                              }
                            >
                              Register
                            </Link>
                          </li>
                          <li>
                            <Link to="/forgetpassword">Forgot Password</Link>
                          </li>

                        </ul>
                      ) : (
                        " "
                      )}
                    </li>

                   
                   
                  </ul>
                </li> */}

                <li className="submenu-open">
                  <h6 className="submenu-hdr">Settings</h6>
                  <ul>
                    <li className="submenu">
                      <Link
                        to="#"
                        className={
                          pathname.includes("/delivery/settings")
                            ? "subdrop active"
                            : "" || isSideMenu == "Settings"
                            ? "subdrop active"
                            : ""
                        }
                        onClick={() =>
                          toggleSidebar(
                            isSideMenu == "Settings" ? "" : "Settings"
                          )
                        }
                      >
                        {/* <img src={settings} alt="img" /> */}
                        <FeatherIcon icon="settings" />
                        <span> Settings</span> <span className="menu-arrow" />
                      </Link>
                      {isSideMenu == "Settings" ? (
                        <ul>
                          <li>
                            <Link
                              to="/delivery/settings/generalsettings"
                              className={
                                pathname.includes("generalsettings")
                                  ? "active"
                                  : ""
                              }
                            >
                              General Settings
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/delivery/settings/whatsapp_config"
                              className={
                                pathname.includes("whatsapp_config")
                                  ? "active"
                                  : ""
                              }
                            >
                              WhatsApp Config.
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/delivery/settings/otp_config"
                              className={
                                pathname.includes("otp_config")
                                  ? "active"
                                  : ""
                              }
                            >
                              OTP Config.
                            </Link>
                          </li>
                          
                         
                          {/* <li>
                            <Link
                              to="/delivery/settings/grouppermissions"
                              className={
                                pathname.includes("permission") ? "active" : ""
                              }
                            >
                              Group Permissions
                            </Link>
                          </li> */}
                          
                        </ul>
                      ) : (
                        ""
                      )}
                    </li>
                    <li>
                      <Link
                        to="/signIn"
                        className={pathname.includes("signIn") ? "active" : ""}
                      >
                        <FeatherIcon icon="log-out" />
                        <span>Logout</span>{" "}
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          </div>
        </Scrollbars>
      </div>
    </>
  );
};

export default Sidebar;
