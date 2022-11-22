import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Rightside.scss';

const Rightside = () => {
  const [count, setCount] = useState(1);
  const [productPrice, setproductPrice] = useState(productdata[0].price);
  const naviCart = useNavigate();

  const onClickCart = () => {
    naviCart(`/cart/id`);
  };

  const minusCount = () => {
    if (count <= 1) {
      setCount(1);
    } else {
      setCount(count - 1);
      setproductPrice(productPrice - productdata[0].price);
    }
  };

  const plusCount = () => {
    setCount(count + 1);
    setproductPrice(productPrice + productdata[0].price);
  };

  return (
    <div className="right-side">
      <div className="detail-sideBar">
        <div className="label">
          <label>옵션</label>
        </div>
        <div className="select-wrapper">
          <div className="select">
            <select>
              <option value disabled className="placeholder">
                어떤 옵션을 원하시나요?
              </option>
              <option value="202">[500ml] 문희 오지마 가향주</option>
              <option value="203">
                [500ml] 문희 오지마 가향주 X 2병 (+20,000원)
              </option>
              <option value="204">
                [500ml] 문희 오지마 가향주 X 4병 (+53,000원)
              </option>
            </select>
          </div>
        </div>
        <div className="label">
          <label>수량</label>
        </div>
        <div className="select-wrapper-count">
          <div className="select-minus">
            <img
              onClick={minusCount}
              className="img-minus"
              src="./images/kunwooSample/minus.png"
            />
          </div>
          <span className="countDiv">{count}</span>

          <div className="select-plus">
            <img
              onClick={plusCount}
              className="img-plus"
              src="./images/kunwooSample/plus.png"
            />
          </div>
        </div>
        <div className="label">
          <label>총 상품가격</label>
        </div>
        <div className="select-wrapper">
          <span>{productPrice.toLocaleString()}원</span>
        </div>
        <div className="delivery">
          <div className="delivery-icon">
            <img
              className="iconTruck"
              src="./images/kunwooSample/icon_truck.png"
            />
          </div>
          <div className="delivery-info">
            <div>
              <label>(전국택배)</label>
              <label className="price-blue-font">무료</label>
            </div>
            <div>
              <label>(제주도 및 도서산간)</label>
              <label className="price">4,000원</label>
            </div>
          </div>
        </div>
        <div className="btn-wrapper">
          <div className="btn-left">
            <button className="cart-btn">
              <img
                className="icon-img"
                src="./images/kunwooSample/icon_cart.png"
              />
              장바구니
            </button>
          </div>
          <div className="btn-right">
            <div open className="open-btn">
              여러 명도 가능해요
              <div className="close-btn">
                <img src="./images/kunwooSample/tooltip_close.png" />
              </div>
            </div>
            <button className="present-btn">
              <img
                className="icon-img"
                src="./images/kunwooSample/icon_gift_box.png"
              />
              선물하기
            </button>
          </div>
          <button className="purchase-btn">바로 구매하기</button>
        </div>
      </div>
    </div>
  );
};

export default Rightside;

const productdata = [
  {
    price: 26000,
  },
];
