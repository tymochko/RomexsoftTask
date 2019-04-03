import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchByQuery } from './actions/videos';
import './App.css';

class App extends Component {
  state = {
    response: '',
    post: '',
    videos: null,
  };

  componentDidMount() {
    this.getSearchResults();
  }

  getSearchResults() {
    this.props.dispatch(searchByQuery('deftones'))
      .then(res => {
        console.log(res);
        this.setState({ videos: res });
      });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.post }),
    });
    const body = await response.text();
    this.setState({ videos: body });
  };

  render() {
    const { videos } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
        {videos && videos.length ? (
          <div className='videos-block'>
            {videos.map((v, i) => {
              return (
                <div className='video-block' key={i}>
                  <img
                    src={v.thumbs && v.thumbs.small}
                    className='thumb'
                    alt={v.title}
                  />
                  <div className='date'>{v.publishedAt || '-'}</div>
                  <div className='title'>{v.title || '-'}</div>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    );
  }
}

export default connect()(App);
