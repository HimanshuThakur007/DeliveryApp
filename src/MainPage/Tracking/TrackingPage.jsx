/* eslint-disable react/prop-types */
import React from "react";
import TrackingCard from "./TrackingCard";
import { Dash1 } from "../../EntryFile/imagePath";
import RightTrackingCard from "./RightTrackingCard";
import MapCard from "./MapCard";
import { FaUserCircle } from "react-icons/fa";
import { PiPhoneCallFill } from "react-icons/pi";
import { MdEmojiTransportation } from "react-icons/md";

const TrackingPage = ({data, showDataHandler, displayCardData}) => {
 
  return (
    <React.Fragment>
      <div className="page-wrapper cardhead">
        <div className="content container-fluid">
          <div className="page-header">
            <div className="page-title">
              <h4>Delivery Tracker</h4>
              {/* <h6>{props.subHeader}</h6> */}
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="card hide-scrollbar" style={{height:"80vh",overflow:"auto"}}>
                <div className="card-body">
                  {data.map((item,index)=>{
                    return(
                      
                      <TrackingCard onClick={()=>showDataHandler(item,index)} key={index} name={item.name} time={item.time} status={item.status} sName={item.sName} address={item.address}/>
                    )
                  })}
                  {/* <TrackingCard name={"himanshu"} time="10:30:20 PM" status="Assigned" sName="Himanshu Thakur" address="Noida"/>
                  <TrackingCard />
                  <TrackingCard /> */}
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card hide-scrollbar" style={{height:"80vh",overflow:"auto"}}>
                <div className="card-body">
                  <div className="col-lg-12 col-sm-12 col-12">
                    <div className="col-12 d-flex justify-content-between">
                      <h5 className="col-10">Order #: OR001</h5>
                      <h5
                        className="col-2 d-flex justify-content-center"
                        style={{ background: "#DCFCE7", color: "#69726B" }}
                      >
                        {displayCardData.status}
                      </h5>
                    </div>
                    <div className="col-12 mb-2">
                      <p>2 items</p>
                    </div>
                    <div className="col-12 d-flex pt-2">
                      <RightTrackingCard cardName="Himanshu" designation="Partner" reactIcon={<FaUserCircle size={40} style={{ color: 'blue' }}/>}/>
                      <RightTrackingCard cardName="Rahul Gandhi" designation="Driver Name" reactIcon={<MdEmojiTransportation  size={40} style={{ color: 'red' }}/>}/>
                      <RightTrackingCard cardName="1234567890" designation="Mobile" reactIcon={<PiPhoneCallFill  size={40} style={{ color: 'green' }}/>}/>
                    </div>
                    <div className="col-lg-12 d-lg-flex d-block pt-4">
                      <div className="col-lg-6 col-12">
                        <MapCard longitude={displayCardData.longitude} latitude={displayCardData.latitude}/>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="container">
                          <div className="col-12">
                            <span className="col-12 d-flex p-3">
                            <h5 style={{fontWeight:"bold"}}>Customer :</h5>
                            <h6 className="ps-2" style={{color: "#69726B"}}>Himanshu</h6>
                            </span>
                          </div>
                          <div className="col-12">
                          <span className="col-12 d-flex p-3">
                            <h5 style={{fontWeight:"bold"}}>Contact :</h5>
                            <h6 className="ps-2" style={{color: "#69726B"}}>7905336719</h6>
                            </span>
                          </div>
                          <div className="col-12">
                          <span className="col-12 d-flex p-3">
                            <h5 style={{fontWeight:"bold"}}>Order Time :</h5>
                            <h6 className="ps-2" style={{color: "#69726B"}}>Tue Sep 06 2022</h6>
                            </span>
                          </div>
                          <div className="col-12">
                          <span className="col-12 d-flex p-3">
                            <h5 style={{fontWeight:"bold"}}>Pickup :</h5>
                            <h6 className="ps-2" style={{color: "#69726B"}}>Noida</h6>
                            </span>
                          </div>
                          <div className="col-12">
                          <span className="col-12 d-flex p-3">
                            <h5 style={{fontWeight:"bold"}}>Drop Off :</h5>
                            <h6 className="ps-2" style={{color: "#69726B"}}>Varanasi</h6>
                            </span>
                          </div>
                          <div className="col-12">
                          <span className="col-12 d-flex p-3">
                            <h5 style={{fontWeight:"bold"}}>ETA :</h5>
                            <h6 className="ps-2" style={{color: "#69726B"}}>37 Mins</h6>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TrackingPage;
