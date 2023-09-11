import React, { useEffect } from "react";
import {
  fetchMovieById,
  fetchTVSeriesById,
} from "../../redux/movies/actionCreators";
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

  return (
    <div>
      <div></div>
    </div>
  );
};
export default MovieFullPage;
