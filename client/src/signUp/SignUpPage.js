import React, { Component } from 'react'
import { FormGroup, FormControl, Button } from 'react-bootstrap'
import emailValidator from '../shared/validators/emailValidator'
import postEmail from '../actions/post_email'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class SignUpPage extends Component {
  constructor (props) {
    super(props)
    this.state = {email: ''}
    this.handleChange = this.handleChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  getValidationState () {
    const validEmail = emailValidator(this.state.email)
    return validEmail ? 'success' : 'error'
  }

  handleChange (e) {
    this.setState({ email: e.target.value })
  }

  onSubmit (e) {
    e.preventDefault()
    console.log('posting')
    this.props.postEmail(e.target.elements.email.value)
    console.log('posted')
  }

  render () {
    return (
      <div className='spacer'>
        <div className='page'>
          <h2 className='section-header'>Sign up for the Newsletter</h2>
          <div className='info centered'>
            <p>If you would like to receive information regarding upcoming releases from Stephen B. Morrisey, submit your email address below:</p>
            <form onSubmit={this.onSubmit}>
              <FormGroup
                controlId='formBasicText'
                validationState={this.getValidationState()}
              >
                <FormControl
                  type='text'
                  name="email"
                  value={this.state.email}
                  placeholder='example@email.com'
                  onChange={this.handleChange}
                />
                <FormControl.Feedback />
                <br/>
                <Button disabled={this.getValidationState() === 'error'} type='submit'>Submit</Button>
              </FormGroup>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    postEmail
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage)
