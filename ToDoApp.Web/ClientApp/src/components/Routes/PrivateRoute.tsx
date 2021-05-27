import { Redirect, Route } from "react-router";
import React from "react";
import NavBar from "../App/Common/NavBar/NavBar";
import ContentLayout from "../App/Common/ContentLayout/ContentLayout";
import { isAuthenticated } from "../../helpers/AccountHelper";
import { CLIENT } from "../../constants/appRoutes";

const PrivateRoute = ({ component: Component, history, ...rest }: any) => {
  if (!isAuthenticated()) history.push(CLIENT.APP.LOGIN);

  return (
    <NavBar history={history}>
      <ContentLayout>
        <Route {...rest} render={(props: any) => <Component {...props} />} />
      </ContentLayout>
    </NavBar>
  );
};

export default PrivateRoute;
