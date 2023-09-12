import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./listOfMovies.module.scss";
import LibraryItem from "../LibraryItem/LibraryItem";

const ListOfMovies = ({ movies }) => {
  return (
    <div className={styles.listOfMovies}>
      <AnimatePresence>
        {movies.map((movie) => (
          <motion.div
            className={styles.motion}
            key={movie.id}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <LibraryItem {...movie} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ListOfMovies;
