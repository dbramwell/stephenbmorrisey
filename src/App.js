import React, { Component } from 'react';
import './App.css';
import Menu from './menu/Menu';
import Home from './home/Home';
import ScrollableAnchor from 'react-scrollable-anchor';

export default class App extends Component {
  
  render() {
    return (
      <div className='App'>
        <Menu navItems={['The Russian Thrillers', 'The Black Eagle Trilogy', 'The Russian Tales']} />
        <ScrollableAnchor id={'home'}>
          <Home />
        </ScrollableAnchor>
        <ScrollableAnchor id={'the-russian-thrillers'}>
          <div className='page'></div>
        </ScrollableAnchor>
      </div>
    );
  }
}