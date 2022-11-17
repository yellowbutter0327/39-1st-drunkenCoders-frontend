import React, { useState } from 'react';
import './ProductMenu.scss';

const ProductMenu = () => {
  const [menuItem, setMenuItem] = useState(0);

  return (
    <div className="munu-wrapper">
      <ul className="menu-list">
        <li className="menu-item">
          {menuData.map(item => (
            <div className="menu-name">
              <button
                key={item.id}
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
  },

  {
    id: 1,
    title: '신상품',
  },

  {
    id: 2,
    title: '베스트',
  },

  {
    id: 3,
    title: '담화배송',
  },

  {
    id: 4,
    title: '이벤트',
  },
];

export default ProductMenu;
