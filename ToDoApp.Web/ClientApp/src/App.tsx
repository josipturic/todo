import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import Login from "./components/App/Login/Login";
import Register from "./components/App/Register/Register";
import "./custom.css";
import PublicRoute from "./components/Routes/PublicRoute";
import { CLIENT } from "./constants/appRoutes";
import history from "./constants/history";

const App = () => {
  return (
    <Router history={history}>
      {/* Add store */}
      <Switch>
        <PublicRoute exact path="/" component={Home} />
        <PublicRoute exact path={CLIENT.APP.LOGIN} component={Login} />
        <PublicRoute exact path={CLIENT.APP.REGISTER} component={Register} />
      </Switch>
    </Router>
  );
};

export default App;
