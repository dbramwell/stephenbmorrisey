/* global it, expect, beforeEach */
import React from 'react'
import App from './App'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

const initialState = {}
const mockStore = configureStore()
let store

beforeEach(() => {
  store = mockStore(initialState)
})

it('contains Menu when created', () => {
  const app = shallow(<App store={store} />).dive()
  const menu = app.find('Menu')
  expect(menu.length).toBe(1)
})

it('contains a ScrollableAnchor with id "the-russian-thrillers"', () => {
  const app = shallow(<App store={store} />).dive()
  const thrillersAnchor = app.find('ScrollableAnchor').at(1)
  expect(thrillersAnchor.props().id).toBe('the-russian-thrillers')
})

it('contains a ScrollableAnchor with id "home" and contains Home element', () => {
  const app = shallow(<App store={store} />).dive()
  const homeAnchor = app.find('ScrollableAnchor').first()
  expect(homeAnchor.props().id).toBe('home')
  const home = homeAnchor.find('Home')
  expect(home.length).toBe(1)
})
