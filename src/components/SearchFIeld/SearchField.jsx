import React, { useState, useTransition, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFoundMovies,
  fetchMovies,
  setSearchMovieQuery,
  fetchFoundTVSeries,
} from "../../redux/movies/actionCreators";
import searchIcon from "../../images/icon.webp";
import { useLocation } from "react-router-dom";
import styles from "./searchField.module.scss";

const SearchField = () => {
  const [isPaending, startTransition] = useTransition();
  const foundMovies = useSelector((state) => state.movies.foundMovies);
  const movies = useSelector((state) => state.movies.movies);
  const searchQuery = useSelector((state) => state.movies.searchMovieQuery);
  const dispatch = useDispatch();

  const [activeSearch, setActiveSearch] = useState(false);
  const currentPath = window.location.pathname;
  const location = useLocation();

  useEffect(() => {
    dispatch(setSearchMovieQuery(""));
    setActiveSearch(false);
  }, [location, dispatch]);
  const onChange = (e) => {
    startTransition(() => {
      e.preventDefault();
      if (e.target.value !== "") {
        setActiveSearch(true);
      }

      dispatch(setSearchMovieQuery(e.target.value));

      if (currentPath === "/movies") {
        dispatch(fetchFoundMovies(e.target.value));
      }
      if (currentPath === "/tvseries") {
        dispatch(fetchFoundTVSeries(e.target.value));
      }
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentPath === "/movies") {
      dispatch(fetchFoundMovies(searchQuery));
    }
    if (currentPath === "/tvseries") {
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
