const AWS = require('aws-sdk')
const Emails = require('./emails')
const validateEmail = require('../shared/validators/emailValidator')

const dynamoDb = new AWS.DynamoDB.DocumentClient()
const emails = new Emails(dynamoDb)

module.exports.signUp = (event, context, callback) => {
  const data = JSON.parse(event.body)

  if (!validateEmail(data.email)) {
    console.error('Validation Failed')
    callback(null, {
      statusCode: 400,
      headers: { 'Content-Type': 'text/plain' },
      body: 'Email is invalid'
    })
    return
  }

  var response = {
    statusCode: 200,
    body: 'Email Added Successfully',
    headers: { 'Content-Type': 'text/plain' }
  }

  emails.addEmail(data.email)
    .on('error', (error) => {
      console.error(error)
      response.statusCode = error.statusCode || 501
      response.body = 'Couldn\'t add email.'
    })
    .on('complete', function () {
      callback(null, response)
    })
    .send()
}
