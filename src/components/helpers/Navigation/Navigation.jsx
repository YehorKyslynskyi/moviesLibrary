import React from "react";
import styles from "./navigation.module.scss";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../../routes/routes";

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <NavLink className={styles.navLink} to={ROUTES.moviesPage}>
        Movies
      </NavLink>
      <NavLink className={styles.navLink} to={ROUTES.tvSeriesPage}>
        TV Series
      </NavLink>
    </nav>
  );
};

export default Navigation;
