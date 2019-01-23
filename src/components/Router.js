import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import StorePicker from "./StorePicker";
import App from "./App";
import NotFound from "./NotFound";

//React, for example, is the DEFAULT EXPORT from the React package.
//but if you are wanting to export more than one thing from a package
//you'd export something called 'named exports' within curly-braces

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={StorePicker} />
      {/* When Path is EXACTLY '/', render out StorePicker */}
      <Route path="/store/:storeId" component={App} />
      <Route component={NotFound} />
      {/* Catch-All, just leave off the path */}
    </Switch>
  </BrowserRouter>
);

/*
    BrowserRouter: 
    Switch: Tries first route, if not pushes to next, ...., and finally the 404
    Route:
*/

export default Router;
