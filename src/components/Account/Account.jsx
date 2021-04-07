import React from 'react';

import PasswordChangeForm from '../PasswordChange';
import PasswordForgetForm from '../PasswordForget/PasswordForgetForm';

const AccountPage = () => (
  <div className="account__wrapper">
    <h2 className="page-title">Account Page</h2>
    <h5>Password Forget</h5>
    <PasswordForgetForm />
    <h5>Password change</h5>
    <PasswordChangeForm />
  </div>
);

export default AccountPage;
