/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-dupe-keys */
import React, { useState } from "react";
import Table from "../../EntryFile/datatable";
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import {PlusIcon} from "../../EntryFile/imagePath";
import Tabletop from "../../EntryFile/tabletop";
import ReactLoader from "../../CustomComps/ReactLoader";

const UserListPage = (props) => {
  return (
   <React.Fragment>
     <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="page-title">
            <h4>User List</h4>
            <h6>Manage your User</h6>
          </div>
          <div className="page-btn">
            <Link to="/delivery/users/newuser" className="btn btn-added">
              <img src={PlusIcon} alt="img" className="me-2" />
              Add User
            </Link>
          </div>
        </div>
        {props.loading ? (
            <ReactLoader
              loaderClass="position-absolute"
              loading={props.loading}
            />
          ) : null}
        {/* /product list */}
        <div className="card">
          <div className="card-body">
          <Tabletop
                inputfilter={props.inputfilter}
                togglefilter={props.togglefilter}
                handleSearch={props.handleSearch}
                handleExportClick={props.handleExportClick}
              />
            {/* /Filter */}
            {/* <div
              className={`card mb-0 ${props.inputfilter ? "toggleCls" : ""}`}
              id="filter_inputs"
              style={{ display: props.inputfilter ? "block" : "none" }}
            >
              <div className="card-body pb-0">
                <div className="row">
                  <div className="col-lg-2 col-sm-6 col-12">
                    <div className="form-group">
                      <input type="text" placeholder="Enter User Name" />
                    </div>
                  </div>
                  <div className="col-lg-2 col-sm-6 col-12">
                    <div className="form-group">
                      <input type="text" placeholder="Enter Phone" />
                    </div>
                  </div>
                  <div className="col-lg-2 col-sm-6 col-12">
                    <div className="form-group">
                      <input type="text" placeholder="Enter Email" />
                    </div>
                  </div>
                  <div className="col-lg-2 col-sm-6 col-12">
                    <div className="form-group">
                      <div className="input-groupicon">
                        <DatePicker
                          selected={props.startDate}
                          onChange={(date) => props.setStartDate(date)}
                        />
                        <div className="addonset">
                          <img src={Calendar} alt="img" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-sm-6 col-12">
                    <div className="form-group">
                      <Select2
                        className="select"
                        data={props.options}
                        options={{
                          placeholder: "Select",
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-1 col-sm-6 col-12 ms-auto">
                    <div className="form-group">
                      <a className="btn btn-filters ms-auto">
                        <img src={search_whites} alt="img" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {/* /Filter */}
            <div className="table-responsive">
              <Table
                columns={props.columns}
                dataSource={props.data}
                rowKey={(record) => record.code}
              />
            </div>
          </div>
        </div>
        {/* /product list */}
      </div>
    </div>
   </React.Fragment>
  )
}

export default UserListPage