import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './Dropdown.scss';

const Dropdown = () => {
  // const location = useLocation();

  // const url = location.search;

  const [currDropdown, setCurrDropdown] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState();

  // const listId = searchParams.get('id');

  // 1. filter 클릭 시 이미 존재하는 값이면 제거, 없으면 추가 (.set)
  // 2. useEffect에서 searchParams가 변할 때마다(의존성 배열) fetch 요청(searchParams를 토대로)

  useEffect(() => {
    // fetch(`/products?${searchParams.toString()}`)
    // fetch(`/filters}`)
    fetch(`http://10.58.52.122:3000//products/all?${searchParams.toString()}`)
      .then(response => response.json())
      .then(result => {
        setData(result.data);
        console.log(data);
      });
  }, []);

  // if (data.length === 0) return;

  // // 예전 코드
  const handleDropdown = title => {
    if (title === currDropdown) {
      setCurrDropdown('');
    } else {
      setCurrDropdown(title);
    }
  };

  return (
    <div>
      {data.map(filter => (
        <div key={filter.id}>
          <ul className="drop-btn" onClick={() => handleDropdown(filter.name)}>
            {filter.name}
            {currDropdown === filter.name ? '<' : '>'}
            {currDropdown === filter.name &&
              filter.type.map(type => (
                <button
                  key={type}
                  onClick={() => {
                    searchParams.append('key', type);
                    setSearchParams(searchParams);
                  }}
                >
                  {/* {type} */}
                </button>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Dropdown;

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
//
