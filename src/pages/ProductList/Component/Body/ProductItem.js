import React, { useEffect, useState } from 'react';
import './ProductItem.scss';

const ProductItem = () => {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    fetch('/data/ProductItemData.json')
      .then(response => response.json())
      .then(result => setItemList(result));
    // .then(result => console.log(result));
  }, []);

  return (
    <>
      {/* 제품 전체 박스 */}
      {itemList.map(item => (
        <div className="product-info-box" key={item.id}>
          <div className="product-info">
            <a href="www.naver.com" className="product-link">
              <div className="image-wrapper">
                <span className="">
                  <span />
                  <img className="product-img" src={item.src} alt="drink" />
                </span>
              </div>
              {/* 제품 설명 */}

              <div className="product-content-box">
                <div className="product-wrapper">
                  <div className="product-name">{item.title}</div>
                </div>
                {/* 가격 정보 */}
                <div className="product-wrapper">
                  <div className="product-price-wrapper">
                    <p className="origin-price" />
                    <div className="discount-price-wrapper">
                      <p className="discount-price">
                        13,000
                        <span>원</span>
                      </p>
                    </div>
                  </div>
                  {/* 별점 & 리뷰 */}
                  <div className="score-box">
                    <img
                      className="star-img"
                      src="/images/black-star.png"
                      alt="star"
                    />
                    <p className="rated-score">0</p>
                    <div className="column-line" />
                    <p className="review-number">리뷰 0</p>
                  </div>
                </div>
                <div className="product-footer">
                  <div className="product-tag-box">
                    <div className="product-tag">{item.tag[0]}</div>
                    <div className="product-tag">{item.tag[1]}</div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductItem;
