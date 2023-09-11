export const ROUTES = {
  mainPage: "/",
  moviesPage: "/movies",
  tvSeriesPage: "/tvseries",

  movieFullPage: (id, isMovie) => (id ? `/movie/${id}` : `/movie/:movieId`),
};
