/* global it, expect, describe */
import showModalReducer from './reducer_show_modal'

describe('modalDataReducer', () => {
  const book = {header: 'header'}

  it('should return book when action type is SET_MODAL_BOOK_DETAILS', () => {
    const action = {
      type: 'SHOW_MODAL',
      payload: book
    }
    expect(showModalReducer({}, action)).toEqual(book)
  })

  it('should return state when action type is not recognised', () => {
    const state = {header: 'something else'}
    const action = {
      type: 'NOT_RECOGNISED',
      payload: book
    }
    expect(showModalReducer(state, action)).toEqual(state)
  })
})
