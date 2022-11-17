import React from 'react';

import Rightside from './Rightside';
import Leftside from './Leftside';
import './ProductDetail.scss';

const ProductDetail = () => {
  return (
    <>
      <div className="container">
        <div className="detail-main">
          <Leftside />

          <Rightside />
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
