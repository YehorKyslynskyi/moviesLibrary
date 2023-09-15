import React, { useEffect, useMemo } from "react";
import { fetchTVSeriesGenres } from "../../redux/movies/actionCreators";
import ListOfMovies from "../ListOfMovies/ListOfMovies";
import { API_IMG, API_IMG_POSTER_PARAMS } from "../../API/API";
import { useDispatch, useSelector } from "react-redux";
import styles from "./TVSeriesPage.module.scss";
import ContentWrapper from "../helpers/ContentWrapper/ContentWrapper";

const TVSeriesPage = () => {
  const dispatch = useDispatch();
  const foundTVSeries = useSelector((state) => state.movies.foundTVSeries);
  const tvSeriesGenres = useSelector((state) => state.movies.tvSeriesGenres);

  useEffect(() => {
    dispatch(fetchTVSeriesGenres());
  }, [dispatch]);

  /*  console.log(foundTVSeries); */

  const formatTVSeries = (foundTVSeries) => {
    return foundTVSeries?.map((TVSeries) => ({
      ...TVSeries,
      isMovie: false,
      title: TVSeries.name,
      posterPath:
        TVSeries.poster_path === null || undefined || ""
          ? null
          : API_IMG + API_IMG_POSTER_PARAMS + TVSeries.poster_path,
      voteAverage: TVSeries.vote_average?.toFixed(1),
      genres: getTVSeriesGenres(TVSeries)?.join(" "),
      releaseDate: new Date(Date.parse(TVSeries.first_air_date))?.getFullYear(),
    }));
  };

  const getTVSeriesGenres = (TVSeries) => {
    const itemGenres = [];
    for (let i = 0; i < TVSeries.genre_ids.length; i++) {
      for (let j = 0; j < tvSeriesGenres.length; j++) {
        if (TVSeries.genre_ids[i] === tvSeriesGenres[j].id) {
          itemGenres?.push(tvSeriesGenres[j].name);
        }
      }
    }
    return itemGenres;
  };

  const formattedTVSeries = useMemo(() => formatTVSeries(foundTVSeries));
  return (
    <ContentWrapper>
      <div className={styles.shadowWrapper}>
        <div className={styles.title}>Found TV Series</div>
        <ListOfMovies movies={formattedTVSeries} />
      </div>
    </ContentWrapper>
  );
};

export default TVSeriesPage;
