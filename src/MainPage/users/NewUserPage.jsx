/* eslint-disable react/prop-types */
import React from 'react'
import InputField from "../../CustomComps/InputField";
import ToggleButton from '../../CustomComps/ToggleButton';
import InputSelect from '../../CustomComps/InputSelect';
import ImageToBase64Converter from '../../CustomComps/ImageToBase64Converter';
import InputTextArea from '../../CustomComps/InputTextArea';
import ReactLoader from '../../CustomComps/ReactLoader';
import { CancelButton } from '../../CustomComps/SubmitButtom';


const NewUserPage = (props) => {
  const {UserName,Email,Password,Mobile,} = props.inputValue
   
  return (
    <React.Fragment>
         <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="page-title">
            <h4>User Management</h4>
            <h6>Add/Update Users</h6>
          </div>
        </div>
        {/* /add */}
        {props.loading ? (
        <ReactLoader loaderClass="position-absolute" loading={props.loading} />
      ) : null}
        <div className="card">
            <div className="card-header">
            </div>
          <div className="card-body">
            <form onSubmit={props.saveHandler}>
            <div className="row">
              <div className="col-lg-3 col-sm-6 col-12">
                
                <InputField star="*" labelName='User Name' name="UserName" type="text" value={UserName} onChange={props.handleInputField} required/>
                <InputField star="*" labelName='Email' name="Email" type="email" value={Email} onChange={props.handleInputField} required/>
                <div className="form-group">
                  <label>Password</label>
                  <div className="pass-group">
                    <input
                      type={props.passwordShown ? "text" : "password"}
                      className=" pass-input"
                      name="Password"
                      value={Password}
                      onChange={props.handleInputField}
                    />
                    <span
                      className={`fas toggle-password ${
                        props.passwordShown ? "fa-eye" : "fa-eye-slash"
                      }`}
                      onClick={props.togglePassword}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <InputField star="*" labelName="Mobile" name="Mobile" type="number" value={Mobile} onChange={props.handleInputField} required/>
                <InputSelect label="Role" options={props.roleList} value={props.selectedRole} onChange={props.selectHandler}/>
                
                {/* <div className="form-group mt-1">
                  <label>Confirm Password</label>
                  <div className="pass-group">
                    <input
                      type={props.passwordShown1 ? "text" : "password"}
                      className=" pass-input"
                      name="cPassword"
                      value={cPassword}
                      onChange={props.handleInputField}
                    />
                    <span
                      className={`fas toggle-password ${
                        props.passwordShown1 ? "fa-eye" : "fa-eye-slash"
                      }`}
                      onClick={props.togglePassword1}
                    />
                  </div>
                </div> */}
                {/* <InputTextArea textlbl="Address" name="Address" value={Address}  onChange={props.handleInputField}/> */}
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
                <button type="submit" className="btn btn-submit me-2">
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
        {/* /add */}
      </div>
    </div>
    </React.Fragment>
  )
}

export default NewUserPage