import React, { Component } from 'react';
import helpers from '../Helpers';

export default class SeriesLink extends Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    window.location.hash = helpers.headerToHash(this.props.header);
  }

  render() {
    return (
      <div className='series-link'>
        <div onClick={this.onClick}>
          <h2>{this.props.header}</h2>
          {this.props.description}
        </div>
      </div>
    )
  }
}