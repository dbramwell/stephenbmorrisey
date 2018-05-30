export const validateEmail = (uid) => {
  return fetch('https://t947vb0r5d.execute-api.us-east-1.amazonaws.com/dev/confirm', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({uid})
  })
}
