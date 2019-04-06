import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { searchByQuery } from '../actions/videos';

class DisplayActions extends Component {
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
      <div className="display-actions-block">
        <button className="display-grid">
          <img src="/img/grid.png" alt="Display as Grid"/>
        </button>
        <button className="display-list">
          <img src="/img/list.png" alt="Display as List"/>
        </button>
      </div>
    );
  }
}

export default connect()(DisplayActions);
