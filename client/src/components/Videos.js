import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import classNames from 'classnames';
import isEqual from 'lodash/isEqual';
import { formatDate } from '../helpers/formatters';
import { selectVideosAction } from '../actions/videos';

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
    checkedVideos: null
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

    this.props.dispatch(selectVideosAction(this.props.videos.filter(v => nextState.checkedVideos[v.id])));

    this.setState(nextState);
  }

  updateCheckAll(event) {
    const { checked } = event.target;
    let selectedVideos = null;

    if (checked) {
      selectedVideos = {};

      this.props.videos.forEach(v => selectedVideos[v.id] = true);
    }

    this.props.dispatch(selectVideosAction(checked ? this.props.videos : []));
    this.setState({ checkedVideos: selectedVideos, checkedAllInput: checked });
  }

  render() {
    const { visibilityFilter } = this.props;
    const { checkedAllInput, checkedVideos, videos } = this.state;

    return videos && videos.length ? (
      <div className={classNames('videos-block', visibilityFilter)}>
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
    ) : (
      <div className="no-results">No results here. Try to search for something else.</div>
    )};
}

const selector = createSelector(
  state => state.videosData.videos,
  state => state.visibilityFilter,
  (videos, visibilityFilter) => ({ videos, visibilityFilter })
);

export default connect(selector)(Videos);
