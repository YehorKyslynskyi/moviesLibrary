import React from "react";
import arrow from "../../../images/arrow.webp";

import styles from "./searchArrow.module.scss";

const SearchArrow = ({ children }) => {
  return (
    <div className={styles.arrow}>
      <div className={styles.arrowDesc}>{children}</div>
      <img src={arrow} alt="arrow" />
    </div>
  );
};
export default SearchArrow;
