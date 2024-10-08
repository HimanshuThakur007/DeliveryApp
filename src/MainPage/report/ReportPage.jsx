/* eslint-disable react/prop-types */
import React from 'react'
import ReactLoader from '../../CustomComps/ReactLoader'
import ToggleButton from '../../CustomComps/ToggleButton'
import Table from '../../EntryFile/datatable'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import InputSelect from '../../CustomComps/InputSelect';
import CardComp from '../../CustomComps/CardComp';
import TripModal from './TripModal';
import Tabletop from '../../EntryFile/tabletop';

const ReportPage = (props) => {
  let id = props.userId
  return (
   <React.Fragment>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="page-title">
              <h4>{id == 1 ? 
              "Delivery day Report": id ==2 ?
              // "Delivery Report" : id == 3?
              "Pending Dispatch": id == 4 ?
              'Pending Delivery': id == 5 ? 'Trip Report': id == 6 ?'Order Summary': id == 8 ? "Vehicle Status Report":''}</h4>
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
          {props.userId != 8 && (
            <>
          {props.values.assign === 1?(
              
          <CardComp>
             <div className="row">
              <div className="col-lg-4 col-sm-6 col-12">
              <InputSelect label="Driver" options={props.driverList} value={props.selectedDriver||{label:"All", value:0}} onChange={props.SelectDriverHandler}/>
               
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
          </>
          )}

          <div className="card">
            <div className="card-body">
            {props.userId != 8 && (
              <div className="row">
                <div className="col-lg-12 col-sm-12 col-12 mt-2">
                <ToggleButton
                toggleName = "Filter By Date" 
                id="assign" 
                initialValue={props.initialValue} 
                onValueChange={props.handleValueChange}
                />
                </div>
                
              </div>)}
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
                  rowKey={id == 8 || id == 5 ? (record) => record.code :
                     id == 1 ?(record) => record.assignNo :
                     (record, index) => index+1
                    }
                  handelSelectedKey={props.handelSelectedKey}
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
          {/* <TripModal dataSource={props.tripModalData} columns={props.tripModalCol} showModal= {props.setShowModal}/> */}
        </div>
      </div>
   </React.Fragment>
  )
}

export default ReportPage