import React from "react";
import { Switch, Route } from "react-router";
import { Login, Home } from "./templates/index.";

const Router = () => {
  return (
    <Switch>
      <Route exact path={"/login"} component={Login} />
      <Route exact path={"(/)?"} component={Home} />
    </Switch>
  );
};

export default Router;
