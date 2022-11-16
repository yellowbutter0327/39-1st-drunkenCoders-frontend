import React from 'react';
import './ProductSearch.scss';

const ProductSearch = roops => {
  return (
    <div className="search-box">
      <div className="product-stats-box">
        <div className="search-result">
          <div className="result-number">111</div>
          <div>건의 결과가 있어요</div>
        </div>
        <div className="filter-wrapper">
          <div className="filter-selector-box">
            <select className="filter-selector">
              <option value="recomend">추천순</option>
              <option value="rating">평점순</option>
              <option value="star_count">리뷰 많은순</option>
              <option value="selling_count">판매순</option>
              <option value="price_high">높은 가격순</option>
              <option value="price_low">낮은 가격순</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSearch;
