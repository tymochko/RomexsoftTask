import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import isEqual from 'lodash/isEqual';
import { formatDate } from '../helpers/formatters';
import { selectVideos } from '../actions/videos';

const CHECK_ALL = "CHECK_ALL";

class Videos extends Component {
  constructor(props) {
    super(props);
    this.updateCheck = this.updateCheck.bind(this);
    this.updateCheckAll = this.updateCheckAll.bind(this);
  }

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    videos: PropTypes.array
  };

  state = {
    checkedAllInput: false,
    checkedVideos: null,
    videos: null
  };

  componentDidUpdate(prevProps) {
    if (!isEqual(prevProps.videos, this.props.videos)) {
      this.setState({ videos: this.props.videos });
    }
  }

  updateCheck(event) {
    const { name, checked } = event.target;
    let nextState = {
      checkedAllInput: false,
      checkedVideos: { ...this.state.checkedVideos, [name]: checked }
    };

    let selectedVideos = {};

    this.props.videos.forEach(v => {
      if (nextState.checkedVideos[v.id]) {
        selectedVideos[v.id] = v;
      }
    });

    this.props.dispatch(selectVideos(selectedVideos));

    this.setState(nextState);
  }

  updateCheckAll(event) {
    const { checked } = event.target;
    let result= null;

    if (checked) {
      result = {};

      this.props.videos.forEach(v => result[v.id] = true);
    }

    this.setState({ checkedVideos: result, checkedAllInput: checked });
  }

  render() {
    const { checkedAllInput, checkedVideos, videos } = this.state;

    return videos && videos.length ? (
      <div className='videos-block'>
        <div className="select-all-block">
          <input
            type="checkbox"
            checked={checkedAllInput}
            onChange={this.updateCheckAll}
          />
          <span>Select all</span>
        </div>
        {videos.map((v, i) => {
          return (
            <div className='video-block' key={i}>
              <img
                src={v.thumbs && v.thumbs.small}
                className='thumb'
                alt={v.title}
              />
              <input
                type="checkbox"
                name={v.id}
                checked={checkedVideos && checkedVideos[v.id] || false}
                onChange={this.updateCheck}
              />
              <div className='date'>{v.publishedAt && formatDate(v.publishedAt) || '-'}</div>
              <div className='title' title={v.title || '-'}>{v.title || '-'}</div>
            </div>
          );
        })}
      </div>
    ) : null};
}

const selector = createSelector(
  state => state.videos,
  (videos) => ({ videos })
);

export default connect(selector)(Videos);
