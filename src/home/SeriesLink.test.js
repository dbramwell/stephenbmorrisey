import React from 'react';
import ReactDOM from 'react-dom';
import SeriesLink from './SeriesLink';
import { shallow, mount } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SeriesLink />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('animateIn matches animation prop', () => {
  const seriesLink = shallow(<SeriesLink animation='my-animation'/>);
  const animation = seriesLink.find('ScrollAnimation').first();
  expect(animation.props().animateIn).toBe('my-animation');
});

it('header matches header prop', () => {
  const seriesLink = shallow(<SeriesLink header='my-header'/>);
  const header = seriesLink.find('h2').first();
  expect(header.text()).toBe('my-header');
});

it('onClick sets the hash to the result of headerToHash', () => {
  const seriesLink = shallow(<SeriesLink header='My Header'/>);
  expect(window.location.hash).toBe('');
  seriesLink.instance().onClick();
  expect(window.location.hash).toBe('#my-header');
});

it('p matches description prop', () => {
  const seriesLink = shallow(<SeriesLink header='my-header' description={<p>this is some stuff</p>}/>);
  const p = seriesLink.find('p').first();
  expect(p.text()).toBe('this is some stuff');
});

