import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { searchByQuery } from '../actions/videos';

class FavouriteActions extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    // this.state = { value: '' };

    this.onAddRemoveClick = this.onAddRemoveClick.bind(this);
  }

  onAddRemoveClick(event) {
    event.preventDefault();

    // this.props.dispatch(searchByQuery(this.state.value.trim()));
  }

  render() {
    return (
      <div className="favourites-actions-block">
        <div className="buttons-group">
          <button className="add-action" onClick={this.onAddRemoveClick}>
            <img src="/img/add.png" alt="Add to Favourites"/>
          </button>
          <button className="remove-action">
            <img src="/img/delete.png" alt="Remove from Favourites"/>
          </button>
        </div>
        <div className="buttons-group">
          <button className="display-all-action">
            All
          </button>
          <button className="display-favourites-action">
            Favourites
          </button>
        </div>
      </div>
    );
  }
}

export default connect()(FavouriteActions);
