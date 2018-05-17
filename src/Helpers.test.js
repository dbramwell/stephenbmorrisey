/* global it, expect */
import Helpers from './Helpers'

it('headerToHash replaces spaces with dashes and converts to lower case', () => {
  expect(Helpers.headerToHash('My Header')).toBe('my-header')
})
