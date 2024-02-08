/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-dupe-keys */
import React from "react";
import Table from "../../EntryFile/datatable";
import Tabletop from "../../EntryFile/tabletop";
import ListPageHeader from "../../CustomComps/ListPageHeader";
import ReactLoader from "../../CustomComps/ReactLoader";

const DriverManagementPage = (props) => {
  let id = props.userId;
  return (
    <React.Fragment>
      <div className="page-wrapper">
        <div className="content">
          <ListPageHeader
            Header={
              id == 1
                ? "Driver List"
                : id == 2
                ? "Transport List"
                : id == 3
                ? "Vehicle List"
                : "List"
            }
            subHeader={
              id == 1
                ? "Manage Driver List"
                : id == 2
                ? "Manage Transport List"
                : id == 3
                ? "Manage Vehicle List"
                : "Manage List"
            }
            path ={
              id == 1
                ? "/delivery/drivers/newdriver"
                : id == 2
                ? "/delivery/drivers/transport_master"
                : id == 3
                ? "/delivery/drivers/vehicle_master"
                : " "
            }
            btnName={
              id == 1
                ? "Add Driver"
                : id == 2
                ? "Add Transport"
                : id == 3
                ? "Add Vehicle"
                : "Add"
            }
          />
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
  );
};

export default DriverManagementPage;
