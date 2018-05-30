const aws = require('aws-sdk')
const nodemailer = require('nodemailer')

const ses = new aws.SES()
const from = 'no_reply@stephenbmorrisey.com'
const subject = 'Newsletter Confirmation'

class EmailSender {
  sendEmail (email, uid) {
    const mailOptions = {
      from,
      subject,
      html: `<h1>Thankyou for signing up to my newsletter.</h1>
        <p>To confirm that you would like to receive newsletters
        from me containing information about my books, please
        click this <a href='www.stephenbmorrisey.com?emailUid=${uid}'>
        link</a></p><p>Many thanks,</p><p>Stephen B. Morrisey</p>`,
      to: email
    }

    const transporter = nodemailer.createTransport({
      SES: ses
    })

    return transporter.sendMail(mailOptions)
  }
}

module.exports = EmailSender
