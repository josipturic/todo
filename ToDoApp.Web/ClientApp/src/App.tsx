import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import Login from "./components/App/Login/Login";
import RegisterStep1 from "./components/App/Register/RegisterStep1";
import RegisterStep2 from "./components/App/Register/RegisterStep2";
import "./custom.css";
import PublicRoute from "./components/Routes/PublicRoute";
import { CLIENT } from "./constants/appRoutes";
import history from "./constants/history";
import Store from "./Store";
import PrivateRoute from "./components/Routes/PrivateRoute";
import Homepage from "./components/ServiceProvider/Homepage/Homepage";
import NewService from "./components/ServiceProvider/NewService/NewService";
import ListOfServices from "./components/ServiceProvider/ListOfServices/ListOfServices";
import ListOfPersonalServices from "./components/ServiceProvider/ListOfPersonalServices/ListOfPersonalServices";
import ServiceDetails from "./components/ServiceProvider/Service/ServiceDetails/ServiceDetails";
import EditServiceDetails from "./components/ServiceProvider/Service/EditService/EditServiceDetails";

const App = () => {
  return (
    <Router history={history}>
      <Store>
        <Switch>
          <PublicRoute exact path={CLIENT.APP.HOMEPAGE} component={Home} />
          <PublicRoute exact path={CLIENT.APP.LOGIN} component={Login} />
          <PublicRoute
            exact
            path={CLIENT.APP.REGISTER_STEP_1}
            component={RegisterStep1}
          />
          <PublicRoute
            exact
            path={CLIENT.APP.REGISTER_STEP_2}
            component={RegisterStep2}
          />
          <PrivateRoute
            exact
            history={history}
            path={CLIENT.APP.SERVICE_PROVIDER.HOMEPAGE}
            component={Homepage}
          />
          <PrivateRoute
            exact
            history={history}
            path={CLIENT.APP.SERVICE_PROVIDER.NEW_SERVICE}
            component={NewService}
          />
          <PrivateRoute
            exact
            history={history}
            path={CLIENT.APP.SERVICE_PROVIDER.LIST_OF_SERVICES}
            component={ListOfServices}
          />
          <PrivateRoute
            exact
            history={history}
            path={CLIENT.APP.SERVICE_PROVIDER.LIST_OF_PERSONAL_SERVICES}
            component={ListOfPersonalServices}
          />
          <PrivateRoute
            exact
            history={history}
            path={CLIENT.APP.SERVICE_PROVIDER.SERVICE}
            component={ServiceDetails}
          />
          <PrivateRoute
            exact
            history={history}
            path={CLIENT.APP.SERVICE_PROVIDER.EDIT_SERVICE}
            component={EditServiceDetails}
          />
        </Switch>
      </Store>
    </Router>
  );
};

export default App;
