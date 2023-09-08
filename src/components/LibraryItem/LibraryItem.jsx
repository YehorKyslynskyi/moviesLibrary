import React, { useEffect, useState } from "react";
import titleLogo from "../../images/titlelogo.webp";

import styles from "./LibraryItem.module.scss";

const LibraryItem = ({
  posterPath,
  title,
  voteAverage,
  releaseDate,
  ganres,
}) => {
  return (
    <div className={styles.libraryItem}>
      <div className={styles.poster}>
        {posterPath ? (
          <img src={posterPath} alt="poster" />
        ) : (
          <img
            className={styles.alternativeImg}
            src={titleLogo}
            alt="alt poster"
          ></img>
        )}
      </div>

      <div className={styles.description}>
        <div className={styles.titleContainer}>
          <div className={styles.movieTitle}>
            {title} ({releaseDate})
          </div>

          <div className={styles.rating}>
            <div>{voteAverage}</div>
          </div>
        </div>

        <div className={styles.genres}>{ganres}</div>
      </div>
    </div>
  );
};
export default LibraryItem;
