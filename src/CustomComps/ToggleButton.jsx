/* eslint-disable react/prop-types */
import React, {useEffect} from 'react';

function ToggleButton({ id, initialValue, onValueChange,toggleName }) {
  const [value, setValue] = React.useState(initialValue);
  const style = {
    label: {
      fontSize: "15px",
      fontWeight: "bold",
    },
  };

  

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);


  const toggleValue = () => {
    const newValue = value === 1 ? 0 : 1;
    setValue(newValue);
    onValueChange(id, newValue);
  };

  return (
    <div className='d-flex mb-3'>
      <label  style={style.label}>{toggleName}</label>
      <label className="switch ms-2">
        <input type="checkbox" onChange={toggleValue} checked={value === 1} />
        <span className="slider round"></span>
      </label>
      <p className='ps-1'>{value === 1 ? 'Yes' : 'No'}</p>
    </div>
  );
}

export default ToggleButton;
