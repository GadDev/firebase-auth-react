import PasswordForgetLink from '../PasswordForget/PasswordForgetLink';
import SignInForm from './SignInForm';
import SignUpLink from './SignUpLink';
const SignIn = () => (
  <div className="account__wrapper">
    <h2 className="page-title">SignIn</h2>
    <SignInForm />
    <PasswordForgetLink />
    <SignUpLink />
  </div>
);

export default SignIn;
