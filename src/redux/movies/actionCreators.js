import {
  API_POPULAR_MOVIE,
  API_UPCOMING_MOVIE,
  API_MOVIE_GENRES,
  fetchApiData,
  API_MOVIE_SEARCH,
  API_TV_SEARCH,
  API_TV_SERIES_GENRES,
  API_FIND_BY_ID,
  API_FIND_BY_ID_PARAMS,
  API_FIND_TV_BY_ID,
} from "../../API/API";
import { movieSlice } from "./movieSlice";

export const fetchPopularMovies = () => async (dispatch) => {
  try {
    dispatch(movieSlice.actions.fetching());
    fetchApiData(API_POPULAR_MOVIE).then((response) => {
      dispatch(
        movieSlice.actions.popularMoviesFetchingSuccess(response.results)
      );
    });
  } catch (e) {
    dispatch(movieSlice.actions.fetchingError(e.message));
  }
};

export const fetchUpcomingMovies = () => async (dispatch) => {
  try {
    dispatch(movieSlice.actions.fetching());
    fetchApiData(API_UPCOMING_MOVIE).then((response) => {
      dispatch(
        movieSlice.actions.upcomingMoviesFetchingSuccess(response.results)
      );
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
    fetchApiData(API_TV_SERIES_GENRES).then((response) => {
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

export const fetchMovieById = (id) => async (dispatch) => {
  try {
    dispatch(movieSlice.actions.fetching());
    fetchApiData(API_FIND_BY_ID + id + API_FIND_BY_ID_PARAMS).then(
      (response) => {
        dispatch(movieSlice.actions.currentMovieFetchingSuccess(response));
        /* console.log(response); */
      }
    );
  } catch (e) {
    dispatch(movieSlice.actions.fetchingError(e.message));
  }
};

export const fetchTVSeriesById = (id) => async (dispatch) => {
  try {
    dispatch(movieSlice.actions.fetching());
    fetchApiData(API_FIND_TV_BY_ID + id + API_FIND_BY_ID_PARAMS).then(
      (response) => {
        dispatch(movieSlice.actions.currentTVSeriesFetchingSuccess(response));
        /* console.log(response); */
      }
    );
  } catch (e) {
    dispatch(movieSlice.actions.fetchingError(e.message));
  }
};
