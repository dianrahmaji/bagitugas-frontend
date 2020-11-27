import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import CompleteProfileScreen from './screens/CompleteProfileScreen';

const App: React.FC = () => {
  return (
    <Router>
      <Route path="/login" exact component={LoginScreen} />
      <Route path="/register" exact component={RegisterScreen} />
      <Route path="/register/:role" exact component={CompleteProfileScreen} />
    </Router>
  );
}

export default App;
