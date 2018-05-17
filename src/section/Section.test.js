import React from 'react';
import ReactDOM from 'react-dom';
import Section from './Section';
import { shallow } from 'enzyme';
import TheRussianTales from '../content/TheRussianTales';
import configureStore from 'redux-mock-store'


const initialState = {}
const mockStore = configureStore()
let store

beforeEach(() => {
  store = mockStore(initialState)
})

it('header matches content header', () => {
  const section = shallow(<Section store={store} content={TheRussianTales} />);
  const header = section.find('h2').first();
  expect(header.text()).toBe(TheRussianTales.header);
});

it('contains div.info and div.links', () => {
  const section = shallow(<Section store={store} content={TheRussianTales} />);
  expect(section.find('div.info').length).toBe(1);
  expect(section.find('div.links').length).toBe(1);
});

it('p matches content description', () => {
  const section = shallow(<Section store={store} content={TheRussianTales} />);
  var pIndex = 0;
  TheRussianTales.description.forEach (() => {
    const p = section.find('p').at(pIndex);
    expect(p.text()).toBe(TheRussianTales.description[pIndex]);
    pIndex++
  })
});

