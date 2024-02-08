/* eslint-disable react/prop-types */
import React from 'react'
import {PlusIcon} from "../EntryFile/imagePath";
import { Link } from "react-router-dom";

const ListPageHeader = (props) => {
  return (
    <React.Fragment>
         <div className="page-header">
          <div className="page-title">
            <h4>{props.Header}</h4>
            <h6>{props.subHeader}</h6>
          </div>
          <div className="page-btn">
            <Link to={props.path} className="btn btn-added">
              <img src={PlusIcon} alt="img" className="me-2" />
              {props.btnName}
            </Link>
          </div>
        </div>
    </React.Fragment>
  )
}

export default ListPageHeader