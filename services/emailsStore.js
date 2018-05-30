class EmailsStore {
  constructor (db) {
    this.db = db
  }

  getEmailByUid (uid) {
    var params = {
      TableName: process.env.DYNAMODB_TABLE,
      ProjectionExpression: 'email',
      FilterExpression: '#uid = :uid',
      ExpressionAttributeNames: {
        '#uid': 'uid'
      },
      ExpressionAttributeValues: {
        ':uid': uid
      }
    }
    return this.db.scan(params).promise()
  }

  confirmEmail (email) {
    const params = {
      TableName: process.env.DYNAMODB_TABLE,
      Key: {
        email
      },
      ExpressionAttributeNames: {
        '#confirmed': 'confirmed'
      },
      ExpressionAttributeValues: {
        ':confirmed': true
      },
      UpdateExpression: 'SET #confirmed = :confirmed',
      ReturnValues: 'ALL_NEW'
    }
    return this.db.update(params).promise()
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
    return this.db.put(params).promise()
  }

  getEmail (email) {
    const params = {
      TableName: process.env.DYNAMODB_TABLE,
      Key: {
        email
      }
    }
    return this.db.get(params).promise()
  }
}

module.exports = EmailsStore
