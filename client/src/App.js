import React, { Component } from 'react'
import './App.css'
import Menu from './menu/Menu'
import Home from './home/Home'
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor'
import Section from './section/Section'
import TheRussianThrillers from './content/TheRussianThrillers'
import TheRussianTales from './content/TheRussianTales'
import TheBlackEagleTrilogy from './content/TheBlackEagleTrilogy'
import helpers from './Helpers'
import BookModal from './section/BookModal'
import SignUpPage from './signUp/SignUpPage'

export default class App extends Component {
  componentWillMount () {
    configureAnchors({containerId: 'app-content'})
  }

  render () {
    return (
      <div className='App'>
        <Menu navItems={[TheRussianThrillers.header, TheBlackEagleTrilogy.header, TheRussianTales.header]} />
        <div id='app-content' className='app-content'>
          <ScrollableAnchor id={'home'}>
            <Home />
          </ScrollableAnchor>
          <ScrollableAnchor id={helpers.headerToHash(TheRussianThrillers.header)}>
            <Section
              content={TheRussianThrillers} />
          </ScrollableAnchor>
          <ScrollableAnchor id={helpers.headerToHash(TheBlackEagleTrilogy.header)}>
            <Section
              content={TheBlackEagleTrilogy} />
          </ScrollableAnchor>
          <ScrollableAnchor id={helpers.headerToHash(TheRussianTales.header)}>
            <Section
              content={TheRussianTales} />
          </ScrollableAnchor>
          <ScrollableAnchor id={'signUp'}>
            <SignUpPage />
          </ScrollableAnchor>
          <BookModal />
        </div>
      </div>
    )
  }
}
