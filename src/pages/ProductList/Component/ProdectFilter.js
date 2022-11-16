import React from 'react';
import FilterSelector from './FilterSelector';
// const [isActive, setIsActive] = useState('false');

const ProductFilter = roops => {
  return (
    // 필터 박스
    <div className="filter-box">
      <FilterSelector />
    </div>
  );
};

export default ProductFilter;
