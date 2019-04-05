import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import isEqual from 'lodash/isEqual';

class Videos extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    videos: PropTypes.array
  };

  state = {
    videos: null,
  };

  componentDidUpdate(prevProps) {
    if (!isEqual(prevProps.videos, this.props.videos)) {
      this.setState({ videos: this.props.videos });
    }
  }

  render() {
    const { videos } = this.state;

    return (
      <div className="Videos">
        <header className="Videos-header">
          <p>
            Edit <code>src/Videos.js</code> and save to reload.
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

const selector = createSelector(
  state => state.videos,
  (videos) => ({ videos })
);

export default connect(selector)(Videos);
