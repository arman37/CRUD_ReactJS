/**
 *
 * @author arman
 * @since 10/3/2016.
 *
 */
'use strict';
import React, {Component, PropTypes} from 'react';
import LoginPage from './LoginPage';

const API_URL = 'http://127.0.0.1:8080';
const API_HEADERS = {
    'Content-Type': 'application/json',
    Authorization: 'any-string-you-like'// The Authorization is not needed for local server
};

class LoginContainer extends Component {
  constructor() {
    super(...arguments);

    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange(field, value) {
    this.setState({[field]: value});
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    this.context.router.push('/dashboard');
    // fetch(`${API_URL}/login`, {
    //     method: 'GET',
    //     headers: API_HEADERS,
    //     body: JSON.stringify(this.state)
    // })
    // .then((response) => {
    //     if(response.ok) this.context.router.push('/dashboard');
    //     else {
    //         throw new Error("Server response wasn't OK")
    //     }
    // })
    // .catch((error) => {
    //
    // });
  }

  render() {
    return (
      <LoginPage
        loginCallBacks={{
          handleChange: this.handleChange.bind(this),
          handleSubmit: this.handleSubmit.bind(this)
        }} />
    );
  }
}

LoginContainer.contextTypes = {
  router: PropTypes.object.isRequired
};

export default LoginContainer;