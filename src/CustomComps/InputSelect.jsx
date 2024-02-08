/* eslint-disable react/prop-types */
import React from 'react';
import Select from 'react-select';

const InputSelect = ({ label, options, value, onChange,required }) => {
  
  return (
    <div className="mb-3">
      <label htmlFor={label} className="form-label">
        {label}
      </label>
      <Select
        id={label}
        options={options}
        value={value}
        onChange={onChange}
        isClearable
        isSearchable
        placeholder={`Select ${label}`}
        required={required}
      />
    </div>
  );
};

export default InputSelect;
