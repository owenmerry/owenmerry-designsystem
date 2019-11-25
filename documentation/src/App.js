import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { 
  HomePage,
  AboutPage,
  ComponentsPage,
  AtomsPage,
} from './pages'

export default class App extends Component {
  render () {
    return (
      <Router>
          <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/components">components</Link>
          </li>
          <li>
            <Link to="/atoms">atoms</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/components">
            <ComponentsPage />
          </Route>
          <Route path="/atoms">
            <AtomsPage />
          </Route>
        </Switch>
      </Router>
    )
  }
}
