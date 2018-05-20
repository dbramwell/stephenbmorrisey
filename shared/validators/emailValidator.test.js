/* global it, expect, describe */
const emailValidator = require('./emailValidator')

describe('emailValidator', () => {
  it('returns false for invalid email', () => {
    expect(emailValidator('invalid email')).toBe(false)
  })

  it('returns true for valid email', () => {
    expect(emailValidator('test@gmail.com')).toBe(true)
  })
})
