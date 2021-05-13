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
        </Switch>
      </Store>
    </Router>
  );
};

export default App;
