import React from "react";
import { Route, withRouter } from "react-router-dom";
import styles from "./styles.module.scss";
import PublicNavBar from "../App/NavBar/PublicNavBar";
import history from "../../constants/history";

const PublicRoute = ({ component: Component, ...rest }: any) => (
  <div className={styles.PublicBackground}>
    <div className={styles.polygon}></div>
    <div className={styles.container}>
      <PublicNavBar />
      <Route
        {...rest}
        render={(props: any) => <Component history {...props} />}
      />
    </div>
  </div>
);

export default withRouter(PublicRoute);
