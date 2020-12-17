import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import CompleteRegisterScreen from './screens/CompleteRegisterScreen';
import CourseScreen from './screens/CourseScreen';
import DashboardScreen from './screens/DashboardScreen';
import CourseDetailsScreen from './screens/CourseDetailsScreen';
import ProfileScreen from './screens/ProfileScreen';
import CreateCourseScreen from './screens/CreateCourseScreen';

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={HomeScreen} />
      <Route path="/login" exact component={LoginScreen} />
      <Route path="/register" exact component={RegisterScreen} />
      <Route path="/register/:role" exact component={CompleteRegisterScreen} />
      <Route path="/create" exact component={CreateCourseScreen} />
      <Route path="/course/:id" exact component={CourseScreen} />
      <Route path="/dashboard" exact component={DashboardScreen} />
      <Route path="/course/:id/details" exact component={CourseDetailsScreen} />
      <Route path="/profile" exact component={ProfileScreen}/>
    </Router>
  );
}

export default App;
