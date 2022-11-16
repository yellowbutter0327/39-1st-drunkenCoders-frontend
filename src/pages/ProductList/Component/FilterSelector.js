import React from 'react';
import Dropdown from './Dropdown/Dropdown';
import './FilterSelector.scss';

const FilterSelector = roops => {
  return (
    <div className="filter">
      <div className="filter-wrapper">
        <div className="filter-item">
          <Dropdown />
        </div>
      </div>
    </div>
  );
};

export default FilterSelector;
