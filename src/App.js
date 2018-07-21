import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import './App.css';

import HomePage from './components/pages/HomePage'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Experience from './components/pages/Experience'

import SimpleAppBar from './components/navigation/Navbar'
import SimpleBottomNavigation from './components/navigation/Footer'


class App extends Component {
  
  render() {
    return (
      <Router>
        <div>
          <SimpleAppBar />
          {/* <Route exact path="/" render={ () => <Redirect to="/home" /> } />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/experience" component={Experience} />
          <Route exact path="/contact" component={Contact} /> */}
          <SimpleBottomNavigation />
        </div>
      </Router>
    );
  }
}

export default App