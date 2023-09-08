import {
  API_MOVIE,
  API_MOVIE_GENRES,
  fetchApiData,
  API_MOVIE_SEARCH,
  API_TV_SEARCH,
  API_TVSERIES_GENRES,
} from "../../API/API";
import { movieSlice } from "./movieSlice";

export const fetchMovies = () => async (dispatch) => {
  try {
    dispatch(movieSlice.actions.fetching());
    fetchApiData(API_MOVIE).then((response) => {
      dispatch(movieSlice.actions.moviesFetchingSuccess(response.results));
    });
  } catch (e) {
    dispatch(movieSlice.actions.fetchingError(e.message));
  }
};

export const fetchMovieGenres = () => async (dispatch) => {
  try {
    dispatch(movieSlice.actions.fetching());
    fetchApiData(API_MOVIE_GENRES).then((response) => {
      dispatch(movieSlice.actions.moviesGenresFetchingSuccess(response.genres));
    });
  } catch (e) {
    dispatch(movieSlice.actions.fetchingError(e.message));
  }
};

export const fetchTVSeriesGenres = () => async (dispatch) => {
  try {
    dispatch(movieSlice.actions.fetching());
    fetchApiData(API_TVSERIES_GENRES).then((response) => {
      dispatch(
        movieSlice.actions.tvSeriesGenresFetchingSuccess(response.genres)
      );
    });
  } catch (e) {
    dispatch(movieSlice.actions.fetchingError(e.message));
  }
};

export const fetchFoundMovies = (searchValue) => async (dispatch) => {
  try {
    dispatch(movieSlice.actions.fetching());
    fetchApiData(API_MOVIE_SEARCH + searchValue).then((response) => {
      dispatch(movieSlice.actions.foundMoviesFetchingSuccess(response.results));
    });
  } catch (e) {
    dispatch(movieSlice.actions.fetchingError(e.message));
  }
};

export const fetchFoundTVSeries = (searchValue) => async (dispatch) => {
  try {
    dispatch(movieSlice.actions.fetching());
    fetchApiData(API_TV_SEARCH + searchValue).then((response) => {
      dispatch(
        movieSlice.actions.foundTVSeriesFetchingSuccess(response.results)
      );
    });
  } catch (e) {
    dispatch(movieSlice.actions.fetchingError(e.message));
  }
};

export const setSearchMovieQuery = (query) => async (dispatch) => {
  try {
    dispatch(movieSlice.actions.settingSearchMovieQuery(query));
  } catch (e) {
    console.log(e);
  }
};
