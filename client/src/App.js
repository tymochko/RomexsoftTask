import React, { Component } from 'react';
import { connect } from 'react-redux';
import Videos from './components/Videos';
import Toolbar from './components/Toolbar';
import './App.css';

class App extends Component {
  // componentDidMount() {
  //   this.getSearchResults();
  // }
  //
  // getSearchResults() {
  //   this.props.dispatch(searchByQuery('deftones'))
  //     .then(res => {
  //       console.log(res);
  //       this.setState({ videos: res });
  //     });
  // };

  // handleSubmit = async e => {
  //   e.preventDefault();
  //   const response = await fetch('/api/world', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ post: this.state.post }),
  //   });
  //   const body = await response.text();
  //   this.setState({ videos: body });
  // };

  render() {
    return (
      <React.Fragment>
        <Toolbar />
        <Videos />
      </React.Fragment>
    );
  }
}

export default connect()(App);
