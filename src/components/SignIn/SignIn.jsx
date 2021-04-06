import PasswordForgetLink from '../PasswordForget/PasswordForgetLink';
import SignInForm from './SignInForm';
import SignUpLink from './SignUpLink';
const SignIn = () => (
  <div>
    <h1>SignIn</h1>
    <SignInForm />
    <PasswordForgetLink />
    <SignUpLink />
  </div>
);

export default SignIn;
