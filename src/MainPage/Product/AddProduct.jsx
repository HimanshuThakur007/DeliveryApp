/* eslint-disable no-unused-vars */
/* eslint-disable no-dupe-keys */
import React, { useState } from "react";
import { Upload } from "../../EntryFile/imagePath";
import Select2 from "react-select2-wrapper";
import "react-select2-wrapper/css/select2.css";
import PageHeader from "../../CustomComps/PageHeader";
import CardComp from "../../CustomComps/CardComp";
import InputSelect from "../../CustomComps/InputSelect";
import InputField from "../../CustomComps/InputField";
import SubmitButtom, { CancelButton } from "../../CustomComps/SubmitButtom";

const options = [
  { value: 1, label: "Choose Category", text: "Choose Category" },
  { value: 2, label: "Computers", text: "Computers" },
];
const options1 = [
  { value: 1, label: "Choose Sub Category", text: "Choose Sub Category" },
  { value: 2, label: "Fruits", text: "Fruits" },
];
const options2 = [
  { value: 1, label: "Choose Brand", text: "Choose Brand" },
  { value: 2, label: "Brand", text: "Brand" },
];
const options3 = [
  { value: 1, label: "Choose Unit", text: "Choose Unit" },
  { value: 2, label: "Unit", text: "Unit" },
];
const options4 = [
  { value: 1, label: "Choose Tax", text: "Choose Tax" },
  { value: 2, label: "2%", text: "2%" },
];
const options5 = [
  { value: 1, label: "Percentage", text: "Percentage" },
  { value: 2, label: "10%", text: "10%" },
  { value: 3, label: "20%", text: "20%" },
];
const options6 = [
  { value: 1, label: "Closed", text: "Closed" },
  { value: 2, label: "Open", text: "Open" },
];

const AddProduct = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <PageHeader header="Product Add" subHeader="Create new product" />
          {/* /add */}
          <CardComp>
            <div className="row">
              <div className="col-lg-3 col-sm-6 col-12">
                <InputField mainClass="" labelName="Product Name" />
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <InputSelect label="Category" options={options} />
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <InputSelect label="Sub Category" options={options1} />
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <InputSelect label="Brand" options={options2} />
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <InputSelect label="Unit" options={options3} />
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <InputField labelName="SKU" type="text" />
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <InputField labelName="Minimum Qty" type="text" />
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <InputField labelName="Quantity" type="text" />
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Description</label>
                  <textarea className="form-control" defaultValue={""} />
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <InputSelect label="Tax" options={options4} />
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <InputSelect label="Discount Type" options={options5} />
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <InputField labelName="Price" type="text" />
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <InputSelect label="Status" options={options6} />
              </div>
              <div className="col-lg-12">
                <InputField type="file" labelName="Product Image"/>
                {/* <div className="form-group">
                  <label> Product Image</label>
                  <div className="image-upload">
                    <input type="file" />
                    <div className="image-uploads">
                      <img src={Upload} alt="img" />
                      <h4>Drag and drop a file to upload</h4>
                    </div>
                  </div>
                </div> */}
              </div>
              <div className="col-lg-12 d-flex">
                <SubmitButtom name="Submit"/>
                <CancelButton name="Cancel"/>
              </div>
            </div>
          </CardComp>

          {/* /add */}
        </div>
      </div>
    </>
  );
};
export default AddProduct;
