/**
 *
 * @author arman
 * @since 10/3/2016.
 *
 */
'use strict';

import React, {Component, PropTypes} from 'react';
import Logo from './Logo';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class LoginForm extends Component {
  handleChange(field, e) {
    this.props.loginCallBacks.handleChange(field, e.target.value);
  }

  render() {
    return (
      <Paper className="login-form-wrapper" zDepth={5}>
        <Logo></Logo>
        <form onSubmit={this.props.loginCallBacks.handleSubmit.bind(this)}>
          <TextField
            hintText="typeAnythingAsUsername&Password@gmail.com"
            floatingLabelText="Username"
            autoFocus={true}
            required={true}
            onChange={this.handleChange.bind(this, 'username')}
            className="form-input-wrapper" /><br/>
          <TextField
            hintText=""
            floatingLabelText="Password"
            type="password"
            required={true}
            onChange={this.handleChange.bind(this, 'password')}
            className="form-input-wrapper" /><br/>
          <RaisedButton
            label="Login"
            type="submit"
            className="form-input-wrapper login-button" /><br/>
        </form>
      </Paper>
    );
  }
}

export default LoginForm;