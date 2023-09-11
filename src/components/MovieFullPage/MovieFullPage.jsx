import React, { useEffect, useMemo } from "react";
import {
  fetchMovieById,
  fetchTVSeriesById,
} from "../../redux/movies/actionCreators";
import { API_IMG } from "../../API/API";
import { useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./movieFullPage.module.scss";

const MovieFullPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  let location = useLocation();
  const isMovie = location.state.isMovie;
  const currentMovie = useSelector(
    (state) => state.movies.currentFullMoviePage
  );

  useEffect(() => {
    if (isMovie) {
      dispatch(fetchMovieById(params.movieId));
    } else {
      dispatch(fetchTVSeriesById(params.movieId));
    }
  }, [dispatch]);

  console.log(currentMovie);

  const formatGanres = (genres) => {
    return genres.map((genre) => genre.name);
  };

  const formatedCurrentMovie = {
    poster: API_IMG + currentMovie.poster_path,
    title: currentMovie.original_title || currentMovie.name,
    releaseDate:
      new Date(Date.parse(currentMovie.release_date)).getFullYear() ||
      new Date(Date.parse(currentMovie.first_air_date)).getFullYear(),
    tagline: currentMovie.tagline,
    overview: currentMovie.overview,
    genres: formatGanres(currentMovie.genres).join(", "),
  };

  return (
    <div className={styles.movieFullPage}>
      <div className={styles.poster}>
        <img src={formatedCurrentMovie.poster} alt="poster" />
      </div>
      <div className={styles.mainDescriptionWrapper}>
        <div className={styles.mainDescription}>
          <div className={styles.title}>
            {formatedCurrentMovie.title}
            <span>({formatedCurrentMovie.releaseDate})</span>
          </div>
          <div className={styles.genres}>{formatedCurrentMovie.genres}</div>
          <div className={styles.info}>
            <div className={styles.tagline}>{formatedCurrentMovie.tagline}</div>
            <div className={styles.overviewTitle}>Description</div>
            <div className={styles.overview}>
              {formatedCurrentMovie.overview}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieFullPage;
