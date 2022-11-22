import { useSearchParams, useLocation } from 'react-router-dom';

const useFilter = () => {
  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();

  const sortFilter = filterName => {
    if (location.search.includes('cate_id')) {
      const cate_id = searchParams.get('cate_id');
      setSearchParams({ filter: `${filterName}`, cate_id });
    } else {
      setSearchParams({ filter: `${filterName}` });
    }
  };

  const showAllFilterData = () => {
    location.search.includes('filter', 'cate_id') &&
      searchParams.delete('filter', 'cate_id');
    setSearchParams(searchParams);
  };

  return { sortFilter, showAllFilterData };
};

export default useFilter;
