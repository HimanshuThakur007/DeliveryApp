/* eslint-disable react/prop-types */
import React from 'react';
import { Table} from 'antd';
import { Margin, usePDF } from "react-to-pdf";
const TripModal = ({columns,dataSource,rowKey,setShowModal}) => {
  const { toPDF, targetRef } = usePDF({
    filename: "TripDetailsReport.pdf",
    page: { margin: Margin.MEDIUM }
  });
  return (
    <>
    <div
          className="modal fade"
          id="tripDetail"
          tabIndex={-1}
          aria-labelledby="tripDetail"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Trip Details</h5>
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
              <div ref={targetRef}>
              <div className="table-responsive">
                <Table
                  columns={columns}
                  dataSource={dataSource}
                  rowKey={rowKey}
                //   handelSelectedKey={props.handelSelectedKey}
                />
              </div>
              </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-submit" onClick={setShowModal}>
                  Generate PDF
                </button>
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
    </>
  )
}

export default TripModal