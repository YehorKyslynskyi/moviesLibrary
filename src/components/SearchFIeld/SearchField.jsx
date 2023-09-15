import React, { useState, useTransition, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFoundMovies,
  setSearchMovieQuery,
  fetchFoundTVSeries,
} from "../../redux/movies/actionCreators";
import searchIcon from "../../images/icon.webp";
import { useLocation } from "react-router-dom";
import styles from "./searchField.module.scss";

const SearchField = () => {
  const [isPending, startTransition] = useTransition();
  const foundMovies = useSelector((state) => state.movies.foundMovies);
  const movies = useSelector((state) => state.movies.movies);
  const searchQuery = useSelector((state) => state.movies.searchMovieQuery);
  const dispatch = useDispatch();

  const [activeSearch, setActiveSearch] = useState(false);

  const location = useLocation();
  const isMoviesPage = location.pathname === "/movies";
  const isTVSeriesPage = location.pathname === "/tvseries";

  useEffect(() => {
    dispatch(setSearchMovieQuery(""));
    setActiveSearch(false);
    if (!isMoviesPage) {
      dispatch(fetchFoundTVSeries(""));
    }
    if (!isTVSeriesPage) {
      dispatch(fetchFoundMovies(""));
    }
  }, [location, dispatch]);
  const onChange = (e) => {
    startTransition(() => {
      e.preventDefault();
      if (e.target.value !== "") {
        setActiveSearch(true);
      }

      dispatch(setSearchMovieQuery(e.target.value));

      if (isMoviesPage) {
        dispatch(fetchFoundMovies(e.target.value));
      }
      if (isTVSeriesPage) {
        dispatch(fetchFoundTVSeries(e.target.value));
      }
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isMoviesPage) {
      dispatch(fetchFoundMovies(searchQuery));
    }
    if (isTVSeriesPage) {
      dispatch(fetchFoundTVSeries(searchQuery));
    }
  };

  const mouseEnter = () => {
    setActiveSearch(true);
  };

  const mouseLeave = () => {
    if (searchQuery === "") {
      setActiveSearch(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.box}>
      <input
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        className={activeSearch === false ? styles.input : styles.activeInput}
        type="text"
        name="txt"
        value={searchQuery}
        onChange={onChange}
      />
      <img className={styles.searchImage} src={searchIcon} alt="" />
    </form>
  );
};

export default SearchField;
