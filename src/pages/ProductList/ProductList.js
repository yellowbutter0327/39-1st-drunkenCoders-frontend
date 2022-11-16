import React from 'react';
import ProductItem from './Component/ProductItem';
import ProductSearch from './Component/ProductSearch';
import ProductFilter from './Component/ProdectFilter';
import './ProductList.scss';

const ProductList = () => {
  return (
    <>
      <div>
        <ul>
          <li>
            <div>
              <span />
              <div />
            </div>
          </li>
        </ul>
      </div>

      <div className="product-item-list">
        {/*  */}
        <div>
          <div>
            <div>
              <div />
              <div />
            </div>
            <div>
              <img />
            </div>
          </div>
        </div>

        {/* 필터 */}
        <div className="product-filter-box">
          <ProductFilter />
          <ProductFilter />
          <ProductFilter />
          <ProductFilter />
          <ProductFilter />
          <ProductFilter />
          <ProductFilter />
          <ProductFilter />
          <ProductFilter />
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
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
      </div>
    </>
  );
};

export default ProductList;
