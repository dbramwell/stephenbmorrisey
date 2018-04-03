import React, { Component } from 'react';
import SeriesLink from './SeriesLink';

export default class Home extends Component {

  render() {
    return (
      <div className='page'>
        <h1>Stephen B. Morrisey</h1>
        <div className='series-links-container'>
          <SeriesLink id='thrillers' header='The Russian Thrillers' animation='fadeInLeft' />
          <SeriesLink id='eagle' header='The Black Eagle Trilogy' animation='fadeInUp' />
          <SeriesLink id='tales' header='The Russian Tales' animation='fadeInRight' />
        </div>
      </div>
    )
  }
}