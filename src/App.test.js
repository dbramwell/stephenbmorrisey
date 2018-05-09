import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';

it('contains Menu when created', () => {
  const app = shallow(<App />);
  const menu = app.find('Menu');
  expect(menu.length).toBe(1);
  expect(menu.props().navItems.length).toBe(3);
  expect(menu.props().navItems[0]).toBe('The Russian Thrillers');
  expect(menu.props().navItems[1]).toBe('The Black Eagle Trilogy');
  expect(menu.props().navItems[2]).toBe('The Russian Tales');
});

it('contains a ScrollableAnchor with id "the-russian-thrillers"', () => {
  const app = shallow(<App />);
  const thrillersAnchor = app.find('ScrollableAnchor').at(1);
  expect(thrillersAnchor.props().id).toBe('the-russian-thrillers');
});

it('contains a ScrollableAnchor with id "home" and contains Home element', () => {
  const app = shallow(<App />);
  const homeAnchor = app.find('ScrollableAnchor').first();
  expect(homeAnchor.props().id).toBe('home');
  const home = homeAnchor.find('Home');
  expect(home.length).toBe(1);
});
