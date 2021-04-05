import { Redirect, Switch } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import HomePage from '../Home';
import LandingPage from '../Landing';
import PasswordForgetPage from '../PasswordForget';
import SignInPage from '../SignIn';
import SignUpPage from '../SignUp';
import AuthenticatedRoute from './AuthenticatedRoute';
import PublicRoute from './PublicRoute';

const Routes = () => (
  <Switch>
    <PublicRoute exact path={ROUTES.LANDING} component={LandingPage} />
    <PublicRoute path={ROUTES.SIGN_UP} component={SignUpPage} />
    <PublicRoute path={ROUTES.SIGN_IN} component={SignInPage} />
    <PublicRoute path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
    <AuthenticatedRoute path={ROUTES.HOME} component={HomePage} />
    <AuthenticatedRoute path={ROUTES.ACCOUNT} component={AccountPage} />
    <AuthenticatedRoute path={ROUTES.ADMIN} component={AdminPage} />

    <Redirect exact from="/*" to="/" />
  </Switch>
);

export default Routes;
