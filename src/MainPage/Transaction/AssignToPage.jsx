/* eslint-disable no-dupe-keys */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Table from "../../EntryFile/datatable";
import DatePicker from "react-datepicker";
import Tabletop from "../../EntryFile/tabletop";
import "react-datepicker/dist/react-datepicker.css";
import CardComp from "../../CustomComps/CardComp";
import InputSelect from "../../CustomComps/InputSelect";
import InputField from "../../CustomComps/InputField";
import ToggleButton from "../../CustomComps/ToggleButton";
import ReactLoader from "../../CustomComps/ReactLoader";
// import AssigntoModal from "./AssigntoModal";

const AssignToPage = (props) => {
  console.log("selectedRow",props.selectedRow)
  const [inputfilter, setInputfilter] = useState(false);
  //   const [startDate, setStartDate] = useState(new Date());

  const togglefilter = (value) => {
    setInputfilter(value);
  };

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          {/* <PDFModal/> */}
          <div className="page-header">
            <div className="page-title">
              <h4>Assign To</h4>
              <h6>Manage Assign Data</h6>
            </div>
            <div className="page-btn">
              {/* <Link to="/delivery/sales/add-sales" className="btn btn-added"> */}
              {/* <button className="btn btn-added" onClick={props.showHandler}>
                <img src={PlusIcon} alt="img" className="me-1" />
                Select Company
              </button> */}
              {/* </Link> */}
            </div>
          </div>
          {props.loading ? (
            <ReactLoader
              loaderClass="position-absolute"
              loading={props.loading}
            />
          ) : null}
          {/* /product list */}
          <form onSubmit={props.saveHandler}>
            <CardComp>
              <div className="row">
                <div className="col-lg-4 col-sm-6 col-12">
                  <InputSelect
                    label="Driver"
                    options={props.driverList}
                    value={props.selectedValues.driver}
                    onChange={(selectedOption) =>
                      props.handleSelectChange(
                        selectedOption,
                        "driver",
                        props.setSelectedValues
                      )
                    }
                    required
                  />

                  <InputField
                    labelName="Assign Number"
                    value={props.assignNo}
                    disabled
                  />
                </div>
                <div className="col-lg-4 col-sm-6 col-12">
                  <InputSelect
                    label="Vehicle"
                    options={props.vehicleList}
                    value={props.selectedValues.vehicle}
                    onChange={(selectedOption) =>
                      props.handleSelectChange(
                        selectedOption,
                        "vehicle",
                        props.setSelectedValues
                      )
                    }
                    requires
                  />

                  <div className="row mb-3">
                    <label htmlFor="date" className="form-label">
                      Date
                    </label>

                    <DatePicker
                      showIcon
                      className="form-control"
                      dateFormat="dd/MM/yyyy"
                      selected={props.dates.Date}
                      onChange={(date) => props.handleDateChange("Date", date)}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 col-12">
                  <InputSelect
                    label="Transport"
                    options={props.transportList}
                    value={props.selectedValues.transport}
                    onChange={(selectedOption) =>
                      props.handleSelectChange(
                        selectedOption,
                        "transport",
                        props.setSelectedValues
                      )
                    }
                  />
                </div>
              </div>
            </CardComp>
            {/* <PDFModal
          modalTitle="Company"
          onSave={props.handleSave}
          onHide={props.handleHide}
          show={props.showModal}
          // selectedCompList={selectedCompList}
          modalContent={
          <>Hello</>
          }
        /> */}
            <div className="card">
              <div className="card-body">
                <Tabletop
                  inputfilter={props.inputfilter}
                  togglefilter={props.togglefilter}
                  handleSearch={props.handleSearch}
                  handleExportClick={props.handleExportClick}
                />
                <div className="row">
                  <div className="col-12 d-flex">
                    <div className="col-lg-2 col-sm-6 col-12 mt-2">
                      <ToggleButton
                        toggleName="Filter By Date"
                        id="assign"
                        initialValue={props.initialValue}
                        onValueChange={props.handleValueChange}
                      />
                    </div>
                    {props.values.assign === 1 ? (
                      <>
                        <div className="col-lg-4 col-sm-6 col-12">
                          <label htmlFor="date" className="col-3 form-label">
                            From Date
                          </label>

                          <DatePicker
                            showIcon
                            className="col-9 form-control"
                            dateFormat="dd/MM/yyyy"
                            selected={props.dates.fDate}
                            onChange={(date) =>
                              props.handleDateChange("fDate", date)
                            }
                          />
                        </div>
                        <div className="col-lg-4 col-sm-6 col-12">
                          <label htmlFor="date" className="col-3 form-label">
                            To Date
                          </label>

                          <DatePicker
                            showIcon
                            className="col-9 form-control"
                            dateFormat="dd/MM/yyyy"
                            selected={props.dates.tDate}
                            onChange={(date) =>
                              props.handleDateChange("tDate", date)
                            }
                          />
                        </div>

                        <div className="col-lg-2 col-sm-2 col-12">
                          <button
                            type="submit"
                            className="btn btn-primary"
                            onClick={props.getAssignTableData}
                          >
                            Load Data
                          </button>
                        </div>
                      </>
                    ) : null}
                  </div>
                </div>
                {/* <Tabletop inputfilter={inputfilter} togglefilter={togglefilter} /> */}

                <div className="table-responsive">
                  <Table
                    props={props}
                    columns={props.columns}
                    dataSource={props.data}
                    rowKey={(record) => record.sNo}
                    handelSelectedKey={props.handelSelectedKey}
                  />
                </div>
                <div className="col-12 mt-3">
                  <button
                    type="submit"
                    className="btn btn-submit me-2"
                    // onClick={props.saveHandler}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
          {/* /product list */}
          <div
            className="modal fade"
            id="assignto"
            tabIndex={-1}
            aria-labelledby="assignto"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Assign</h5>
                  <button
                    type="button"
                    className="close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  {/* Inside the component where handleSelectChange is called */}
                  {props.selectedRow.map((item, rowIndex) => (
                    <InputSelect
                      label={`Transport (for inv No.:-${item.billNo})`}
                      key={rowIndex}
                      onChange={(selectedOption) =>
                        props.handleSelectChange(
                          selectedOption,
                          "transport2",
                          props.setSelectedValues,
                          rowIndex
                        )
                      }
                      options={props.transportList}
                    />
                  ))}

                  {/* <InputSelect
                  label="Transport"
                  options={options}
                  value={value}
                  onChange={onChange}
                  // options={props.transportList}
                  // value={props.selectedValues.transport}
                  // onChange={(selectedOption) =>
                  //   props.handleSelectChange(
                  //     selectedOption,
                  //     "transport",
                  //     props.setSelectedValues
                  //   )
                  // }
                /> */}
                </div>
                <div className="modal-footer">
                  {/* <button type="button" className="btn btn-submit">
                  Submit
                </button> */}
                  <button
                    type="button"
                    className="btn btn-cancel"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <AssigntoModal
          handleSelectChange={props.handleSelectChange}
            // options={props.transportList}
            // value={props.selectedValues.transport2}
            // onChange={(selectedOption) => props.handleSelectChange(selectedOption, selectName, setSelectedValues, rowIndex)}
          /> */}
        </div>
      </div>
    </>
  );
};

export default AssignToPage;
