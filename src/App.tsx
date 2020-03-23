import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { SignIn } from "./components/signin";

const App = () => (
  <Router>
    <Switch>
      <Route path="/signin">
        <SignIn />
      </Route>
      <Route path="/users">
        <Users />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default App;

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
