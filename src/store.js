import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  userRegisterReducer,
  userCompleteProfileReducer,
  userLoginReducer,
} from './reducers/userReducers';

import {
  courseListReducer,
  courseDetailsReducer,
  courseMaterialsReducer,
  courseCreateReducer,
} from './reducers/courseReducers';

const reducer = combineReducers({
  courseCreate: courseCreateReducer,
  courseDetails: courseDetailsReducer,
  courseList: courseListReducer,
  courseMaterials: courseMaterialsReducer,
  userRegister: userRegisterReducer,
  userCompleteProfile: userCompleteProfileReducer,
  userLogin: userLoginReducer,
});

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo') || '{}')
  : null;

const initialState = {
  userLogin: {
    userInfo: userInfoFromStorage,
  },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
