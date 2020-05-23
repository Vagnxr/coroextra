import React from "react";
import { Route, Switch } from "react-router-dom";

import { Home } from "pages";

export const Routers = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  );
};
