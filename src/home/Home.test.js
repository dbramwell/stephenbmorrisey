import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import { shallow, mount } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Home />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('home contains Russian Thrillers link', () => {
  const home = shallow(<Home />);
  const russianThrillersAnimation = home.find('SeriesLink').first();
  expect(russianThrillersAnimation.props().header).toBe('The Russian Thrillers');
});

it('home contains Black Eagle link', () => {
  const home = shallow(<Home />);
  const blackEagleLink = home.find('SeriesLink').at(1);
  expect(blackEagleLink.props().header).toBe('The Black Eagle Trilogy');
});

it('home contains Russian Tales link', () => {
  const home = shallow(<Home />);
  const russianTalesLink = home.find('SeriesLink').at(2);
  expect(russianTalesLink.props().header).toBe('The Russian Tales');
});

it('home contains header with "Stephen B. Morrisey"', () => {
  const app = shallow(<Home />);
  const header = app.find('h1');
  expect(header.text()).toBe('Stephen B. Morrisey');
});