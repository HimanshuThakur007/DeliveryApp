/* eslint-disable react/prop-types */
import React from 'react';
import InputField from "../../CustomComps/InputField";
import InputTextArea from '../../CustomComps/InputTextArea';
import ImageToBase64Converter from '../../CustomComps/ImageToBase64Converter';
import ReactLoader from '../../CustomComps/ReactLoader';
import { CancelButton } from '../../CustomComps/SubmitButtom';

const TransportPage = (props) => {
  const { Name, Address, Email, Mobile } = props.inputValue;

  return (
    <React.Fragment>
         <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="page-title">
            <h4>Transport Management</h4>
            <h6>Add/Update Transport</h6>
          </div>
        </div>
        {/* /add */}
        {props.loading ? (
        <ReactLoader loaderClass="position-absolute" loading={props.loading} />
      ) : null}
        <div className="card">
          
          <div className="card-body">
            <form onSubmit={props.saveHandler}>
            <div className="row">
              <div className="col-lg-3 col-sm-6 col-12">
                
                <InputField star="*" labelName='Name' type="text" name="Name" value={Name}  onChange={props.handleInputField} required/>
                <InputField labelName='Email' type="email" name="Email" value={Email}  onChange={props.handleInputField}/>
                
              
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <InputField star="*" labelName="Mobile" type="number" name="Mobile" value={Mobile} onChange={props.handleInputField} required/>
                <InputTextArea textlbl="Address" name="Address" value={Address}  onChange={props.handleInputField}/>
                {/* <div className="form-group">
                  <label>Password</label>
                  <div className="pass-group">
                    <input
                      type={props.passwordShown ? "text" : "password"}
                      className=" pass-input"
                      onChange={props.handleInputField}
                    />
                    <span
                      className={`fas toggle-password ${
                        props.passwordShown ? "fa-eye" : "fa-eye-slash"
                      }`}
                      onClick={props.togglePassword}
                    />
                  </div>
                </div> */}
              </div>
              
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="form-group">
                  <label>Profile Picture</label>
                  <ImageToBase64Converter
                      onImageConverted={props.handleImageConverted}
                    />
                </div>
              </div>
              <div className="col-lg-12 d-flex">
                <button type='submit' className="btn btn-submit me-2">
                  Submit
                </button>
                <CancelButton/>
                {/* <button className="btn btn-cancel">
                  Cancel
                </button> */}
              </div>
            </div>
            </form>
           
          </div>
        </div>
      </div>
    </div>
    </React.Fragment>
  )
}

export default TransportPage;