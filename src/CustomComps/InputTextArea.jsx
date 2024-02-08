/* eslint-disable react/prop-types */
import React from 'react'

const InputTextArea = (props) => {
  return (
    <React.Fragment>
        <div className="form-group">
        <label>{props.textlbl} <span style={{ color: "red",fontSize:'bold' }}>{props.star}</span></label>
        <textarea className='form-control' value={props.value} name={props.name} onChange={props.onChange}/>
        </div>
    </React.Fragment>
  )
}

export default InputTextArea