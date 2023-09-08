import { combineReducers, configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./movies/movieSlice";

const rootReducer = combineReducers({
  movies: moviesSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
