import React from 'react';
import './ProductListHead.scss';

const ProductListHead = () => {
  return (
    <div className="header-wrapper">
      <div className="header">
        <div className="header-title-box">
          <div className="header-title">전체상품</div>
          <div className="header-subtitle">
            담화마켓의 모든 술을 만나보세요!
          </div>
        </div>
        <div className="icon-wrapper">
          <img
            className="icon-img"
            src="/images/sooldamhwa-logo.png"
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductListHead;
