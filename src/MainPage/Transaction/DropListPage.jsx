/* eslint-disable react/prop-types */
import React from 'react'
import ReactLoader from '../../CustomComps/ReactLoader'
import ToggleButton from '../../CustomComps/ToggleButton'
import Table from '../../EntryFile/datatable'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import InputSelect from '../../CustomComps/InputSelect';
import CardComp from '../../CustomComps/CardComp';
import Tabletop from '../../EntryFile/tabletop';

const DropListPage = (props) => {
  let id = props.userId
  return (
   <React.Fragment>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="page-title">
              <h4>{id == 1 ? "Deliveryday Report": id ==2 ?"Delivery Report" : id == 3?"Pending Dispatch":''}</h4>
              {/* <h6>Manage Assign Data</h6> */}
            </div>
           
          </div>
          {props.loading ? (
            <ReactLoader
              loaderClass="position-absolute"
              loading={props.loading}
            />
          ) : null}
          {/* /product list */}
          {props.values.assign === 1?(
              
          <CardComp>
             <div className="row">
              <div className="col-lg-4 col-sm-6 col-12">
              <InputSelect label="Driver" options={props.driverList} value={props.selectedDriver||{value:0,label:"All"}} onChange={props.SelectDriverHandler}/>
               
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
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
              <div className="col-lg-3 col-sm-6 col-12">
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
             <div className='col-lg-2 d-flex align-items-center'>
             <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={props.DynamicFunctionCaller}
                  >
                    Load Data
                  </button>
             </div>
            </div>
          </CardComp>):''}

          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-lg-12 col-sm-12 col-12 mt-2">
                <ToggleButton
                toggleName = "Filter By Date" 
                id="assign" 
                initialValue={props.initialValue} 
                onValueChange={props.handleValueChange}
                />
                </div>
                
              </div>
              {/* <Tabletop inputfilter={inputfilter} togglefilter={togglefilter} /> */}
              <Tabletop
                inputfilter={props.inputfilter}
                togglefilter={props.togglefilter}
                handleSearch={props.handleSearch}
                handleExportClick={props.handleExportClick}
              />

              <div className="table-responsive">
                <Table
                  props={props}
                  columns={props.columns}
                  dataSource={props.data}
                  rowKey={(record,index) => record.srNo}
                  handelSelectedKey={props.rowSelectHandler}
                />
              </div>
              {/* <div className="col-12 mt-3">
                <button
                  type="submit"
                  className="btn btn-submit me-2"
                  onClick={props.saveHandler}
                >
                  Submit
                </button>
              </div> */}
            </div>
          </div>
          {/* /product list */}
      
        </div>
      </div>
   </React.Fragment>
  )
}

export default DropListPage