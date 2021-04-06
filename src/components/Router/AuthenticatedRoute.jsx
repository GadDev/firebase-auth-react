import { Route } from 'react-router-dom';

import { withAuthorization } from '../Session';
const condition = (authUser) => !!authUser;
const AuthenticatedRoute = ({ component: Component, path, exact }) => {
  return (
    <Route path={path} exact={exact}>
      <Component />
    </Route>
  );
};

export default withAuthorization(condition)(AuthenticatedRoute);
