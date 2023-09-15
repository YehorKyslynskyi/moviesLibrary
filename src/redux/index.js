import { combineReducers, configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./movies/movieSlice";
import appSlice from "./app/appSlice";

const rootReducer = combineReducers({
  movies: moviesSlice,
  app: appSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
