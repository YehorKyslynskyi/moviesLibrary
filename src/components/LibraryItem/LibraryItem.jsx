import React, { useEffect, useState } from "react";
import titleLogo from "../../images/titlelogo.webp";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../routes/routes";
import styles from "./LibraryItem.module.scss";

const LibraryItem = ({
  id,
  isMovie,
  posterPath,
  title,
  voteAverage,
  releaseDate,
  ganres,
}) => {
  return (
    <NavLink
      to={ROUTES.movieFullPage(id)}
      state={{
        isMovie: isMovie,
      }}
      className={styles.libraryItem}
    >
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
    </NavLink>
  );
};
export default LibraryItem;
