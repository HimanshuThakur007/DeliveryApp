/* eslint-disable no-dupe-keys */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Table from "../../EntryFile/datatable";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ReactLoader from "../../CustomComps/ReactLoader";
import CardComp from "../../CustomComps/CardComp";
import InputSelect from "../../CustomComps/InputSelect";
import ToggleButton from "../../CustomComps/ToggleButton";

const AssignTablePage = (props) => {
  const [inputfilter, setInputfilter] = useState(false);

  //   const [startDate, setStartDate] = useState(new Date());

  const togglefilter = (value) => {
    setInputfilter(value);
  };

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="page-title">
              <h4>Delivery Assign List</h4>
              <h6>Cancel/update List</h6>
            </div>
          </div>
          {/* /product list */}
          {props.loading ? (
            <ReactLoader
              loaderClass="position-absolute"
              loading={props.loading}
            />
          ) : null}

          {props.values.assign === 1 ? (
            <CardComp>
              <div className="row">
                <div className="col-lg-4 col-sm-6 col-12">
                  <InputSelect
                    label="Driver"
                    options={props.driverList}
                    value={props.selectedDriver}
                    onChange={props.SelectDriverHandler}
                  />
                </div>
                <div className="col-lg-4 col-sm-6 col-12">
                  <div className="row mb-3">
                    <label htmlFor="date" className="form-label">
                      From Date
                    </label>

                    <DatePicker
                      showIcon
                      className="form-control"
                      dateFormat="dd/MM/yyyy"
                      selected={props.dates.fDate}
                      onChange={(date) => props.handleDateChange("fDate", date)}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 col-12">
                  <div className="row mb-3">
                    <label htmlFor="date" className="form-label">
                      To Date
                    </label>

                    <DatePicker
                      showIcon
                      className="form-control"
                      dateFormat="dd/MM/yyyy"
                      selected={props.dates.tDate}
                      onChange={(date) => props.handleDateChange("tDate", date)}
                    />
                  </div>
                </div>
                <div className="col-12 d-flex justify-content-end">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={props.getAssignListData}
                  >
                    Load Data
                  </button>
                </div>
              </div>
            </CardComp>
           ) : (
            ""
          )} 

          <div className="card">
            <div className="card-body">
              <div className="row">
                 <div className="col-12 d-flex mb-3">
                 <ToggleButton
                toggleName = "Filter By Date" 
                id="assign" 
                initialValue={props.values.initialValue}
                onValueChange={props.handleValueChange}
                />
                </div>
                  {/* <div className="col-lg-5 col-sm-6 col-12">
                    <label htmlFor="date" className="col-3 form-label">
                      From Date
                    </label>

                    <DatePicker
                      showIcon
                      className="col-9 form-control"
                      dateFormat="dd/MM/yyyy"
                      selected={props.dates.fDate}
                      onChange={(date) => props.handleDateChange("fDate", date)}
                    />
                  </div>
                  <div className="col-lg-5 col-sm-6 col-12">
                    <label htmlFor="date" className="col-3 form-label">
                      To Date
                    </label>

                    <DatePicker
                      showIcon
                      className="col-9 form-control"
                      dateFormat="dd/MM/yyyy"
                      selected={props.dates.tDate}
                      onChange={(date) => props.handleDateChange("tDate", date)}
                    />
                  </div>

                  <div className="col-lg-2 col-sm-2 col-12">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={props.getAssignListData}
                    >
                      Load Data
                    </button>
                  </div> */}
                {/* </div>  */}
              </div>
              {/* <Tabletop inputfilter={inputfilter} togglefilter={togglefilter} /> */}

              <div className="table-responsive">
                <Table
                  props={props}
                  columns={props.columns}
                  dataSource={props.data}
                  rowKey={(record) => record.vchCode}
                  handelSelectedKey={props.handelSelectedKey}
                />
              </div>
              <div className="col-12 mt-3">
                <button
                  type="submit"
                  className="btn btn-submit me-2"
                  onClick={() => {}}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
          {/* /product list */}
        </div>
      </div>
    </>
  );
};

export default AssignTablePage;
