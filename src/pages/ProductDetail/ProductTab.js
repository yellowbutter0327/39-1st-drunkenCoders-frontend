import React, { useState } from 'react';
import styles from './ProductTab.scss';

const ProductTab = () => {
  const data = [
    {
      id: 0,
      title: '리뷰',
      src: '/images/kunwooSample/sample.png',
    },
    {
      id: 1,
      title: '상품정보',
      src: './images/kunwooSample/sample.png',
    },
    {
      id: 2,
      title: '교환/반품',
      src: './images/kunwooSample/sample.png',
    },
  ];
  const [index, setIndex] = useState(0);
  return (
    <section className={styles.tabContainer}>
      <ul className={styles.tabMenu}>
        {data.map(item => (
          <li
            key={item.id}
            className={index === item.id ? styles.active : null}
            onClick={() => setIndex(item.id)}
          >
            {item.title}
          </li>
        ))}
      </ul>
      {data
        .filter(item => index === item.id)
        .map(item => (
          <div className={styles.tabContent}>{item.src}</div>
        ))}
    </section>
  );
};

export default ProductTab;
