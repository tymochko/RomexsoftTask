import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import classNames from 'classnames';
import { toggleVisibilityAction } from '../actions/visibilityFilters';

class DisplayActions extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      isGridActive: true,
      isListActive: false
    };

    this.onGridClick = this.onGridClick.bind(this);
    this.onListClick = this.onListClick.bind(this);
  }

  onGridClick() {
    this.props.dispatch(toggleVisibilityAction('display-grid'));
    this.setState({
      isGridActive: true,
      isListActive: false
    });
  }

  onListClick() {
    this.props.dispatch(toggleVisibilityAction('display-list'));
    this.setState({
      isGridActive: false,
      isListActive: true
    });
  }

  render() {
    return (
      <div className="display-actions-block">
        <div className="buttons-group">
          <button
            className={classNames("display-grid", { active: this.state.isGridActive })}
            onClick={this.onGridClick}
          >
            <img src="/img/grid.png" alt="Display as Grid"/>
          </button>
          <button
            className={classNames("display-list", { active: this.state.isListActive })}
            onClick={this.onListClick}
          >
            <img src="/img/list.png" alt="Display as List"/>
          </button>
        </div>
      </div>
    );
  }
}

export default connect()(DisplayActions);
