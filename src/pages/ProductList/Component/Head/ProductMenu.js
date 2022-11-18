import React, { useState } from 'react';
import './ProductMenu.scss';

const ProductMenu = () => {
  const [menuItem, setMenuItem] = useState('');
  return (
    <div className="menu-wrapper">
      <ul className="menu-list">
        <li className="menu-item">
          {menuData.map(item => (
            <div key={item.id} className="menu-name">
              <button
                className={
                  menuItem === item.id ? 'turn-on-btn' : 'turn-off-btn'
                }
                onClick={() => setMenuItem(item.id)}
              >
                {item.title}
              </button>
              <div
                className={
                  menuItem === item.id ? 'turn-on-light' : 'turn-off-light'
                }
              />
            </div>
          ))}
        </li>
      </ul>
    </div>
  );
};

const menuData = [
  {
    id: 0,
    title: '전체상품',
    description: '담화마켓의 모든 술을 만나보세요!',
    background: 'gray',
    filterLists: [
      { id: 0, title: '주종', options: [{ id: 0, option: '탁주' }] },
      { id: 1, title: '배송', options: [{ id: 0, option: '탁주' }] },
      { id: 2, title: '가격', options: [{ id: 0, option: '탁주' }] },
    ],
  },
  {
    id: 1,
    title: '신상품',
    description: '이번 주 새로 들어온 술들이에요.',
    background: 'rgb(232,242,255)',
    filterLists: [
      { id: 0, title: '주종', options: [{ id: 0, option: '탁주' }] },
      { id: 1, title: '배송', options: [{ id: 0, option: '탁주' }] },
      { id: 2, title: '가격', options: [{ id: 0, option: '탁주' }] },
    ],
  },
  {
    id: 2,
    title: '베스트',
    description: '이번 주 가장 인기가 많은 술',
    background: 'rgb(255,246,232)',
    filterLists: [
      { id: 0, title: '주종', options: [{ id: 0, option: '탁주' }] },
      { id: 1, title: '배송', options: [{ id: 0, option: '탁주' }] },
      { id: 2, title: '가격', options: [{ id: 0, option: '탁주' }] },
    ],
  },
  {
    id: 3,
    title: '담화배송',
    description: '배송비, 이제는 한 번만 내요',
    background: 'rgb(255,246,232)',
    filterLists: [
      { id: 0, title: '주종', options: [{ id: 0, option: '탁주' }] },
      { id: 1, title: '배송', options: [{ id: 0, option: '탁주' }] },
      { id: 2, title: '가격', options: [{ id: 0, option: '탁주' }] },
    ],
  },
  {
    id: 4,
    title: '이벤트',
    description: 'addEventListener(?)',
    background: 'rgb(248,75,56)',
    filterLists: [
      { id: 0, title: '주종', options: [{ id: 0, option: '탁주' }] },
      { id: 1, title: '배송', options: [{ id: 0, option: '탁주' }] },
      { id: 2, title: '가격', options: [{ id: 0, option: '탁주' }] },
    ],
  },
];

export default ProductMenu;
