import React, { Component } from 'react'
import SeriesLink from './SeriesLink'
import TheRussianThrillers from '../content/TheRussianThrillers'
import TheRussianTales from '../content/TheRussianTales'
import TheBlackEagleTrilogy from '../content/TheBlackEagleTrilogy'

export default class Home extends Component {
  render () {

    return (
      <div className='spacer'>
        <div className='page'>
          <h1>Stephen B. Morrisey</h1>
          <div className='series-links-container'>
            <SeriesLink id='thrillers' header={TheRussianThrillers.header} description={TheRussianThrillers.summary} />
            <SeriesLink id='eagle' header={TheBlackEagleTrilogy.header} description={TheBlackEagleTrilogy.summary} />
            <SeriesLink id='tales' header={TheRussianTales.header} description={TheRussianTales.summary}/>
          </div>
        </div>
      </div>
    )
  }
}
