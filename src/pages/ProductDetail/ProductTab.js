import React, { useState } from 'react';
import './ProductTab.scss';

const ProductTab = () => {
  const data = [
    {
      id: 0,
      title: '상품정보',
      src: './images/kunwooSample/productInfo.png',
    },
    {
      id: 1,
      title: '교환/반품',
      src: './images/kunwooSample/change.png',
    },
  ];
  const [index, setIndex] = useState(0);
  return (
    <section className="tab">
      <div className="tab-menu">
        {data.map(item => (
          <div className="tabtab">
            <button
              key={item.id}
              className={index === item.id ? 'btn' : 'btn-white'}
              onClick={() => setIndex(item.id)}
            >
              {item.title}
            </button>
          </div>
        ))}
      </div>
      {data
        .filter(item => index === item.id)
        .map(item => (
          <div className="tab-content">
            <img src={item.src} />
          </div>
        ))}
    </section>
  );
};

export default ProductTab;
