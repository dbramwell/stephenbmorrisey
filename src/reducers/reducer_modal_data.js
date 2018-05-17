import setModalBookDetails from '../actions/set_modal_book_details'

export default function (state = {}, action) {
  switch (action.type) {
    case setModalBookDetails().type:
      return action.payload
    default:
      return state
  }
}
