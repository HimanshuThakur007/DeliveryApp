/* eslint-disable react/prop-types */
import React from 'react'
import ReactLoader from '../../CustomComps/ReactLoader'
import Tabletop from '../../EntryFile/tabletop'
import { Table } from 'antd'
import { CancelButton } from '../../CustomComps/SubmitButtom'

const ConfigSettingTable = (props) => {

  return (
    <React.Fragment>
     <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="page-title">
          <h4>Company Configuration</h4>
            <h6>Manage Company Configuration</h6>
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
              />
           
            <div className="table-responsive">
              <Table
               className="table datanew dataTable no-footer"
               pagination={false}
               style={{ overflowX: "auto" }}
               scroll={{
                 y: 300,
                 x: 1000
               }}
               rowSelection={props.rowSelection}
               columns={props.columns}
               dataSource={props.data}
               rowKey={(record)=> record.compCode}
              />

            </div>
            <div className="col-lg-12">
              <div className='mt-4 d-flex'>
                <button type="submit" className="btn btn-submit me-2"
                 onClick={props.saveHandler}
                 >
                  Submit
                </button>
                <CancelButton/>
                {/* <button className="btn btn-cancel">
                  Cancel
                </button> */}
                </div>
              </div>
          </div>
        </div>
        {/* /product list */}
      </div>
    </div>
   </React.Fragment>
  )
}

export default ConfigSettingTable