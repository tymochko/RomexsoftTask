import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { searchByQuery } from '../actions/videos';

class SearchForm extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.dispatch(searchByQuery(this.state.value.trim()));
  }

  render() {
    return (
      <form className="search-block" onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          maxLength={120}
        />
        <button type="submit" value="Submit">
          <img src="/img/search.png" alt="Press to search"/>
        </button>
      </form>
    );
  }
}

export default connect()(SearchForm);
