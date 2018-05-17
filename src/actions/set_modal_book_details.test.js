/* global it, expect, describe */
import setModalBookDetails from './set_modal_book_details'

describe('setModalBookDetails', () => {
  it('should create an action to set modal book details', () => {
    const book = {header: 'Heading'}
    const expectedAction = {
      type: 'SET_MODAL_BOOK_DETAILS',
      payload: book
    }
    expect(setModalBookDetails(book)).toEqual(expectedAction)
  })
})
