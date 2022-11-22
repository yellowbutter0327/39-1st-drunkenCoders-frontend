import React, { useState } from 'react';
import DropdownList from './DropdownList';
import DropdonwItem from './DropdownItem';
import './Dropdown.scss';

const Dropdown = () => {
  const [isDropdownVisibility, setIsDropdownVisibility] = useState(false);

  return (
    <div className="filter-box-wrapper">
      <button
        className="filter-button"
        onClick={e => setIsDropdownVisibility(!isDropdownVisibility)}
      >
        {isDropdownVisibility}
        <span className="filter-name">주종</span>
        <img
          className="arrow-down"
          src="/images/arrow-down.png"
          alt="arrow-down"
        />
      </button>
      <DropdownList visibility={isDropdownVisibility}>
        <div className="option-box-wrapper">
          <DropdonwItem />
          <DropdonwItem />
          <DropdonwItem />
          <DropdonwItem />
        </div>
      </DropdownList>
    </div>
  );
};

export default Dropdown;
