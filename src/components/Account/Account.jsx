import React from 'react';

import PasswordChangeForm from '../PasswordChange';
import PasswordForgetForm from '../PasswordForget/PasswordForgetForm';

const AccountPage = () => (
  <div>
    <h1>Account Page</h1>
    <h2>Password Forget</h2>
    <PasswordForgetForm />
    <h2>Password change</h2>
    <PasswordChangeForm />
  </div>
);

export default AccountPage;
