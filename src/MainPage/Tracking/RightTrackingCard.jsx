/* eslint-disable react/prop-types */
import React from "react";
// import { Dash1 } from "../../EntryFile/imagePath";


const RightTrackingCard = ({cardName,designation,reactIcon}) => {
  return (
    <React.Fragment>
      <div className="col-4" style={{ borderRight: "1px solid black" }}>
        <div className="col-12 d-flex">
          <div className="col-4 d-flex justify-content-center align-item-center">
            {/* <img src={Dash1} alt="img" /> */}
            {reactIcon}
            
          </div>
          <div className="col-8">
            <h5 className="ms-2">{cardName}</h5>
            <p className="ms-2">{designation}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RightTrackingCard;
