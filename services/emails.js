class Emails {
  constructor (db) {
    this.db = db
  }

  addEmail (email) {
    const params = {
      TableName: process.env.DYNAMODB_TABLE,
      Item: {
        email: email,
        uid: Math.random().toString(36).substring(2) +
        (new Date()).getTime().toString(36),
        confirmed: false
      }
    }
    return this.db.put(params)
  }
}

module.exports = Emails
