import { Route } from 'react-router-dom';

const PublicRoute = ({ component: Component, path, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={(props) => <Component {...props} />}
  ></Route>
);

export default PublicRoute;
