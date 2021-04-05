/* eslint-disable no-unused-vars */
import { Component } from 'react';

import { INITIAL_STATE } from './config';

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit(event) {}

  onChange(event) {}

  render() {
    return <form onSubmit={this.onSubmit}></form>;
  }
}

export default SignUpForm;
