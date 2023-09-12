import React from "react";
import cx from "classnames";
import styles from "./contentWrapper.module.scss";

const ContentWrapper = ({ children, className, backgroundImg }) => {
  return <div className={cx(styles.contentWrapper, className)}>{children}</div>;
};

export default ContentWrapper;
