import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import List from "./pages/todo/List";
import Create from "./pages/todo/Create";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/list" component={List} />
      <Route path="/create" component={Create} />
    </Switch>
  );
}
