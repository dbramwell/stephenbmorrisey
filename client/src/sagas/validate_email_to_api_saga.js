import { call } from 'redux-saga/effects'
import { validateEmail } from '../api/validate_email_api'
import { toast } from 'react-toastify'

const updateToast = (type, message, id) => {
  toast.update(id,
    {
      render: message,
      type,
      autoClose: 5000
    })
}

export default function * validateEmailToAPISaga (action) {
  const inProgressToast = toast.warn('Confirming your email. Please wait.',
    {
      position: toast.POSITION.TOP_CENTER,
      autoClose: false
    }
  )
  try {
    const response = yield call(validateEmail, action.payload)
    const data = yield call([response, response.json])
    if (response.status === 200) {
      updateToast(toast.TYPE.SUCCESS, data.message, inProgressToast)
    } else {
      updateToast(toast.TYPE.ERROR, data.message, inProgressToast)
    }
  } catch (e) {
    updateToast(toast.TYPE.ERROR,
      'Sorry, there has been an error. Please try again another time.',
      inProgressToast)
  }
}
