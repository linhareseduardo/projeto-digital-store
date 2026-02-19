import React from 'react';
import './FilterGroup.css';

// inputType: 'checkbox' | 'radio'
// selected: string[] para checkbox, string para radio
// onChange: (newSelected) => void
const FilterGroup = ({ title, inputType = 'checkbox', options = [], selected = [], onChange }) => {
  const handleChange = (value) => {
    if (inputType === 'radio') {
      onChange && onChange(value);
    } else {
      const current = Array.isArray(selected) ? selected : [];
      const next = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      onChange && onChange(next);
    }
  };

  const isChecked = (value) => {
    if (inputType === 'radio') return selected === value;
    return Array.isArray(selected) && selected.includes(value);
  };

  return (
    <div className="filter-group">
      <h5 className="filter-group__title">{title}</h5>
      <div className="filter-group__options">
        {options.map((option, index) => (
          <label key={index} className="filter-group__option">
            <input
              type={inputType}
              value={option.value ?? option.text}
              className="filter-group__input"
              checked={isChecked(option.value ?? option.text)}
              onChange={() => handleChange(option.value ?? option.text)}
            />
            <span className="filter-group__label">{option.text}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterGroup;
