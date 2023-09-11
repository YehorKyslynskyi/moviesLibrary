import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListOfMovies from "../ListOfMovies/ListOfMovies";
import { API_IMG } from "../../API/API";
import {
  fetchMovies,
  fetchMovieGenres,
} from "../../redux/movies/actionCreators";

import styles from "./moviesPage.module.scss";

const MoviesPage = () => {
  const isHomePage = window.location.pathname === "/";
  const dispatch = useDispatch();
  const movies = useSelector((state) =>
    isHomePage ? state.movies.movies : state.movies.foundMovies
  );
  const moviesGenres = useSelector((state) => state.movies.moviesGenres);
  useEffect(() => {
    if (isHomePage) {
      dispatch(fetchMovies());
    }
    dispatch(fetchMovieGenres());
  }, [dispatch]);

  const formatMovies = (movies) => {
    return movies.map((movie) => ({
      ...movie,
      isMovie: true,
      posterPath:
        movie.poster_path === null || undefined || ""
          ? null
          : API_IMG + movie.poster_path,
      voteAverage: movie.vote_average.toFixed(1),
      ganres: getMovieGanres(movie).join(" "),
      releaseDate: new Date(Date.parse(movie.release_date)).getFullYear(),
    }));
  };

  const getMovieGanres = (movie) => {
    const itemGanres = [];
    for (let i = 0; i < movie.genre_ids.length; i++) {
      for (let j = 0; j < moviesGenres.length; j++) {
        if (movie.genre_ids[i] === moviesGenres[j].id) {
          itemGanres.push(moviesGenres[j].name);
        }
      }
    }
    return itemGanres;
  };

  const formattedMovies = useMemo(() => formatMovies(movies));

  return (
    <div className={styles.popularMoviesContainer}>
      <div className={styles.title}>
        {isHomePage ? "Popular Movies" : "Found Movies"}
      </div>
      <ListOfMovies movies={formattedMovies} />
    </div>
  );
};

export default MoviesPage;
