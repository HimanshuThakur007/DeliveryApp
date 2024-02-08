/* eslint-disable react/prop-types */
import React from "react";
import CountUp from "react-countup";
// import { Dash1 } from "../EntryFile/imagePath";
import {Dash1} from '../../EntryFile/imagePath'

const TrackingCard = ({name,time,status,address,sName,onClick, ...props}) => {
  return (
    <React.Fragment>
      <div className="col-lg-12 col-sm-12 col-12">
        <div className="dash-widget" onClick={onClick} style={{cursor:"pointer"}}>
            <div className="col-4" style={{borderRight:"1px solid black"}}>
          <div className="dash-widgetimg">
            <span>
              <img src={Dash1} alt="img" />
            </span>
              <p>{name}</p>
          </div>
          </div>
          <div className="col-8">
          <div className="dash-widgetcontent">
            <div className="col-12 d-flex">
                <div className="col-6">
            <h5 className="">
              <span className="counters">
               {time}
              </span>
            </h5>
            </div>
            <div className="col-6">
            <h5 className="col-12 d-flex align-item-center justify-content-center" style={{background:"#DCFCE7",color:'#69726B'}}>
           {status}
            </h5>
            </div>
            </div>
            <h6 className="mb-2">{sName}</h6>
            <h6 className="mb-2">{address}</h6>
          </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TrackingCard;
