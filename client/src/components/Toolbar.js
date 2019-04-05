import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import isEqual from 'lodash/isEqual';
import SearchForm from './SearchForm';

class Toolbar extends Component {
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
    return (
      <div className="toolbar">
        <div className='actions'>

        </div>
        <SearchForm/>
        <div className="display-options-block">

        </div>
      </div>
    );
  }
}

const selector = createSelector(
  state => state.videos,
  (videos) => ({ videos })
);

export default connect(selector)(Toolbar);
