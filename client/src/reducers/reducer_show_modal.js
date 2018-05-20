import showModal from '../actions/show_modal'

export default function (state = false, action) {
  switch (action.type) {
    case showModal().type:
      return action.payload
    default:
      return state
  }
}
