/* global it, expect, describe */
import showModal from './show_modal'

describe('showModal', () => {
  it('should create an action to show modal', () => {
    const expectedAction = {
      type: 'SHOW_MODAL',
      payload: true
    }
    expect(showModal(true)).toEqual(expectedAction)
  })

  it('should create an action to hide modal', () => {
    const expectedAction = {
      type: 'SHOW_MODAL',
      payload: false
    }
    expect(showModal(false)).toEqual(expectedAction)
  })
})
