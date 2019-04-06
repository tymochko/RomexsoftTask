import React, { Component } from 'react';
import { connect } from 'react-redux';
import Videos from './components/Videos';
import Toolbar from './components/Toolbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Toolbar />
        <Videos />
      </div>
    );
  }
}

export default connect()(App);
