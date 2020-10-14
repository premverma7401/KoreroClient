import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../feature/dashboard/Dashboard';
import Homepage from '../feature/homepage/Homepage';
import ProjectDetails from '../feature/project/ProjectDetails';
import './App.css';

function App() {
  return (
    <Fragment>
      <Route component={Homepage} path="/" exact />
      <Route
        path={'/(.+)'}
        render={() => (
          <Fragment>
            {/* <Navbar /> */}

            <Switch>
              <Route component={Dashboard} path="/dashboard" exact />
              <Route component={ProjectDetails} path="/dashboard/:id" />
            </Switch>
          </Fragment>
        )}
      />
    </Fragment>
  );
}

export default App;
