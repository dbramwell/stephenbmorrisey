/* global jest, it, expect, describe, beforeEach */
const Emails = require('./emails')

describe('emails', () => {
  var emails
  const emailAddress = 'test@gmail.com'
  const tableName = 'test-table'
  process.env.DYNAMODB_TABLE = tableName

  beforeEach(() => {
    const db = {
      put: jest.fn().mockImplementation(() => {return {promise: jest.fn()}}),
      get: jest.fn().mockImplementation(() => {return {promise: jest.fn()}})
    }
    emails = new Emails(db)
  })

  it('addEmail should call try to add email to the DB with uid and confirmed set to false', () => {
    emails.addEmail(emailAddress)
    expect(emails.db.put.mock.calls.length).toBe(1)
    expect(emails.db.put.mock.calls[0][0].TableName).toEqual(tableName)
    expect(emails.db.put.mock.calls[0][0].Item.email).toEqual(emailAddress)
    expect(emails.db.put.mock.calls[0][0].Item.confirmed).toBe(false)
    expect(emails.db.put.mock.calls[0][0].Item.uid).toBeTruthy()
  })

  it('getEmail should call try to get the email from the db', () => {
    emails.getEmail(emailAddress)
    expect(emails.db.get.mock.calls.length).toBe(1)
    expect(emails.db.get.mock.calls[0][0].TableName).toEqual(tableName)
    expect(emails.db.get.mock.calls[0][0].Key.email).toEqual(emailAddress)
  })
})
