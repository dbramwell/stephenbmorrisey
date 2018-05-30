import { VALIDATE_EMAIL_TYPE } from '../constants/types'

function validateEmail (uid) {
  return {
    type: VALIDATE_EMAIL_TYPE,
    payload: uid
  }
}
export default validateEmail
