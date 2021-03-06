/* global it, expect */
import React from 'react'
import ReactDOM from 'react-dom'
import Menu from './Menu'
import { mount } from 'enzyme'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Menu />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('contains Navbar when created', () => {
  const menu = mount(<Menu />)
  const navbar = menu.find('Navbar')
  expect(navbar.length).toBe(1)
})

it('Navbar text is equal to "Stephen B. Morrisey"', () => {
  const menu = mount(<Menu />)
  const header = menu.find('.navbar-brand')
  expect(header.text()).toBe('Stephen B. Morrisey')
})

it('Can add navItems with navItems prop', () => {
  const menu = mount(<Menu navItems={['item1']} />)
  const item1 = menu.find('nav a').at(1)
  expect(item1.text()).toBe('item1')
})
