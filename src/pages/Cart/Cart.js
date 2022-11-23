import React, { useEffect, useState } from 'react';
import CartItem from './CartItem';
import './Cart.scss';

const Cart = () => {
  const [cartItemList, setCartItemList] = useState([]);
  //`http://10.58.52.205:3000/carts/1`
  useEffect(() => {
    // mock data fetch
    fetch('data/cartData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setCartItemList(data);
      });
  }, []);

  // 총 주문 수량 계산
  const calTotalAmount = arr => {
    if (arr) {
      let totalAmount = 0;
      for (let i = 0; i < arr.length; i++) {
        totalAmount = totalAmount + arr[i].amount;
      }
      return totalAmount;
    }
  };

  // 총 주문 가격 계산
  const calTotalPrice = arr => {
    if (arr) {
      let priceTotal = 0;
      for (let i = 0; i < arr.length; i++) {
        const price = arr[i].amount * arr[i].productPrice;
        priceTotal = priceTotal + price;
      }
      return priceTotal;
    }
  };

  const totalAmount = calTotalAmount(cartItemList);
  const totalPrice = calTotalPrice(cartItemList);

  return (
    <div className="container">
      <div className="top-item-wrapper"></div>
      <div className="whole-wrapper">
        <div className="leftSide">
          {cartItemList.map((obj, index) => (
            <CartItem
              itemInfo={obj}
              key={index}
              setCartItemList={setCartItemList}
              cartItemList={cartItemList}
              deleteItem={function deleteComment() {
                const deletedItem = [...cartItemList];
                deletedItem.splice(index, 1);
                setCartItemList(deletedItem);
              }}
            />
          ))}
        </div>
        <div className="rightSide">
          <div className="bill">
            <div className="title">계산서</div>
            <div className="solid-top" />
            <div className="content">
              <div className="row">
                <div>총 상품금액</div>
                <div className="price">{totalPrice.toLocaleString()}원</div>
              </div>
              <div className="row">
                <div>총 즉시할인금액</div>
                <div className="price">0원</div>
              </div>
              <div className="row">
                <div>총 배송비</div>
                <div className="price">0원</div>
              </div>
              <div className="info">
                <div className="info-icon">
                  <img className="infoIcon" />
                </div>
                <div className="info-text">
                  제주도 및 도서산간의 경우 배송비가 추가될 수 있습니다
                </div>
              </div>
            </div>
            <div className="solid-bottom"></div>
            <div className="footer">
              <div>총 결제 예상 금액</div>
              <span className="Fprice">{totalPrice}원</span>
            </div>
          </div>
          <div className="action-button-wrapper">
            <div className="btn-left">
              <div open className="open-btn">
                여러 명도 가능해요
                <div className="close-btn">
                  <img
                    className="closeBtn"
                    src="./images/kunwooSample/tooltip_close.png"
                  />
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
            <button className="purchase-btn">구매하기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
