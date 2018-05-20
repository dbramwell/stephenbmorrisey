/* global it, expect, describe */
import showModalReducer from './reducer_show_modal'

describe('showModalReducer', () => {
  it('should return true when action type is SHOW_MODAL and payload true', () => {
    const action = {
      type: 'SHOW_MODAL',
      payload: true
    }
    expect(showModalReducer(false, action)).toEqual(true)
  })

  it('should return false when action type is SHOW_MODAL and payload false', () => {
    const action = {
      type: 'SHOW_MODAL',
      payload: false
    }
    expect(showModalReducer(true, action)).toEqual(false)
  })

  it('should return state when action type is not recognised', () => {
    const action = {
      type: 'NOT_RECOGNISED',
      payload: true
    }
    expect(showModalReducer(false, action)).toEqual(false)
  })
})
