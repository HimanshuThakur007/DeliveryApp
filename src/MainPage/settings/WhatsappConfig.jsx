/* eslint-disable react/prop-types */
import React, {useState} from "react";
import InputField from "../../CustomComps/InputField";
import { CancelButton } from "../../CustomComps/SubmitButtom";
import ReactToast, { showToastError, showToastMessage } from "../../CustomComps/ReactToast";
import useFetch from "../../Hooks/useFetch";
import ReactLoader from "../../CustomComps/ReactLoader";

const WhatsappConfig = () => {
  const api = useFetch();
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = React.useState({
    BaseURL :'',
    Parameter1H :'',Parameter1V :'',Parameter2H :'',Parameter2V :'',Parameter3H :'',
    Parameter3V :'',Parameter4H :'', Parameter4V :'',MobileH :'',MessageH :'',WAppBody:""
  })
  const {BaseURL ,Parameter1H ,Parameter1V ,Parameter2H ,Parameter2V ,Parameter3H, 
    Parameter3V ,Parameter4H , Parameter4V ,MobileH ,MessageH ,WAppBody } = inputValue

    const handleInputField = (e) => {
      const { name, value } = e.target;
      setInputValue((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };

     // =============================post-Data===========================
  const saveHandler = async (e) => {
    e.preventDefault();
    const WhatsAppUrl = "/Api/SaveWhatsappConfig";

    const body = {
      RecType:1,BaseURL ,Parameter1H ,Parameter1V ,Parameter2H ,Parameter2V ,Parameter3H, 
      Parameter3V ,Parameter4H , Parameter4V ,MobileH ,MessageH ,WAppBody
    }

    console.log("body", JSON.stringify(body));

    try {
      setLoading(true);
      let { res, got } = await api(WhatsAppUrl, "POST", body);
      if (res.status === 200) {
        showToastMessage(got.msg);

        setLoading(false);
        setInputValue({ BaseURL :'',
        Parameter1H :'',Parameter1V :'',Parameter2H :'',Parameter2V :'',Parameter3H :'',
        Parameter3V :'',Parameter4H :'', Parameter4V :'',MobileH :'',MessageH :'',WAppBody:""})
        // setSelectedRowKeys([]);
        getWhatsappConfig()
        // navigate("/delivery/dashboard")
      } else {
        setLoading(false);
        showToastError(got.msg);
      }
    } catch (error) {
      setLoading(false);
      showToastError(error);
    }
  };

  // =========================Modify-Config===============================
  const getWhatsappConfig = async () => {
    let url = `/Api/GetWhatsappConfig?RecType=1`;
    try {
      setLoading(true);
      let { res, got } = await api(url, "GET", "");
      if (res.status == 200) {
        console.log("getConfigTable", got.data[0]);
        let list = got.data[0];
        setInputValue({ BaseURL :list.baseURL,
        Parameter1H :list.parameter1H,
        Parameter1V :list.parameter1V,
        Parameter2H :list.parameter2H,
        Parameter2V :list.parameter2V,
        Parameter3H :list.parameter3H,
        Parameter3V :list.parameter3V,
        Parameter4H :list.parameter4H, 
        Parameter4V :list.parameter4V,
        MobileH :list.mobileH,
        MessageH :list.messageH,
        WAppBody:list.wAppBody})
        setLoading(false);
      } else {
        setLoading(false);
        showToastError("Something Went Wrong in List loading");
      }
    } catch (err) {
      setLoading(false);
      showToastError(err);
    }
  };

  React.useEffect(()=>{
    getWhatsappConfig()
  },[])


  return (
    <>
     <ReactToast />
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="page-title">
              <h4>WhatsApp Configuration</h4>
              {/* <h6>Add/Update Drivers</h6> */}
            </div>
          </div>
          {loading ? (
            <ReactLoader
              loaderClass="position-absolute"
              loading={loading}
            />
          ) : null}
          <form onSubmit={saveHandler}>
            <div className="card">
              {/* <div className="card-header">
                <h5>Basic Information</h5>
              </div> */}
              <div className="card-body">
                <div className="row">
                  <div className="col-xl-12">
                    <InputField
                      star="*"
                      labelName="Base URL"
                      name="BaseURL"
                      type="text"
                      value={BaseURL}
                      onChange={handleInputField}
                      required
                    />
                  </div>
                  <div className="col-xl-6">
                    <InputField
                      star="*"
                      labelName="Parameter1"
                      name="Parameter1H"
                      type="text"
                      value={Parameter1H}
                      onChange={handleInputField}
                      required
                    />
                  </div>
                  <div className="col-xl-6">
                    <InputField
                      star="*"
                      labelName="Value1"
                      name="Parameter1V"
                      type="text"
                      value={Parameter1V}
                      onChange={handleInputField}
                      required
                    />
                  </div>
                  <div className="col-xl-6">
                    <InputField
                      star="*"
                      labelName="Parameter2"
                      name="Parameter2H"
                      type="text"
                      value={Parameter2H}
                      onChange={handleInputField}
                      required
                    />
                  </div>
                  <div className="col-xl-6">
                    <InputField
                      star="*"
                      labelName="Value2"
                      name="Parameter2V"
                      type="text"
                      value={Parameter2V}
                      onChange={handleInputField}
                      required
                    />
                  </div>
                  <div className="col-xl-6">
                    <InputField
                      labelName="Parameter3"
                      name="Parameter3H"
                      type="text"
                      value={Parameter3H}
                      onChange={handleInputField}
                    />
                  </div>
                  <div className="col-xl-6">
                    <InputField
                      labelName="Value3"
                      name="Parameter3V"
                      type="text"
                      value={Parameter3V}
                      onChange={handleInputField}
                    />
                  </div>
                  <div className="col-xl-6">
                    <InputField
                      labelName="Parameter4"
                      name="Parameter4H"
                      type="text"
                      value={Parameter4H}
                      onChange={handleInputField}
                    />
                  </div>
                  <div className="col-xl-6">
                    <InputField
                      labelName="Value4"
                      name="Parameter4V"
                      type="text"
                      value={Parameter4V}
                      onChange={handleInputField}
                    />
                  </div>
                  <div className="col-xl-6">
                    <InputField
                      star="*"
                      labelName="Mobile"
                      name="MobileH"
                      type="text"
                      value={MobileH}
                      onChange={handleInputField}
                      required
                    />
                  </div>
                  <div className="col-xl-6">
                    <InputField
                      star="*"
                      labelName="Message"
                      name="MessageH"
                      type="text"
                      value={MessageH}
                      onChange={handleInputField}
                      required
                    />
                  </div>
                  <div className="col-xl-12">
                    <div className="form-group">
                      <label>Body</label>
                      <textarea
                        name="WAppBody"
                        className="form-control"
                        rows={6}
                        value={WAppBody}
                        onChange={handleInputField}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mt-4 d-flex">
                      <button
                        type="submit"
                        className="btn btn-submit me-2"
                        onClick={() => {}}
                      >
                        Submit
                      </button>
                      <CancelButton />
                      {/* <button className="btn btn-cancel">
                  Cancel
                </button> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default WhatsappConfig;
