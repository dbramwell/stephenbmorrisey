/* global it, expect, describe */
import validateEmail from './validate_email'

describe('validateEmail', () => {
  it('should create an action to validate email in post request', () => {
    const uid = '123456789'
    const expectedAction = {
      type: 'VALIDATE_EMAIL',
      payload: uid
    }
    expect(validateEmail(uid)).toEqual(expectedAction)
  })
})
