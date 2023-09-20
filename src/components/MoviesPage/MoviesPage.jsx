import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListOfMovies from "../ListOfMovies/ListOfMovies";
import { API_IMG, API_IMG_POSTER_PARAMS } from "../../API/API";
import {
  fetchPopularMovies,
  fetchMovieGenres,
  fetchUpcomingMovies,
} from "../../redux/movies/actionCreators";
import ContentWrapper from "../helpers/ContentWrapper/ContentWrapper";
import ContentSwitcher from "../helpers/ContentSwitcher/ContentSwitcher";

import styles from "./moviesPage.module.scss";
import SearchArrow from "../helpers/SearchArrow/SearchArrow";
const MoviesPage = () => {
  const isHomePage = window.location.pathname === "/";
  const dispatch = useDispatch();
  const [activeButton, setActiveButton] = useState("Popular Movies");
  const isPopularMovies = activeButton === "Popular Movies";
  const movies = useSelector((state) =>
    isHomePage
      ? isPopularMovies
        ? state.movies.popularMovies
        : state.movies.upcomingMovies
      : state.movies.foundMovies
  );

  const moviesGenres = useSelector((state) => state.movies.moviesGenres);

  useEffect(() => {
    if (isHomePage) {
      isPopularMovies
        ? dispatch(fetchPopularMovies())
        : dispatch(fetchUpcomingMovies());
    }
    dispatch(fetchMovieGenres());
  }, [dispatch, isHomePage, isPopularMovies]);

  const formatMovies = (movies) => {
    return movies?.map((movie) => ({
      ...movie,
      isMovie: true,
      posterPath:
        movie.poster_path === null || undefined || ""
          ? null
          : API_IMG + API_IMG_POSTER_PARAMS + movie.poster_path,
      voteAverage: movie.vote_average.toFixed(1),
      genres: getMovieGenres(movie).join(" "),
      releaseDate: new Date(Date.parse(movie.release_date)).getFullYear(),
    }));
  };

  const getMovieGenres = (movie) => {
    const itemGenres = [];
    for (let i = 0; i < movie.genre_ids.length; i++) {
      for (let j = 0; j < moviesGenres.length; j++) {
        if (movie.genre_ids[i] === moviesGenres[j].id) {
          itemGenres.push(moviesGenres[j].name);
        }
      }
    }
    return itemGenres;
  };

  const formattedMovies = useMemo(() => formatMovies(movies));

  return (
    <ContentWrapper>
      <div className={styles.shadowWrapper}>
        {isHomePage ? (
          <ContentSwitcher
            setActiveButton={setActiveButton}
            isPopularMovies={isPopularMovies}
          ></ContentSwitcher>
        ) : movies.length ? (
          <div className={styles.title}>Found Movies</div>
        ) : (
          <SearchArrow>Start searching for a movie</SearchArrow>
        )}

        <ListOfMovies movies={formattedMovies} />
      </div>
    </ContentWrapper>
  );
};

export default MoviesPage;
