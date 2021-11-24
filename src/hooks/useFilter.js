import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams, useLocation, useNavigate } from "react-router-dom";

const useFilter = () => {
  const [delayedSearch, setDelayedSearch] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();

  const { genres, search, type, status, sort, order_by } = useSelector(
    (state) => state.filter
  );

  useEffect(() => {
    console.log("Component Mount");
    const queryObj = {
      ...(genres.length !== 0 && { genres: genres.toString() }),
      ...(type && { type: type }),
      ...(status && { status: status }),
      ...(sort && { sort: sort }),
      ...(order_by && { order_by: order_by }),
    };

    const timeOutId = setTimeout(() => setDelayedSearch(search), 1500);

    if (location.pathname !== "/") {
      setSearchParams({
        ...queryObj,
        ...(search && { q: delayedSearch }),
      });
    }

    return () => {
      console.log("Component Unmount");
      clearTimeout(timeOutId);
    };
  }, [
    search,
    genres,
    type,
    status,
    sort,
    delayedSearch,
    location.pathname,
    order_by,
    setSearchParams,
  ]);

  const filterRedirect = (type) => {
    if (location.pathname !== "/search/anime") {
      setTimeout(() => {
        navigate(type ? `/search/${type}` : "/search/anime");
      }, 1000);
    }
  };

  return { filterRedirect };
};

export default useFilter;
