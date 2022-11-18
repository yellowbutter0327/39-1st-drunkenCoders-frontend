import React, { useState } from 'react';
import './ProductItem.scss';

const ProductItem = roops => {
  const [itemName, setItemName] = useState(0);

  return (
    <>
      {/* 제품 전체 박스 */}
      <div className="product-info-box">
        <div className="product-info">
          <a href="www.naver.com" className="product-link">
            <div className="image-wrapper">
              <span className="">
                <span />
                <img
                  className="product-img"
                  src="/images/cat.jpeg"
                  alt="drink"
                />
              </span>
            </div>
            {/* 제품 설명 */}

            {/* 작업중 영역 mapping */}
            {/* <section>
              <div className="item-map">
                {itemData.map(item => (
                  <div className="item-item">
                    ㅁㅁㅁ
                    <button
                      key={item.id}
                      className={item.title}
                      onClick={() => setItemName(item.id)}
                    >
                      {item.title}
                    </button>
                  </div>
                ))}
              </div>
              <div className="item-content">
                <img src={itemData.find({ number }).jpeg.src} />
              </div>
            </section> */}
            {/* 작업중 영역 mapping */}

            <div className="product-content-box">
              <div className="product-wrapper">
                <div className="product-name">막쿠르트 [2입/4입]</div>
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
                  <div className="product-tag">#야구르트와 막걸리의 만남</div>
                  <div className="product-tag">#한국야구르트</div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default ProductItem;

const itemData = [
  {
    id: 0,
    number: 0,
    title: '소주',
    price: '5,000원',
  },
  {
    id: 1,
    number: 1,
    title: '맥주',
    price: '5,000원',
  },
  {
    id: 2,
    number: 2,
    title: '위스키',
    price: '5,000원',
  },
];
