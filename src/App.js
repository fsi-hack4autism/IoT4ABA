import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Device from "./components/Device"
import Calendar from "./components/Calendar"
import Dashboard from "./components/Dashboard"
import './App.css';

function App() {
  return (
    <Router>
      <div>
      <Route
          path="/"
          render={({ location }) => (
            <Fragment>
              <Tabs value={ location.pathname }>
                <Tab label="Device" value="/" component={ Link } to="/" />
                <Tab label="Calendar" value="/calendar" component={ Link } to="/calendar" />
                <Tab label="Dashboard" value="/dashboard" component={ Link } to="/dashboard" />
              </Tabs>
              <Switch>
                <Route path="/dashboard" component={ Dashboard } />
                <Route path="/calendar" component={ Calendar } />
                <Route path="/" component={ Device } />
              </Switch>
            </Fragment>
          )}
        />
      </div>
    </Router>
  );
}

export default App;
