import React, { useState } from 'react';
import './dropdown-card-component-css.css'
const DropdownCardComponent = ({ title, options }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="displaycard">
      <div className='dropdown-title'>{title}</div>
      <div className="selectionDiv">
        <select className='dropdown-select' value={selectedOption} onChange={handleChange} >
          <option value="ALL">All</option>
          {options.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default DropdownCardComponent