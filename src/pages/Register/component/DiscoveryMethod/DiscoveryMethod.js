import React, { useState } from 'react';
import './DiscoveryMethod.scss';

const DiscoveryMethod = () => {
  return (
    <div className="discovery-wrap">
      <div className="discovery-question">
        술담화를 어떻게 알게 되셨나요? 😎
      </div>
      <select className="discovery-method">
        {DISCOVERYMETHOD.map((method, index) => (
          <option key={index} value={method}>
            {method}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DiscoveryMethod;

const DISCOVERYMETHOD = [
  '선택해주세요',
  '지인소개',
  '인스타그램',
  '페이스북',
  '유투브',
  '검색',
  '블로그',
  '기사/언론',
  '기타',
];
