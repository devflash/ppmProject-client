import React, { Component } from 'react';
import Dashboard from './Components/Dashboard';
import Header from './Components/Layout/Header';
import "bootstrap/dist/css/bootstrap.min.css";
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
