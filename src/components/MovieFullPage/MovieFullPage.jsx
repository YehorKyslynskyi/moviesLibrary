import React, { useEffect, useMemo } from "react";
import {
  fetchMovieById,
  fetchTVSeriesById,
} from "../../redux/movies/actionCreators";
import {
  API_IMG,
  API_IMG_POSTER_PARAMS,
  API_IMG_ORIGINAL_PARAMS,
} from "../../API/API";
import { useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../helpers/Loader/Loader";
import titleLogo from "../../images/titlelogo.webp";
import ContentWrapper from "../helpers/ContentWrapper/ContentWrapper";
import cx from "classnames";

import styles from "./movieFullPage.module.scss";

const MovieFullPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  let location = useLocation();
  const isMovie = location.state.isMovie;
  const currentMovie = useSelector(
    (state) => state.movies.currentFullMoviePage
  );
  const isLoading = useSelector((state) => state.movies.isLoading);

  useEffect(() => {
    if (isMovie) {
      dispatch(fetchMovieById(params.movieId));
    } else {
      dispatch(fetchTVSeriesById(params.movieId));
    }
  }, [dispatch]);
  console.log(currentMovie);
  console.log(currentMovie.genres);

  const formatCurrentMovie = () => {
    return {
      poster: currentMovie.poster_path
        ? API_IMG + API_IMG_POSTER_PARAMS + currentMovie.poster_path
        : null,
      backdrop: currentMovie.backdrop_path
        ? API_IMG + API_IMG_ORIGINAL_PARAMS + currentMovie.backdrop_path
        : null,
      title: currentMovie.original_title || currentMovie.name,
      releaseDate:
        new Date(Date?.parse(currentMovie.release_date))?.getFullYear() ||
        new Date(Date?.parse(currentMovie.first_air_date))?.getFullYear(),
      tagline: currentMovie.tagline || null,
      overview: currentMovie.overview || null,
      genres: formatGenres(currentMovie.genres)?.join(", ") || null,
    };
  };

  const formatGenres = (genres) => {
    return genres?.map((genre) => genre.name);
  };

  const formattedCurrentMovie = useMemo(() => formatCurrentMovie());

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <ContentWrapper>
          <div className={styles.movieFullPageWrapper}>
            <div
              className={styles.backgroundImg}
              style={{
                backgroundImage: `url(${formattedCurrentMovie?.backdrop})`,
              }}
            >
              <div className={styles.customBg}>
                <div className={styles.headerPoster}>
                  <div className={styles.poster}>
                    {formattedCurrentMovie.poster ? (
                      <img src={formattedCurrentMovie.poster} alt="poster" />
                    ) : (
                      <img
                        className={styles.altLogo}
                        src={titleLogo}
                        alt="titleLogo"
                      />
                    )}
                  </div>
                  <div
                    className={
                      formattedCurrentMovie?.backdrop
                        ? styles.mainDescriptionWrapper
                        : cx(
                            styles.mainDescriptionWrapper,
                            styles.blackTextColor
                          )
                    }
                  >
                    <div className={styles.mainDescription}>
                      <div className={styles.title}>
                        {formattedCurrentMovie.title}
                        <span>({formattedCurrentMovie.releaseDate})</span>
                      </div>

                      {formattedCurrentMovie.genres ? (
                        <div className={styles.genres}>
                          {formattedCurrentMovie.genres}
                        </div>
                      ) : (
                        <></>
                      )}

                      {formattedCurrentMovie.tagline ? (
                        <div className={styles.tagline}>
                          {formattedCurrentMovie.tagline}
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.extendedDescription}>
              <div className={styles.info}>
                {formattedCurrentMovie.overview ? (
                  <div className={styles.overviewTitle}>Description</div>
                ) : (
                  <></>
                )}
                {formattedCurrentMovie.overview ? (
                  <div className={styles.overview}>
                    {formattedCurrentMovie.overview}
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </ContentWrapper>
      )}
    </>
  );
};
export default MovieFullPage;
