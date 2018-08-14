import React, { Component } from 'react';
import Customer from './components/Customer'
import SaveUser from './components/SaveUser'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Customers</h1>
        </header>
        <Customer />
        <SaveUser />
      </div>
    );
  }
}

export default App;