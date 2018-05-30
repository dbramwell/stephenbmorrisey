import { SET_MODAL_BOOK_DETAILS_TYPE } from '../constants/types'

function setModalBookDetails (book) {
  return {
    type: SET_MODAL_BOOK_DETAILS_TYPE,
    payload: book
  }
}
export default setModalBookDetails
