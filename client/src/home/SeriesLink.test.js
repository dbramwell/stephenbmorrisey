/* global it, expect */
import React from 'react'
import ReactDOM from 'react-dom'
import SeriesLink from './SeriesLink'
import { shallow } from 'enzyme'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<SeriesLink description={['this is some stuff']} />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('header matches header prop', () => {
  const seriesLink = shallow(<SeriesLink header='my-header' description={['this is some stuff']} />)
  const header = seriesLink.find('h2').first()
  expect(header.text()).toBe('my-header')
})

it('onClick sets the hash to the result of headerToHash', () => {
  const seriesLink = shallow(<SeriesLink header='My Header' description={['this is some stuff']} />)
  expect(window.location.hash).toBe('')
  seriesLink.instance().onClick()
  expect(window.location.hash).toBe('#my-header')
})

it('p matches description prop', () => {
  const seriesLink = shallow(<SeriesLink header='my-header' description={['this is some stuff']} />)
  const p = seriesLink.find('p').first()
  expect(p.text()).toBe('this is some stuff')
})
