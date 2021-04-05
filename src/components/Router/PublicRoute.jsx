import { Route } from 'react-router-dom';

const PublicRoute = ({ component: Component, path, exact }) => (
  <Route path={path} exact={exact}>
    <Component />
  </Route>
);

export default PublicRoute;
