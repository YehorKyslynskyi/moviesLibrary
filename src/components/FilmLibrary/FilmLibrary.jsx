import React, { useEffect } from "react";
import LibraryItem from "../LibraryItem/LibraryItem";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovies,
  fetchMovieGenres,
  fetchTVSeriesGenres,
} from "../../redux/movies/actionCreators";
import { AnimatePresence, motion } from "framer-motion";

import styles from "./filmLibrary.module.scss";

const FilmLibrary = () => {
  const movies = useSelector((state) => state.movies.movies);
  const foundMovies = useSelector((state) => state.movies.foundMovies);
  const foundTVSeries = useSelector((state) => state.movies.foundTVSeries);
  const dispatch = useDispatch();
  const currentPath = window.location.pathname;

  useEffect(() => {
    dispatch(fetchMovies());
    dispatch(fetchMovieGenres());
    dispatch(fetchTVSeriesGenres());
  }, [dispatch]);

  console.log(foundTVSeries);

  return (
    <div className={styles.filmLibraryContainer}>
      <div className={styles.title}>
        {currentPath === "/" ? "Popular movies" : "Search results"}
      </div>

      <div className={styles.filmLibrary}>
        <AnimatePresence>
          {(() => {
            switch (true) {
              case currentPath === "/":
                {
                  return movies.map((movie) => (
                    <motion.div
                      key={movie.id}
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <LibraryItem {...movie} />
                    </motion.div>
                  ));
                }
                break;

              case currentPath === "/movies":
                {
                  return foundMovies.map((movie) => (
                    <motion.div
                      key={movie.id}
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <LibraryItem {...movie} />
                    </motion.div>
                  ));
                }
                break;

              case currentPath === "/tvseries":
                {
                  return foundTVSeries.map((movie) => (
                    <motion.div
                      key={movie.id}
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <LibraryItem {...movie} />
                    </motion.div>
                  ));
                }
                break;
            }
          })()}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FilmLibrary;
