import React from 'react';
import { useSearchParams } from 'react-router-dom';
import './Dropdown.scss';

const Dropdown = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const filterParams = id => {
    searchParams.set('cate_id', id);
    setSearchParams(searchParams);
  };

  return (
    <ul>
      {filterList.map(filterItem => (
        <li key={filterItem.id}>
          {filterItem.title}
          {filterItem.type.map(type => (
            <button key={type.id} onClick={() => filterParams(type.id)}>
              <br />
              <p>{type.option}</p>
              <br />
            </button>
          ))}
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;

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
    title: '도수',
    type: ['10%', '20%', '30%'],
  },
  {
    id: 2,
    title: '단맛',
    type: ['1', '2', '3'],
  },
];

// ------------------------------------------------

// import React, { useEffect, useState } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import './Dropdown.scss';

// const Dropdown = () => {
//   // const location = useLocation();

//   // const url = location.search;

//   // const [currDropdown, setCurrDropdown] = useState('');

//   const [searchParams, setSearchParams] = useSearchParams();

//   const filterListParams = () => {
//     searchParams.append('sort');
//     setSearchParams(searchParams);
//   };

//   // const offset = searchParams.get('offset');
//   // const limit = searchParams.get('limit');

//   const [isData, setIsData] = useState([]);

//   // const listId = searchParams.get('id');

//   // 1. filter 클릭 시 이미 존재하는 값이면 제거, 없으면 추가 (.set)
//   // 2. useEffect에서 searchParams가 변할 때마다(의존성 배열) fetch 요청(searchParams를 토대로)

//   useEffect(() => {
//     // fetch(`/products?${searchParams.toString()}`)
//     // fetch(`/filters}`)
//     // fetch(`http://10.58.52.122:3000//products/all?${searchParams.toString()}`)

//     fetch(`http://10.58.52.122:3000/products/all?${searchParams.toString()}`, {
//       method: 'GET',
//     })
//       // ?${searchParams.toString()}
//       // fetch('/data/ProductItemData.json')
//       .then(response => response.json())
//       .then(result => setIsData(result.data));
//   }, []);
//   if (isData.length === 0) return;

//   // 예전 코드
//   // const handleDropdown = () => {
//   //   if (isData.id === isData) {
//   //     setIsData('');
//   //   } else {
//   //     setIsData(isData.id);
//   //   }
//   // };

//   return (
//     <div>
//       <div>
//         {filterList.map(filter => (
//           <ul
//             key={filter.id}
//             className="drop-btn"
//             // onClick={() => handleDropdown(isData.id)}
//           >
//             {filter.title}
//             {isData === filter.id ? '<' : '>'}
//             <li>
//               {' '}
//               {filter.title}
//               <button onClick={filterListParams}>aaa</button>
//             </li>
//           </ul>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Dropdown;

// const filterList = [
//   {
//     id: 0,
//     title: '주종',
//     type: ['탁주', '과실주', '증류주'],
//   },
//   {
//     id: 1,
//     title: '도수',
//     type: ['10%', '20%', '30%'],
//   },
//   {
//     id: 2,
//     title: '단맛',
//     type: ['1', '2', '3'],
//   },
// ];
