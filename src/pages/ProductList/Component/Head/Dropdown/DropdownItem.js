import React, { useState } from 'react';
import './DropdownItem.scss';

const DropdownItem = () => {
  const [filterHandler, setFilterHandler] = useState(0);
  const filterItem = filterData[filterHandler];

  return (
    <div className="option-box">
      <div className="option-container">
        <div className="option-item-wrapper">
          <div className="option-item">
            <div className="option-check-box">
              {filterData.map(filter => (
                <button
                  key={filter.id}
                  onClick={() => setFilterHandler(filter.id)}
                  className="option-check-button"
                />
              ))}
              <img
                className="check-box-img"
                src="/images/check-box.png"
                alt="check-box"
              />
            </div>
            <button className="option-text">
              <div>{filterItem.title}</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownItem;

const filterData = [
  { id: 0, title: '탁주' },
  { id: 1, title: '과실주' },
  { id: 2, title: '증류주' },
  { id: 3, title: '청주' },
  { id: 4, title: '기타 주류' },
];
