import React from "react";
import { Route } from "react-router-dom";
import styles from "./styles.module.scss";

const PublicRoute = ({ component: Component, history, ...rest }: any) => (
  <div className={styles.PublicBackground}>
    <Route
      {...rest}
      render={(props: any) => <Component history {...props} />}
    />
  </div>
);

export default PublicRoute;
