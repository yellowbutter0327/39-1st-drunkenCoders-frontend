import React from 'react';
import './Dropdown.scss';
import DropdownList from './DropdownList';

const Dropdown = props => {
  const [dropdownVisibility, setDropdownVisibility] = React.useState(false);

  return (
    <div>
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
        <ul>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
          <li>item 4</li>
        </ul>
      </DropdownList>
    </div>
  );
};

export default Dropdown;
