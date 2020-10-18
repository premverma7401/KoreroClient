import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import AdminDashboard from '../feature/dashboard/admin-dashboard/AdminDashboard';
import Dashboard from '../feature/dashboard/Dashboard';
import UserDashboard from '../feature/dashboard/user-dashboard/UserDashboard';
import Homepage from '../feature/homepage/Homepage';
import Navbar from '../feature/navbar/Navbar';
import ProjectDetails from '../feature/project/ProjectDetails';
import { ProjectProvider } from '../store/ProjectContext';
import './App.css';

function App() {
  return (
    <Fragment>
      <Route component={Homepage} path="/" exact />
      <Route
        path={'/(.+)'}
        render={() => (
          <ProjectProvider>
            <Navbar />
            <div style={{ marginTop: '80px' }}>
              <Switch>
                <Route component={Dashboard} path="/dashboard" exact />
                <Route component={ProjectDetails} path="/dashboard/:id" />
                <Route component={AdminDashboard} path="/admin" />
                <Route component={UserDashboard} path="/user" />
              </Switch>
            </div>
          </ProjectProvider>
        )}
      />
    </Fragment>
  );
}

export default App;
