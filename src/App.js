import React, { Component } from 'react';
import Dashboard from './Components/Dashboard';
import Header from './Components/Layout/Header';
import ProjectForm from './Components/Project/ProjectForm';
import projectDashboard from './Components/ProjectDashboard/ProjectDashboard';
import './App.css'
import {Route,Switch} from 'react-router-dom';
// import "bootstrap/dist/css/bootstrap.min.css";
// import "jquery/src/jquery";
// import "bootstrap/dist/js/bootstrap.min.js";
class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="DashboardContainer">
        <Switch>
          
            
            <Route  path="/showForm/:formAction/:projectID" component={ProjectForm}/>
            <Route  path="/showForm/:formAction" component={ProjectForm}/>
            <Route path="/projectDashboard/:projectId" component={projectDashboard}/>
            <Route  path="/" component={Dashboard}/>
        
          
        </Switch>
        
        </div>
        
      </div>
    );
  }
}

export default App;
