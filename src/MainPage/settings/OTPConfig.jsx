import React,{useState} from 'react'
import { CancelButton } from '../../CustomComps/SubmitButtom'
import ReactLoader from '../../CustomComps/ReactLoader'
import ReactToast, { showToastError, showToastMessage } from '../../CustomComps/ReactToast'
import useFetch from '../../Hooks/useFetch'
import ToggleButton from '../../CustomComps/ToggleButton'

const OTPConfig = () => {
    const api = useFetch();
    const [loading, setLoading] = useState(false);
    const [values, setValues] = useState({});
    const [initialValue, setInitialValue] = useState(0);

       // =============for-transporter-toggle================================
       const handleValueChange = (id, newValue) => {
        setValues((prevValues) => ({
          ...prevValues,
          [id]: newValue,
        }));
      };

         // =============================post-Data===========================
  const saveHandler = async (e) => {
    e.preventDefault();
    const OtpUrl = "/Api/SaveConfig";

    const body = {
        OTPEnable:values.otp||0
    }

    console.log("body", JSON.stringify(body));

    try {
      setLoading(true);
      let { res, got } = await api(OtpUrl, "POST", body);
      if (res.status === 200) {
        showToastMessage(got.msg);

        getOTPConfig()
        // navigate("/delivery/dashboard")
        setLoading(false)
      } else {
        setLoading(false);
        showToastError(got.msg);
      }
    } catch (error) {
      setLoading(false);
      showToastError(error);
    }
  };

    // =========================Load-Config===============================
    const getOTPConfig = async () => {
        let url = `/Api/GetConfig`;
        try {
          setLoading(true);
          let { res, got } = await api(url, "GET", "");
          if (res.status == 200) {
            console.log("getConfigTable", got.data[0]);
            let list = got.data[0]
            setValues({
                otp:list.otpEnable
            })
            setInitialValue({
                otp:list.otpEnable
            })
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
        getOTPConfig()
      },[])
  return (
    <>
       <ReactToast />
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="page-title">
              <h4>OTP Configuration</h4>
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
                  <ToggleButton
                    toggleName="Enable OTP"
                    id="otp"
                    initialValue={values.otp}
                    onValueChange={handleValueChange}
                  />
                   
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
  )
}

export default OTPConfig