import React, { Component } from 'react';
import './App.css';
import Menu from './menu/Menu';
import Home from './home/Home';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';
import Section from './section/Section';
import TheRussianThrillers from './content/TheRussianThrillers';
import helpers from './Helpers';

export default class App extends Component {

  componentWillMount() {
    configureAnchors({containerId: 'app-content'});
  }
  
  render() {
    return (
      <div className='App'>
        <Menu navItems={[TheRussianThrillers.header, 'The Black Eagle Trilogy', 'The Russian Tales']} />
        <div id='app-content' className='app-content'>
          <ScrollableAnchor id={'home'}>
            <Home />
          </ScrollableAnchor>
          <ScrollableAnchor id={helpers.headerToHash(TheRussianThrillers.header)}>
            <Section
              content={TheRussianThrillers}/>
          </ScrollableAnchor>
          <ScrollableAnchor id={'the-black-eagle-trilogy'}>
            <div className='page'></div>
          </ScrollableAnchor>
          <ScrollableAnchor id={'the-russian-tales'}>
            <div className='page'></div>
          </ScrollableAnchor>
        </div>
      </div>
    );
  }
}