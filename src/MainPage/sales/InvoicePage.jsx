/* eslint-disable react/prop-types */
import React from 'react'
import ReactLoader from '../../CustomComps/ReactLoader'
import ToggleButton from '../../CustomComps/ToggleButton'
import Table from '../../EntryFile/datatable'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import InputSelect from '../../CustomComps/InputSelect';
import CardComp from '../../CustomComps/CardComp';

const InvoicePage = (props) => {
  return (
    <React.Fragment>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="page-title">
              <h4>Invoices Report</h4>
              <h6>Manage your Invoices Report</h6>
            </div>
           
          </div>
          {props.loading ? (
            <ReactLoader
              loaderClass="position-absolute"
              loading={props.loading}
            />
          ) : null}
          {/* /product list */}
          
              
          <CardComp>
             <div className="row">
             {/* <div className="col-lg-12 col-sm-12 col-12 mt-2"> */}
             <div className="col-lg-3 col-sm-6 col-12 d-flex justify-content-end align-items-center">
                <div className='col-12 mt-4 ml-2'>
                <ToggleButton
                toggleName = "Filter By Date" 
                id="assign" 
                initialValue={props.initialValue} 
                onValueChange={props.handleValueChange}
                />
                </div>
                </div>
              {/* <div className="col-lg-3 col-sm-6 col-12">
              <InputSelect label="Company" options={props.compList} value={props.selectedCompany} onChange={props.SelectCompanyHandler}/>
               
              </div> */}
              {props.values.assign === 1?(
              <>
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
             <div className='col-lg-3 col-sm-6 col-12 d-flex justify-content-center align-items-center'>
                <div className='col-12 mt-2'>
             <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={props.getSaleInvoiceList}
                  >
                    Load Data
                  </button>
                  </div>
             </div>
              </>):''}
            </div>
          </CardComp>

          <div className="card">
            <div className="card-body">
              {/* <div className="row">
                <div className="col-lg-12 col-sm-12 col-12 mt-2">
                <ToggleButton
                toggleName = "Filter By Date" 
                id="assign" 
                initialValue={props.initialValue} 
                onValueChange={props.handleValueChange}
                />
                </div>
                
              </div> */}
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

export default InvoicePage