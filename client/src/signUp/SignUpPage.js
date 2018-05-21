import React, { Component } from 'react'
import { FormGroup, FormControl, Button } from 'react-bootstrap'
import emailValidator from '../shared/validators/emailValidator'

export default class SignUpPage extends Component {
  constructor (props) {
    super(props)
    this.state = {email: ''}
    this.handleChange = this.handleChange.bind(this)
  }

  getValidationState () {
    const validEmail = emailValidator(this.state.email)
    return validEmail ? 'success' : 'error'
  }

  handleChange (e) {
    this.setState({ email: e.target.value })
  }

  render () {
    return (
      <div className='spacer'>
        <div className='page'>
          <h2 className='section-header'>Sign up for the Newsletter</h2>
          <div className='info centered'>
            <p>If you would like to receive information regarding upcoming releases from Stephen B. Morrisey, submit your email address below:</p>
            <form>
              <FormGroup
                controlId='formBasicText'
                validationState={this.getValidationState()}
              >
                <FormControl
                  type='text'
                  value={this.state.email}
                  placeholder='example@email.com'
                  onChange={this.handleChange}
                />
                <FormControl.Feedback />
                <Button type='submit'>Submit</Button>
              </FormGroup>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
