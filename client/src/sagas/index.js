import { all } from 'redux-saga/effects'
import postEmail from './post_email_saga'
import validateEmail from './validate_email_saga'

export default function * rootSaga () {
  yield all([
    postEmail(),
    validateEmail()
  ])
}
