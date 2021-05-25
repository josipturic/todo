import { Redirect, Route } from "react-router";
import React from "react";
import NavBar from "../App/Common/NavBar/NavBar";
import ContentLayout from "../App/Common/ContentLayout/ContentLayout";

const PrivateRoute = ({ component: Component, history, ...rest }: any) => (
  <NavBar history={history}>
    <ContentLayout>
      <Route {...rest} render={(props: any) => <Component {...props} />} />
    </ContentLayout>
  </NavBar>
);

export default PrivateRoute;
