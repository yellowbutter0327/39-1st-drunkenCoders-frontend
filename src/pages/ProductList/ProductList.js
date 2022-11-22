import React from 'react';
import ProductItem from './Component/Body/ProductItem';
import ProductSearch from './Component/Body/ProductSearch';
import Dropdown from './Component/Head/Dropdown';
import ProductMenu from './Component/Head/ProductMenu';

import './ProductList.scss';

const ProductList = () => {
  return (
    <div className="container">
      <div className="content-wrapper">
        <div className="product-list-head">
          <div className="product-menu">
            <ProductMenu />
          </div>
          {/* 필터 */}
          <div className="product-filter-box">
            <Dropdown />
          </div>

          {/* 회색줄 */}
          <div className="grey-line" />
          {/* 검색결과 */}
          <div className="search-container">
            <ProductSearch />
          </div>
          {/* 아이템 */}
          <div className="item-container">
            <ProductItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
