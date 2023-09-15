import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "movies",
  initialState: {
    popularMovies: [],
    upcomingMovies: [],
    moviesGenres: [],
    tvSeriesGenres: [],
    foundMovies: [],
    foundTVSeries: [],
    currentFullMoviePage: [],
    searchMovieQuery: "",
    isLoading: false,
    error: "",
  },
  reducers: {
    fetching(state) {
      state.isLoading = true;
    },

    fetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    popularMoviesFetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = "";
      state.popularMovies = action.payload;
    },

    upcomingMoviesFetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = "";
      state.upcomingMovies = action.payload;
    },

    moviesGenresFetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = "";
      state.moviesGenres = action.payload;
    },

    tvSeriesGenresFetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = "";
      state.tvSeriesGenres = action.payload;
    },

    foundMoviesFetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = "";
      state.foundMovies = action.payload;
    },

    foundTVSeriesFetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = "";
      state.foundTVSeries = action.payload;
    },

    settingSearchMovieQuery(state, action) {
      state.searchMovieQuery = action.payload;
    },

    currentMovieFetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = "";
      state.currentFullMoviePage = action.payload;
    },
    currentTVSeriesFetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = "";
      state.currentFullMoviePage = action.payload;
    },
  },
});

export default movieSlice.reducer;
