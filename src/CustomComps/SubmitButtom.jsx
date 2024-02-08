/* eslint-disable react/prop-types */
import React from 'react'
import { useNavigate } from 'react-router-dom';


const SubmitButtom = (props) => {
 
  return (
    <div>
         <button className="btn btn-submit me-2" onClick={props.onClick}>{props.name}</button>
    </div>
  )
}

export default SubmitButtom;

export const CancelButton=()=>{
  const navigate = useNavigate()
  const navigateHandler = ()=>{
    navigate("/delivery/dashboard")
  }
    return (
        <div>
            <button className="btn btn-cancel" onClick={navigateHandler}>Cancel</button>
        </div>
    )
}