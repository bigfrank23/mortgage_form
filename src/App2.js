import React from 'react'
import Quiz from './components2/Quiz'
import Home from './indexPage/Home'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App2() {
    return (
        <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/quiz">
            <Quiz />
          </Route>
          </Switch>
          </Router>
    )
}
