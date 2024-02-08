/* eslint-disable react/prop-types */
import React from "react";
// import { Route, Routes, Outlet, Link, useNavigate } from "react-router-dom";
import { Route, Routes} from "react-router-dom";
import routerService from "../../Router";
import Header from "./Header";
import Sidebar from "./Sidebar";

const DefaultLayout = () => {

  return (
    <>
      <div className="main-wrapper">
        <Header />     
        <Routes>

          {routerService &&
            routerService.map((route, key) => {
              return(
                <>
                (          
                  <Route
                    key={key}
                    path={`${route.path}`}
                    element={<route.component />}              
                  />
                )
                </>
              )
            } )}

        </Routes>  

        <Sidebar />
      </div>
      <div className="sidebar-overlay"></div>
    </>
  );
};

export default DefaultLayout;




