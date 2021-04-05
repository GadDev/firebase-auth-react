// import SignUpLink from './SignUpLink';
import { FirebaseContext } from '../Firebase';
import SignUpForm from './SignUpForm';
const SignUp = () => (
  <div>
    <h1>SignUp</h1>
    <FirebaseContext.Consumer>
      {(firebase) => <SignUpForm firebase={firebase} />}
    </FirebaseContext.Consumer>
  </div>
);

export default SignUp;
