import React, { useState } from 'react';

const Dropdown = ({ options, label, onChange }) => {
  const [value, setValue] = useState('');

  const onDropdownChange = (e) => {
    const value = e.target.value;

    setValue(value);
    onChange(value);
  };

  return (
    <div className="cards">
      <div className="card">
        <label htmlFor="years">{label}</label>
        <select id="years" value={value} onChange={(e) => onDropdownChange(e)}>
          {options.map((option) => {
            return (
              <option key={option} value={option}>
                {option}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Dropdown;
