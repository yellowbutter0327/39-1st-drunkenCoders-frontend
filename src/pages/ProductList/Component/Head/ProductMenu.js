import React, { useEffect, useState } from 'react';
import './ProductMenu.scss';

const ProductMenu = () => {
  const [menuList, setMenuList] = useState([]);

  useEffect(() => {
    fetch('/data/MenuData.json')
      .then(response => response.json())
      .then(result => setMenuList(result));
  }, []);

  const [menuValue, setMenuValue] = useState([]);

  useEffect(() => {
    fetch('/data/MenuData.json')
      .then(response => response.json())
      .then(result => setMenuValue(result));
  }, []);

  return (
    <div className="menu-wrapper">
      <ul className="menu-list">
        <li className="menu-item">
          {menuList.map(menuItme => (
            <div key={menuItme.id} className="menu-name">
              <button
                className={
                  menuList === menuItme.id[''] ? 'turn-on-btn' : 'turn-off-btn'
                }
                onClick={() => setMenuList(menuItme.id)}
              >
                {menuItme.title}
              </button>
              <div
                className={
                  menuList === menuItme.id ? 'turn-on-light' : 'turn-off-light'
                }
              />
            </div>
          ))}
        </li>
      </ul>
      <div className="header-wrapper">
        {menuValue.map(menuItem => (
          <div key={menuItem} className="header-box">
            <div className="header-title-box">
              <div className="header-title"> {menuItem.title} </div>
              <div className="header-subtitle"> {menuItem.description} </div>
            </div>
            <div className="icon-wrapper">
              <img
                className="icon-img"
                src="/images/sooldamhwa-logo.png"
                alt="logo"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductMenu;
