import React, { useState } from "react";

import styles from "./contentSwitcher.module.scss";
import Button from "../Button/Button";

const ContentSwitcher = ({ setActiveButton, isPopularMovies }) => {
  const onPopularMovies = () => {
    if (!isPopularMovies) {
      setActiveButton("Popular Movies");
    }
  };

  const onUpcomingMovies = () => {
    if (isPopularMovies) {
      setActiveButton("Upcoming Movies");
    }
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.contentSwitcher}>
        <Button
          onClick={onPopularMovies}
          className={
            isPopularMovies ? styles.activePopularMovies : styles.popularMovies
          }
        >
          <div>Popular Movies</div>
        </Button>
        <Button
          onClick={onUpcomingMovies}
          className={
            !isPopularMovies
              ? styles.activeUpcomingMovies
              : styles.upcomingMovies
          }
        >
          <div>Upcoming Movies</div>
        </Button>
      </div>
    </div>
  );
};

export default ContentSwitcher;
