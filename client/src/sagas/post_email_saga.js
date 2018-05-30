import { takeEvery } from 'redux-saga/effects'
import { POST_EMAIL_TYPE } from '../constants/types'
import postEmailToAPISaga from './post_email_to_api_saga'

export default function* postEmail() {
  yield takeEvery(POST_EMAIL_TYPE, postEmailToAPISaga)
}