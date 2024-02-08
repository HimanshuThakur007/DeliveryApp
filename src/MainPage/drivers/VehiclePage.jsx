/* eslint-disable react/prop-types */
import React from "react";
import InputField from "../../CustomComps/InputField";
// import { Upload } from "../../EntryFile/imagePath";
import ToggleButton from "../../CustomComps/ToggleButton";
import InputSelect from "../../CustomComps/InputSelect";
import ImageToBase64Converter from "../../CustomComps/ImageToBase64Converter";
import ReactLoader from "../../CustomComps/ReactLoader";
import { CancelButton } from "../../CustomComps/SubmitButtom";

const VehiclePage = (props) => {
  // console.log("props.initialValue", props.initialValue);
  const { Name, VechicleType, VechicleModel } = props.inputValue;
  return (
    <React.Fragment>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="page-title">
              <h4>Vehicle Management</h4>
              <h6>Add/Update Vehicle</h6>
            </div>
          </div>
          {props.loading ? (
        <ReactLoader loaderClass="position-absolute" loading={props.loading} />
      ) : null}
          {/* /add */}
          <div className="card">
            <div className="card-body">
              <form onSubmit={props.saveHandler}>
              <div className="row">
                <div className="col-lg-3 col-sm-6 col-12">
                  <InputField star="*" labelName="Veicle Number" name="Name" type="text" value={Name.toUpperCase()} onChange={props.handleInputField} required/>

                  <InputField labelName="Veicle Modal" name="VechicleModel" type="text" value={VechicleModel} onChange={props.handleInputField} />

                  <ToggleButton
                    toggleName="Transport"
                    id="transport"
                    initialValue={props.initialValue}
                    onValueChange={props.handleValueChange}
                  />
                </div>
                <div className="col-lg-3 col-sm-6 col-12">
                  <InputField labelName="Veicle Type" type="text" name="VechicleType" value={VechicleType} onChange={props.handleInputField}/>
                  {/* <InputField labelName="Mobile" type="text"/> */}
                  {props.values.transport === 1 || props.initialValue === 1 ? (
                    <InputSelect label="Transport" options={props.transportlist} value={props.selectedTransport} onChange={props.selectHandler} required={props.values.transport === 1 ? "required":""}/>
                  ) : (
                    ""
                  )}
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
  );
};

export default VehiclePage;
