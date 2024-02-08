/* eslint-disable react/prop-types */
import React from 'react'
const InputField = (props) => {
  return (
    <>
      <div className="form-group">
        <label>{props.labelName} <span style={{ color: "red",fontSize:'bold' }}>{props.star}</span></label>
          <input
            type={props.type}
            name={props.name}
            className="form-control"
            autoComplete="off"
            onChange={props.onChange}
            value={props.value}
            minLength={props.minLength}
            maxLength={props.maxLength}
            min={props.min}
            required={props.required}
            disabled={props.disabled}
          />
        {/* <div className="invalid-feedback">{props.errormsg}</div> */}
        <div className={props.errClass}><span className='text-danger'>{props.errormsg}</span></div>
      </div>
    </>
  );
}

export default InputField