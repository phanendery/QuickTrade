import React from "react";
import { Route, Switch } from "react-router-dom";
import { UserIndex } from "./users/UserIndex";
import Login from "./Login";
import AuthRoute from "../util/route_util";
import Nav from "./Nav";
import Register from "./Register";
import Slide from "./Slide";

const App = props => {
  return (
    <div>
      <Route path="/" component={Nav}></Route>
      <Switch>
        <AuthRoute exact path="/login" component={Login} routeType="auth" />
        <AuthRoute
          exact
          path="/register"
          component={Register}
          routeType="auth"
        />
        <Route exact path="/slide" component={Slide}></Route>
        <Route exact path="/" component={UserIndex}></Route>
      </Switch>
    </div>
  );
};

export default App;
