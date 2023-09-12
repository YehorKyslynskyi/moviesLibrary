import React from "react";
import loaderGif from "../../../images/loader.gif";
import styles from "./loader.module.scss";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <img src={loaderGif} alt="loader" />
    </div>
  );
};
export default Loader;
