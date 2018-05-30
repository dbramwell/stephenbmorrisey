const AWS = require('aws-sdk')
const EmailsStore = require('./emailsStore')
const EmailSender = require('./emailSender')
const validateEmail = require('../shared/validators/emailValidator')

const dynamoDb = new AWS.DynamoDB.DocumentClient()
const emails = new EmailsStore(dynamoDb)
const emailSender = new EmailSender()

const headers = {
  'Access-Control-Allow-Origin': '*', // Required for CORS support to work
  'Access-Control-Allow-Credentials': true // Required for cookies, authorization headers with HTTPS
}

module.exports.confirm = async (event, context, callback) => {
  const data = JSON.parse(event.body)

  var response = {
    statusCode: 200,
    headers
  }

  try {
    const email = await emails.getEmailByUid(data.uid)
    await emails.confirmEmail(email.Items[0].email)
    response.body = JSON.stringify({ 'message': `Thank you for adding ${email.Items[0].email} to my newsletter mailing list.` })
    callback(null, response)
  } catch (err) {
    console.error(err)
    response.statusCode = err.statusCode || 501
    response.body = JSON.stringify({ 'message': 'Could not confirm your email address. Please try again.' })
    callback(null, response)
  }
}

module.exports.signUp = async (event, context, callback) => {
  const data = JSON.parse(event.body)

  var response = {
    statusCode: 200,
    body: JSON.stringify({ 'message': 'Thank you for signing up, we have sent you an email asking you to confirm.' }),
    headers
  }

  if (!validateEmail(data.email)) {
    console.error('Validation Failed')
    response.statusCode = 400
    response.body = JSON.stringify({
      'message': 'Sorry, the email you have provided seems to be invalid.'
    })
    callback(null, response)
    return
  }

  try {
    var emailData = await emails.getEmail(data.email)
    if (emailData.Item && emailData.Item.confirmed) {
      response.body = JSON.stringify({ 'message': 'Thankyou. You are already signed up to the newsletter.' })
    } else {
      await emails.addEmail(data.email)
      emailData = await emails.getEmail(data.email)
      await emailSender.sendEmail(data.email, emailData.Item.uid)
    }
    callback(null, response)
  } catch (err) {
    console.error(err)
    response.statusCode = err.statusCode || 501
    response.body = JSON.stringify({ 'message': 'There has been an error, please try again.' })
    callback(null, response)
  }
}
