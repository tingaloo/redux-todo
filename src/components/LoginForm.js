import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class LoginForm extends Component {
  render() {
    return(
      <form>
        <div>
          <label htmlFor="username">Username</label>
          <Field
            name="username"
            component="input"
            type="text" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Field
            name="password"
            component="input"
            type="password"/>
        </div>
      </form>
    )
  }
}

LoginForm = reduxForm({
  form: 'login'
})(LoginForm)

export default LoginForm
