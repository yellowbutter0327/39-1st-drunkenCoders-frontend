import React from 'react';
import './DropdownItem.scss';

const DropdonwItem = props => {
  return (
    <div className="option-box">
      <div className="option-container">
        <div className="option-item-wrapper">
          <div className="option-item">
            <div className="option-check-box">
              <button className="option-check-button">
                <img
                  className="check-box-img"
                  src="/images/check-box.png"
                  alt="check-box"
                />
              </button>
            </div>
            <button className="option-text">탁주</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdonwItem;
