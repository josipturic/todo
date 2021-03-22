import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import Login from "./components/App/Login";

import "./custom.css";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      {/* Add store */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  );
};

export default App;
