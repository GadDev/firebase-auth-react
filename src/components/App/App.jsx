import { BrowserRouter as Router } from 'react-router-dom';

import Navigation from '../Navigation';
import Routes from '../Router';
import { withAuthentication } from '../Session';

const App = () => (
  <Router>
    <div>
      <Navigation />
      <hr />
      <Routes />
    </div>
  </Router>
);

export default withAuthentication(App);
