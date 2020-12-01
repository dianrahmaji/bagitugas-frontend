import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_COMPLETE_PROFILE_SUCCESS,
  USER_COMPLETE_PROFILE_REQUEST,
  USER_COMPLETE_PROFILE_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
} from '../constants/userConstants';

export const userRegisterReducer = (state = {}, action: any) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, token: action.payload };
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userCompleteProfileReducer = (state = {}, action: any) => {
  switch (action.type) {
    case USER_COMPLETE_PROFILE_REQUEST:
      return { loading: true };
    case USER_COMPLETE_PROFILE_SUCCESS:
      return { loading: false, userProfile: action.payload };
    case USER_COMPLETE_PROFILE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userLoginReducer = (state = {}, action: any) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfro: action.payload };
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
