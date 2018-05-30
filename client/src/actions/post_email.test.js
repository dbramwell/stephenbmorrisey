/* global it, expect, describe */
import postEmail from './post_email'

describe('postEmail', () => {
  it('should create an action to send email in post request', () => {
    const email = 'email@test.com'
    const expectedAction = {
      type: 'POST_EMAIL',
      payload: email
    }
    expect(postEmail(email)).toEqual(expectedAction)
  })
})
