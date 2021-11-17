import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  resetFilters,
  setFilters as setFiltersAction,
} from "../app/filterSlice";

const useFilter = () => {
  const [filters, setFilters] = useState({});
  const [delayedSearch, setDelayedSearch] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { genres, search, type, status, sort, order_by } = useSelector(
    (state) => state.filter
  );

  useEffect(() => {
    const queryObj = {
      ...(genres.length !== 0 && { genres: genres.toString() }),
      ...(type && { type: type }),
      ...(status && { status: status }),
      ...(sort && { sort: sort }),
      ...(order_by && { order_by: order_by }),
    };

    const timeOutId = setTimeout(() => setDelayedSearch(search), 1500);

    setFilters({
      ...queryObj,
      ...(search && { q: delayedSearch }),
    });

    if (location.pathname !== "/") {
      setSearchParams({
        ...queryObj,
        ...(search && { q: delayedSearch }),
      });
    }

    return () => clearTimeout(timeOutId);
  }, [search, genres, type, status, sort, delayedSearch, location.pathname]);

  const filterRedirect = () => {
    if (location.pathname === "/") {
      setTimeout(() => {
        navigate("/search/anime");
      }, 1000);
    }
  };

  const resetFilter = () => {
    dispatch(resetFilters);
  };

  const topContent = (contentType) => {
    resetFilter();
    console.log("yo");
    navigate(`/search/${contentType}`);
    dispatch(setFiltersAction({ type: "order_by", value: "score" }));
  };

  return { filterRedirect, topContent };
};

export default useFilter;
