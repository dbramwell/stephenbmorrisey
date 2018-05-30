export const postEmail = (email) => {
  return fetch('https://t947vb0r5d.execute-api.us-east-1.amazonaws.com/dev/signUp', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email})
  })
}
