import React from "react";
import Header from "../Header/Header";

import styles from "./layout.module.scss";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className={styles.layout}>
      <Header isMainPage />
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default Layout;
