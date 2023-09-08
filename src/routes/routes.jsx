import Layout from "../components/Layout";
import { createBrowserRouter } from "react-router-dom";
import MoviesPage from "../components/MoviesPage/MoviesPage";
import TVSeriesPage from "../components/TVSeriesPage/TVSeriesPage";

export const ROUTES = {
  mainPage: "/",
  moviesPage: "/movies",
  tvSeriesPage: "/tvseries",
};

export const router = createBrowserRouter([
  {
    path: ROUTES.mainPage,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MoviesPage />,
      },
    ],
  },

  {
    path: ROUTES.moviesPage,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MoviesPage />,
      },
    ],
  },

  {
    path: ROUTES.tvSeriesPage,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <TVSeriesPage />,
      },
    ],
  },
]);
