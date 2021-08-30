import React, { VFC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { routes } from "~/config/routes";
import "~/styles/index.css";

export const App: VFC = () => {
  return (
    <>
      <h1 className="text-red-400">hoge</h1>
      <Router>
        <Switch>
          {routes.map((r) => (
            <Route
              key={r.path}
              path={r.path}
              component={r.component}
              exact={true}
            />
          ))}
        </Switch>
      </Router>
    </>
  );
};
