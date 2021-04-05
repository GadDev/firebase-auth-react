/* eslint-disable no-unused-vars */
import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import * as ROUTES from '../../constants/routes';
import { withFirebase } from '../Firebase';
import { INITIAL_STATE } from './initialState';

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit(event) {
    const { username, email, passwordOne } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then((authUser) => {
        console.log(authUser);
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch((error) => {
        this.setState({ error });
      });

    event.preventDefault();
  }

  onChange(event) {
    console.log(event);
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state;
    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';
    return (
      <form onSubmit={(e) => this.onSubmit(e)}>
        <input
          name="username"
          value={username}
          onChange={(e) => this.onChange(e)}
          type="text"
          placeholder="Full Name"
        />
        <input
          name="email"
          value={email}
          onChange={(e) => this.onChange(e)}
          type="text"
          placeholder="Email Address"
        />
        <input
          name="passwordOne"
          value={passwordOne}
          onChange={(e) => this.onChange(e)}
          type="password"
          placeholder="Password"
        />
        <input
          name="passwordTwo"
          value={passwordTwo}
          onChange={(e) => this.onChange(e)}
          type="password"
          placeholder="Confirm Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign Up
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignUpForm = compose(withRouter, withFirebase)(SignUpFormBase);

export default SignUpForm;
