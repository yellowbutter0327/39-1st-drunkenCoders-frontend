import React from 'react';
import { useSearchParams } from 'react-router-dom';
import './Dropdown.scss';

const Dropdown = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const filterParams = id => {
    searchParams.set('cate_id', id);
    searchParams.set('sweetness', id);
    searchParams.set('sourness', id);
    searchParams.set('carbon', id);
    searchParams.set('fruits', id);
    searchParams.set('flowers', id);
    searchParams.set('grains', id);
    setSearchParams(searchParams);
  };
  return (
    <ul>
      {filterList.map(filterItem => (
        <button key={filterItem.id}>
          {filterItem.title}
          {filterItem.type.map(type => (
            <button key={type.id} onClick={() => filterParams(type.id)}>
              <br />
              <p>{type.option}</p>
              <br />
            </button>
          ))}
        </button>
      ))}
    </ul>
  );
};

export default Dropdown;

// const juzong = [
//   {
//     id: 0,
//     name: '탁주',
//   },
//   {
//     id: 1,
//     name: '발효주',
//   },
//   {
//     id: 2,
//     name: '청주',
//   },
//   {
//     id: 3,
//     name: '증류주',
//   },
// ];

// const danmat = [
//   {
//     id: 0,
//     name: '달',
//   },
//   {
//     id: 1,
//     name: '달달',
//   },
//   {
//     id: 2,
//     name: '달달달',
//   },
// ];

// const sinmat = [
//   {
//     id: 0,
//     name: '신',
//   },
//   {
//     id: 1,
//     name: '신신',
//   },
//   {
//     id: 2,
//     name: '신신신',
//   },
// ];

const filterList = [
  {
    id: 0,
    title: '주종',
    type: [
      { id: 1, option: '탁주' },
      { id: 2, option: '청주' },
      { id: 3, option: '과실주' },
      { id: 4, option: '증류주' },
    ],
  },
  {
    id: 1,
    title: '단맛',
    type: [
      { id: 1, option: '약' },
      { id: 2, option: '중' },
      { id: 3, option: '강' },
    ],
  },
  {
    id: 2,
    title: '신맛',
    type: [
      { id: 1, option: '약' },
      { id: 2, option: '중' },
      { id: 3, option: '강' },
    ],
  },
  {
    id: 3,
    title: '탄산',
    type: [
      { id: 1, option: '약' },
      { id: 2, option: '중' },
      { id: 3, option: '강' },
    ],
  },
  {
    id: 4,
    title: '과일',
    type: [
      { id: 1, option: '포도' },
      { id: 2, option: '배' },
      { id: 3, option: '매실' },
      { id: 4, option: '사과' },
      { id: 5, option: '베리' },
    ],
  },
  {
    id: 5,
    title: '꽃',
    type: [
      { id: 1, option: '국화' },
      { id: 2, option: '유채' },
      { id: 3, option: '동백꽃' },
      { id: 4, option: '매화' },
      { id: 5, option: '진달래' },
    ],
  },
  {
    id: 6,
    title: '곡물',
    type: [
      { id: 1, option: '땅콩' },
      { id: 2, option: '밤' },
      { id: 3, option: '사탕수수' },
      { id: 4, option: '고구마' },
      { id: 5, option: '보리' },
    ],
  },
];
