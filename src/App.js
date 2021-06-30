import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/login";
import Main from "./components/main";
import Users from "./components/users";
import Posts from "./components/posts";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>

        <Route path="/main">
          <Main />
        </Route>

        <Route path="/users">
          <Users />
        </Route>

        <Route path="/posts">
          <Posts />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
