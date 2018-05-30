import { SHOW_MODAL_TYPE } from '../constants/types'

function showModal (show) {
  return {
    type: SHOW_MODAL_TYPE,
    payload: show
  }
}
export default showModal
