import React from 'react';
import ReactDOM from 'react-dom';
import Section from './Section';
import { shallow, mount } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Section />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('header matches header prop', () => {
  const section = shallow(<Section header='my-header' links={}/>);
  const header = section.find('h2').first();
  expect(header.text()).toBe('my-header');
});

it('contains div.info and div.links', () => {
  const section = shallow(<Section header='My Header' links={}/>);
  expect(section.find('div.info').length).toBe(1);
  expect(section.find('div.links').length).toBe(1);
});

it('p matches description prop', () => {
  const section = shallow(<Section links={} description={<p>this is some stuff</p>}/>);
  const p = section.find('p').first();
  expect(p.text()).toBe('this is some stuff');
});

