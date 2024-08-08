/* eslint-disable react/prop-types */
import React from 'react'
import InputField from "../../CustomComps/InputField";
import ToggleButton from '../../CustomComps/ToggleButton';
import InputSelect from '../../CustomComps/InputSelect';
import ImageToBase64Converter from '../../CustomComps/ImageToBase64Converter';
import InputTextArea from '../../CustomComps/InputTextArea';
import ReactLoader from '../../CustomComps/ReactLoader';
import { CancelButton } from '../../CustomComps/SubmitButtom';


const NewDriverPage = (props) => {
  const {Name,Email,cPassword,Password,Mobile,VechicleNum,VechicleModel,VechicleType,Address} = props.inputValue
   
  return (
    <React.Fragment>
         <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="page-title">
            <h4>Drivers Management</h4>
            <h6>Add/Update Drivers</h6>
          </div>
        </div>
        {/* /add */}
        {props.loading ? (
        <ReactLoader loaderClass="position-absolute" loading={props.loading} />
      ) : null}
       <form onSubmit={props.saveHandler}>
        <div className="card">
            <div className="card-header">
              <h5>Basic Information</h5>
            </div>
          <div className="card-body">
            <div className="row">
              <div className="col-lg-3 col-sm-6 col-12">
                
                <InputField star="*" labelName='Name' name="Name" type="text" value={Name} onChange={props.handleInputField} required/>
                <InputField star="*" labelName='Email Id' name="Email" type="email" value={Email} onChange={props.handleInputField} required/>
                <div className="form-group">
                  <label>Confirm Password <span className='text-danger'>*</span></label>
                  <div className="pass-group">
                    <input
                      type={props.passwordShown ? "text" : "password"}
                      className=" pass-input"
                      name="cPassword"
                      value={cPassword}
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
                <InputField star="*" labelName="Mobile Number" name="Mobile" type="number" value={Mobile} onChange={props.handleInputField} required/>
                
                <div className="form-group">
                  <label>Password <span className='text-danger'>*</span></label>
                  <div className="pass-group">
                    <input
                      type={props.passwordShown1 ? "text" : "password"}
                      className=" pass-input"
                      name="Password"
                      value={Password}
                      onChange={props.handleInputField}
                      required
                    />
                    <span
                      className={`fas toggle-password ${
                        props.passwordShown1 ? "fa-eye" : "fa-eye-slash"
                      }`}
                      onClick={props.togglePassword1}
                    />
                  </div>
                </div>
                <InputTextArea textlbl="Address" name="Address" value={Address}  onChange={props.handleInputField}/>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="form-group">
                  <label>Profile Picture</label>
                  <ImageToBase64Converter
                      onImageConverted={props.handleImageConverted}
                    />
                  {/* <div className="image-upload image-upload-new">
                    <input type="file" />
                    <div className="image-uploads">
                      <img src={Upload} alt="img" />
                      <h4>Upload Profile Picture</h4>
                    </div>
                  </div> */}
                </div>
              </div>
             
            </div>
          </div>
        </div>
        {/* ===============second card=================== */}

        <div className="card" style={{marginTop:'-2px'}}>
            <div className="card-header">
              <h5>Vehicle Information</h5>
            </div>
          <div className="card-body">
            {/* <form onSubmit={props.saveHandler}> */}
            <div className="row">
              <div className="col-lg-3 col-sm-6 col-12">
                
                <InputField labelName='Vehicle Number' name="VechicleNum" type="text" value={VechicleNum.toUpperCase()} onChange={props.handleInputField}/>
                <InputField labelName='Vehicle Modal' name="VechicleModel" type="text" value={VechicleModel} onChange={props.handleInputField}/>
                
                <ToggleButton
                toggleName = "Transport" 
                id="transport" 
                initialValue={props.values.transport} 
                onValueChange={props.handleValueChange}
                />
                
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <InputField labelName='Vehicle Type' name="VechicleType" type="text" value={VechicleType} onChange={props.handleInputField}/>
                {props.values.transport === 1 || props.initialValue === 1?(
                <InputSelect label="Transport" options={props.transportlist} value={props.selectedTransport} onChange={props.selectHandler}/>
                ):''}
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="form-group">
                  <label> Profile Picture</label>
                  <ImageToBase64Converter
                      onImageConverted={props.handleImageConverted}
                    />
                  {/* <div className="image-upload image-upload-new">
                    <input type="file" />
                    <div className="image-uploads">
                      <img src={Upload} alt="img" />
                      <h4>Drag and drop a file to upload</h4>
                    </div>
                  </div> */}
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
            {/* </form> */}
          </div>
        </div>
        </form>
        {/* /add */}
      </div>
    </div>
    </React.Fragment>
  )
}

export default NewDriverPage