import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Helpers from '../Helpers';

export default class SeriesLink extends Component {

  constructor(props) {
    super(props);
    this.helpers = new Helpers();
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    window.location.hash = this.helpers.headerToHash(this.props.header);
  }

  render() {
    return (
      <ScrollAnimation animateIn={this.props.animation} animateOnce={true} className='series-link'>
        <div onClick={this.onClick}>
          <h2>{this.props.header}</h2>
        </div>
      </ScrollAnimation>
    )
  }
}