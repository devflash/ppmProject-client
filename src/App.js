import React, { Component } from 'react';
import Dashboard from './Components/Dashboard';
import Header from './Components/Layout/Header';
import './App.css'
// import "bootstrap/dist/css/bootstrap.min.css";
// import "jquery/src/jquery";
// import "bootstrap/dist/js/bootstrap.min.js";
class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Dashboard/>         
      </div>
    );
  }
}

export default App;
