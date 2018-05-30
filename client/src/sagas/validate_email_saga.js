import { takeEvery } from 'redux-saga/effects'
import { VALIDATE_EMAIL_TYPE } from '../constants/types'
import validateEmailToAPISaga from './validate_email_to_api_saga'

export default function * validateEmail () {
  yield takeEvery(VALIDATE_EMAIL_TYPE, validateEmailToAPISaga)
}
