import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZGI5MWM1M2ExMTRhYThlYjE2NjhkY2VhNjFiNzBjYiIsInN1YiI6IjY0ZTVkZjhjMGI1ZmQ2MDBjOGZlYzEzMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YreWAShGuVVhAe1U-BGBib5XswgGw9V9zhy2X0vb1rE";

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
  accept: "application/json",
};

export const API_MOVIE = "/movie/popular";

export const API_IMG = "https://image.tmdb.org/t/p/w500";

export const API_MOVIE_GENRES = "/genre/movie/list";

export const API_TVSERIES_GENRES = "/genre/tv/list";

export const API_MOVIE_SEARCH =
  "/search/movie?langauge=en-US&page=1&include_adult=false&query=";
export const API_TV_SEARCH =
  "/search/tv?include_adult=false&language=en-US&page=1&query=";

export const fetchApiData = async (url, params) => {
  try {
    const data = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};