import React from 'react';
import './Dropdown.scss';
import DropdownList from './DropdownList';
import DropdonwItem from './DropdownItem';

const Dropdown = props => {
  const [dropdownVisibility, setDropdownVisibility] = React.useState(false);

  return (
    <div className="filter-box-wrapper">
      <button
        className="filter-button"
        onClick={e => setDropdownVisibility(!dropdownVisibility)}
      >
        {dropdownVisibility}
        <span className="filter-name">주종</span>
        <img
          className="arrow-down"
          src="/images/arrow-down.png"
          alt="arrow-down"
        />
      </button>
      <DropdownList visibility={dropdownVisibility}>
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
