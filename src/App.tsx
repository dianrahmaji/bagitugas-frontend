import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import CompleteRegisterScreen from './screens/CompleteRegisterScreen';
import CourseScreen from './screens/CourseScreen';
import DashboardScreen from './screens/DashcboardScreen';
import CourseContentScreen from './screens/CourseContentScreen';

const App: React.FC = () => {
  return (
    <Router>
      <Route path="/" exact component={HomeScreen} />
      <Route path="/login" exact component={LoginScreen} />
      <Route path="/register" exact component={RegisterScreen} />
      <Route path="/register/:role" exact component={CompleteRegisterScreen} />
      <Route path="/course" exact component={CourseScreen} />
      <Route path="/dashboard" exact component={DashboardScreen} />
      <Route path="/course/content" exact component={CourseContentScreen} />
    </Router>
  );
}

export default App;
