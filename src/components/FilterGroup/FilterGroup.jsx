import React from 'react';
import './FilterGroup.css';

const FilterGroup = ({ title, inputType = 'checkbox', options = [] }) => {
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
            />
            <span className="filter-group__label">{option.text}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterGroup;
