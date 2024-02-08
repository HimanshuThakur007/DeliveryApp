/* eslint-disable react/prop-types */
import React from "react";

const CardComp = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        {props.children}
      </div>
    </div>
  );
};

export default CardComp;
