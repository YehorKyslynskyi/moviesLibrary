import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";

import styles from "./App.module.scss";

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
