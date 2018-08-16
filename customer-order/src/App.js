import React, { Component } from 'react';
import Home from './components/Home'
import './App.css';

class App extends Component {
  render() {
    console.log("in app " +this.state)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Customers</h1>
        </header>

        <Home />
      </div>
    );
  }
}

export default App;