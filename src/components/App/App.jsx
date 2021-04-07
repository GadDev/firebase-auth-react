import './App.css';

import { BrowserRouter as Router } from 'react-router-dom';

import Navigation from '../Navigation';
import Routes from '../Router';
import { withAuthentication } from '../Session';
const App = () => (
  <Router>
    <div>
      <Navigation />
      <main className="page__wrapper">
        <Routes />
      </main>
    </div>
  </Router>
);

export default withAuthentication(App);
