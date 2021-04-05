import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import * as ROUTES from '../../constants/routes';
import { withFirebase } from '../Firebase';

const SignOutButtonBase = ({ firebase, history }) => {
  const handleClick = () => {
    firebase.doSignOut().then(() => {
      history.push(ROUTES.LANDING);
    });
  };
  return (
    <button type="button" onClick={handleClick}>
      Sign Out
    </button>
  );
};

const SignOutButton = compose(withRouter, withFirebase)(SignOutButtonBase);
export default SignOutButton;
