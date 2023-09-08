import React from "react";
import titleLogo from "../../images/titlelogo.webp";
import Navigation from "../helpers/Navigation/Navigation";
import SearchField from "../SearchFIeld/SearchField";
import { NavLink } from "react-router-dom";

import styles from "./header.module.scss";
import { ROUTES } from "../../routes/routes";

const Header = () => {
  const currentPath = window.location.pathname;
  return (
    <header>
      <NavLink className={styles.logo} to={ROUTES.mainPage}>
        <img src={titleLogo} alt="titleLogo" />
      </NavLink>
      <Navigation />
      {currentPath === "/" ? <></> : <SearchField />}
    </header>
  );
};

export default Header;
