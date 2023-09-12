import React, { useEffect, useMemo } from "react";
import {
  fetchMovieById,
  fetchTVSeriesById,
} from "../../redux/movies/actionCreators";
import { API_IMG } from "../../API/API";
import { useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../helpers/Loader/Loader";
import titleLogo from "../../images/titlelogo.webp";
import ContentWrapper from "../helpers/ContentWrapper/ContentWrapper";

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
        ? API_IMG + currentMovie.poster_path
        : null,
      title: currentMovie.original_title || currentMovie.name,
      releaseDate:
        new Date(Date.parse(currentMovie.release_date)).getFullYear() ||
        new Date(Date.parse(currentMovie.first_air_date)).getFullYear(),
      tagline: currentMovie.tagline || null,
      overview: currentMovie.overview || null,
      genres: formatGanres(currentMovie.genres)?.join(", ") || null,
    };
  };

  const formatGanres = (genres) => {
    return genres?.map((genre) => genre.name);
  };

  const formatedCurrentMovie = useMemo(() => formatCurrentMovie());

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div
          className={styles.backgroundImg}
          style={{ backgroundImage: `url(${formatedCurrentMovie?.poster})` }}
        >
          <div className={styles.customeBg}>
            <ContentWrapper className={styles.movieFullPageWrapper}>
              <div className={styles.movieFullPage}>
                <div className={styles.poster}>
                  {formatedCurrentMovie.poster ? (
                    <img src={formatedCurrentMovie.poster} alt="poster" />
                  ) : (
                    <img
                      className={styles.altLogo}
                      src={titleLogo}
                      alt="titleLogo"
                    />
                  )}
                </div>
                <div className={styles.mainDescriptionWrapper}>
                  <div className={styles.mainDescription}>
                    <div className={styles.title}>
                      {formatedCurrentMovie.title}
                      <span>({formatedCurrentMovie.releaseDate})</span>
                    </div>

                    {formatedCurrentMovie.genres ? (
                      <div className={styles.genres}>
                        {formatedCurrentMovie.genres}
                      </div>
                    ) : (
                      <></>
                    )}

                    <div className={styles.info}>
                      {formatedCurrentMovie.tagline ? (
                        <div className={styles.tagline}>
                          {formatedCurrentMovie.tagline}
                        </div>
                      ) : (
                        <></>
                      )}
                      {formatedCurrentMovie.overview ? (
                        <div className={styles.overviewTitle}>Description</div>
                      ) : (
                        <></>
                      )}
                      {formatedCurrentMovie.overview ? (
                        <div className={styles.overview}>
                          {formatedCurrentMovie.overview}
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </ContentWrapper>
          </div>
        </div>
      )}
    </>
  );
};
export default MovieFullPage;
