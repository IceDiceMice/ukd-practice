import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Login from "./login"
import Main from "./main"
import Users from "./users"
import Posts from "./posts"

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
