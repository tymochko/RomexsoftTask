import React, { Component } from 'react';
import DisplayActions from './DisplayActions';
import FavouriteActions from './FavouriteActions';
import SearchForm from './SearchForm';

class Toolbar extends Component {
  render() {
    return (
      <div className="toolbar">
        <FavouriteActions />
        <SearchForm />
        <DisplayActions />
      </div>
    );
  }
}

export default Toolbar;
