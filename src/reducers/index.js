import { combineReducers } from 'redux'
import showModalReducer from './reducer_show_modal'
import modalDataReducer from './reducer_modal_data'

const rootReducer = combineReducers({
  showModal: showModalReducer,
  modalData: modalDataReducer
});
export default rootReducer;