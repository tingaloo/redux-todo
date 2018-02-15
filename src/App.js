import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleForm from './components/SimpleForm';
import ContactForm from './components/ContactForm';
import LoginForm from './components/LoginForm';
import showResults from './actions/showResults';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <LoginForm />
      </div>
    );
  }
}

export default App;
