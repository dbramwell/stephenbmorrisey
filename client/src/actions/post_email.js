import { POST_EMAIL_TYPE } from '../constants/types'

function postEmail (email) {
  return {
    type: POST_EMAIL_TYPE,
    payload: email
  }
}
export default postEmail
