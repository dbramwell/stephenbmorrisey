import React, { Component } from 'react'
import SeriesLink from './SeriesLink'

export default class Home extends Component {
  render () {
    // const thrillersDesc = [
    //   <p key={1}>Jack Kelly, an ex-banker, who worked in Russia as Communism fell is one of the few people who was involved in the events and actions that have forged the new and powerful Russia.</p>,
    //   <p key={2}>A new Cold War is chilling relations between Russia and the West and MI6, the CIA and even the FSB are falling rapidly behind the pace as Russia’s President is increasingly calling the shots and single-handedly constructing a new world order.</p>,
    //   <p key={3}>Jack Kelly is the spy who can go back out into the cold - but who will he fight for and who can he trust in the fast-paced adventures he is about to be caught up in?</p>
    // ];

    // const eagleDesc = [
    //   <p key={1}>The most spine-chilling revival in history is only a few steps away.</p>,
    //   <p key={2}>A war is raging in pursuit of hidden treasures with demonic powers created to unleash the revival.</p>,
    //   <p key={3}>A gifted young boy holds the keys to the treasures and their powers but will it be good or evil that triumphs through the boy?</p>
    // ];

    // const talesDesc = [
    //   <p key={1}>Intrigue is at its most alluring in the Russian Tales.</p>,
    //   <p key={2}>The Tales are set during the dramatic time when Russia threw off the Soviet shackles as Communism fell in the 1990’s and created the new Russia.</p>,
    //   <p key={3}>The Tales also hark back to the other traumatic events of Russia’s past. As we watch the myriad of different characters, old and young, Russian and foreign, face challenge after challenge, a mystic even supernatural force also makes its contribution in Russia, the land of so many enigmas.</p>
    // ];

    const thrillersDesc = [
      <p key={1}>The New Cold War</p>,
      <p key={2}>Jack Kelly is the spy who goes back out into the cold.</p>
    ]

    const eagleDesc = [
      <p key={1}>A spine chilling revival</p>,
      <p key={2}>An underground battle rages.</p>,
      <p key={3}>A young boy alone has the power to stop it.</p>
    ]

    const talesDesc = [
      <p key={1}>Intrigue is at its most intense</p>,
      <p key={2}>The new Russia is being forged but its past is still very much alive.</p>
    ]

    return (
      <div className='spacer'>
        <div className='page'>
          <h1>Stephen B. Morrisey</h1>
          <div className='series-links-container'>
            <SeriesLink id='thrillers' header='The Russian Thrillers' description={thrillersDesc} />
            <SeriesLink id='eagle' header='The Black Eagle Trilogy' description={eagleDesc} />
            <SeriesLink id='tales' header='The Russian Tales' description={talesDesc} />
          </div>
        </div>
      </div>
    )
  }
}
