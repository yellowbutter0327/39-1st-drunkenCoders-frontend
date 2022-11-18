import React from 'react';
import './ProductItem.scss';

const ProductItem = roops => {
  return (
    <>
      {/* 제품 전체 박스 */}
      {itemData.map(item => (
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
    // <span>.toLocaleString()</span>
  );
};

export default ProductItem;

const itemData = [
  {
    id: 0,
    title: '굳냥이',
    price: '5000',
    src: './images/goodcat.jpeg',
    tag: ['#세상 무서운 고양이', '#굳냥이'],
  },
  {
    id: 1,
    title: '[블랙 프라이데이] 소주 패키지',
    price: '',
    src: './images/alcohol-pic/blackfriday.jpeg',
    tag: ['#소주만 구성된 패키지', '#11월 14일 출고 시작!'],
  },
  {
    id: 2,
    title: '[블랙 프라이데이] 노다지 패키지',
    price: '',
    src: './images/alcohol-pic/pakage.jpeg',
    tag: ['#주종별 구성된 패키지', '#11월 14일 출고 시작!'],
  },
  {
    id: 3,
    title: '[3차 수량 오픈] 12/07(수)~ 순차출고/막쿠르트 [2입/4입] 막쿠르트',
    price: '13000',
    src: './images/alcohol-pic/makurute.jpeg',
    tag: ['#야쿠르트와 막걸리의 만남', '#한국야쿠르트'],
  },
  {
    id: 4,
    title: '바텐더의 막걸리',
    price: '9000',
    src: './images/alcohol-pic/bartender.jpeg',
    tag: ['#바텐더도 마시는 막걸리', '#소화에 좋아요'],
  },
  {
    id: 5,
    title: '유채꽃, 제주',
    price: '12000',
    src: './images/alcohol-pic/canola.jpeg',
    tag: ['#유채꽃 필 무렵', '#제주'],
  },
  {
    id: 6,
    title: '안동 국화주 32%',
    price: '10620',
    src: './images/alcohol-pic/chrysanthemum.jpeg',
    tag: ['#술이 들어간다', '#술술술 술술'],
  },
  {
    id: 7,
    title: '커피냑',
    price: '18000',
    src: './images/alcohol-pic/coffee.jpeg',
    tag: ['#술이 들어간다', '#술술술 술술'],
  },
  {
    id: 8,
    title: '당진소주',
    price: '6500',
    src: './images/alcohol-pic/dangjin.jpeg',
    tag: ['#술이 들어간다', '#술술술 술술'],
  },
  {
    id: 9,
    title: '혼디주',
    price: '8000',
    src: './images/alcohol-pic/hondi.jpeg',
    tag: ['#술이 들어간다', '#술술술 술술'],
  },
  {
    id: 10,
    title: '샤토미소 웨딩 자두와인',
    price: '22000',
    src: './images/alcohol-pic/jadu.jpeg',
    tag: ['#술이 들어간다', '#술술술 술술'],
  },
  {
    id: 11,
    title: '동백꽃,제주',
    price: '12000',
    src: './images/alcohol-pic/jeju.jpeg',
    tag: ['#술이 들어간다', '#술술술 술술'],
  },
  {
    id: 12,
    title: '진도 아리랑 홍주 40%',
    price: '17900',
    src: './images/alcohol-pic/arirang.jpeg',
    tag: ['#술이 들어간다', '#술술술 술술'],
  },
  {
    id: 13,
    title: '우주멜론미 X 3병',
    price: '24000',
    src: './images/alcohol-pic/melon.jpeg',
    tag: ['#술이 들어간다', '#술술술 술술'],
  },
  {
    id: 14,
    title: '모리',
    price: '9800',
    src: './images/alcohol-pic/mori.jpeg',
    tag: ['#술이 들어간다', '#술술술 술술'],
  },
  {
    id: 15,
    title: '니모메',
    price: '11000',
    src: './images/alcohol-pic/nimome.jpeg',
    tag: ['#술이 들어간다', '#술술술 술술'],
  },
  {
    id: 16,
    title: '오산 막걸리 [3병/12병]',
    price: '12000',
    src: './images/alcohol-pic/osan.jpeg',
    tag: ['#술이 들어간다', '#술술술 술술'],
  },
  {
    id: 17,
    title: '가방에 담화가세요 (부직포 가방)',
    price: '',
    src: './images/alcohol-pic/packing.jpeg',
    tag: ['#술이 들어간다', '#술술술 술술'],
  },
  {
    id: 18,
    title: '붉은 원숭이',
    price: '9000',
    src: './images/alcohol-pic/red-monky.jpeg',
    tag: ['#술이 들어간다', '#술술술 술술'],
  },
  {
    id: 19,
    title: '우렁이쌀 청주',
    price: '16000',
    src: './images/alcohol-pic/rice.jpeg',
    tag: ['#술이 들어간다', '#술술술 술술'],
  },
  {
    id: 20,
    title: '편백숲 산소막걸리 딸기 스파클링',
    price: '14000',
    src: './images/alcohol-pic/strawberry.jpeg',
    tag: ['#술이 들어간다', '#술술술 술술'],
  },
];
