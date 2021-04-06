import React, { useEffect } from 'react';
import { Route, useHistory } from 'react-router-dom';

import { AuthUserContext } from '../Session';
const AuthRoute = ({ component: Component, path, exact, authUser }) => {
  const history = useHistory();
  useEffect(() => {
    if (!authUser) {
      history.push('/signin');
    }
  }, [history, authUser]);

  const renderRoute = authUser ? (
    <Route path={path} exact={exact}>
      <Component />
    </Route>
  ) : null;
  return renderRoute;
};

const AuthenticatedRoute = ({ component, path, exact }) => (
  <AuthUserContext.Consumer>
    {(authUser) => (
      <AuthRoute
        component={component}
        path={path}
        exact={exact}
        authUser={authUser}
      />
    )}
  </AuthUserContext.Consumer>
);

export default AuthenticatedRoute;
