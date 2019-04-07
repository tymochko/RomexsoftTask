import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { createSelector } from 'reselect/lib/index';
import isEmpty from 'lodash/isEmpty';
import classNames from 'classnames';
import { addToFavourites, addToFavouritesAction, getFavourites, selectVideosAction } from '../actions/videos';

class FavouriteActions extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    selectedVideos: PropTypes.array
  };

  constructor(props) {
    super(props);
    this.state = { isLoading: false };

    this.onAddClick = this.onAddClick.bind(this);
    this.onFavouritesClick = this.onFavouritesClick.bind(this);
  }

  onAddClick(event) {
    event.preventDefault();

    this.setState({ isLoading: true });

    const favouritesVideos = this.props.selectedVideos.map(v => ({ ...v, isFavourite: true }));
    let promises = [];

    favouritesVideos.forEach(favVid => this.props.dispatch(addToFavourites(favVid)));

    Promise.all(promises).then(data => {
      this.props.dispatch(selectVideosAction([]));
      this.props.dispatch(addToFavouritesAction(data));
      this.setState({ isLoading: false });
    });
  }

  onFavouritesClick(event) {
    event.preventDefault();

    this.props.dispatch(getFavourites());
  }

  render() {
    const addButtonDisabled = isEmpty(this.props.selectedVideos);
    const { isLoading } = this.state;

    return (
      <div className="favourites-actions-block">
        <div className="buttons-group">
          <button className={classNames("add-action", { disabled: addButtonDisabled })} onClick={this.onAddClick}>
            {isLoading ? (
              <div className="lds-dual-ring" />
            ) : (
              <img src="/img/add.png" alt="Add to Favourites"/>
              )}
          </button>
          <button className={classNames("remove-action", { disabled: true })}>
            <img src="/img/delete.png" alt="Remove from Favourites"/>
          </button>
          <button className={classNames("display-favourites-action", { active: true })} onClick={this.onFavouritesClick}>
            Favourites
          </button>
        </div>
      </div>
    );
  }
}

const selector = createSelector(
  state => state.videosData.selectedVideos,
  (selectedVideos) => ({ selectedVideos })
);

export default connect(selector)(FavouriteActions);
