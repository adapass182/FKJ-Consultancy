import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import HomePage from './components/homePage/HomePage'
import SimpleAppBar from './components/navigation/Navbar'
import SimpleBottomNavigation from './components/navigation/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SimpleAppBar />
        <HomePage />
        <SimpleBottomNavigation />
      </div>
    );
  }
}

export default App;