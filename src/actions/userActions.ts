import axios from 'axios';
import {
  USER_COMPLETE_PROFILE_REQUEST,
  USER_COMPLETE_PROFILE_FAIL,
  USER_COMPLETE_PROFILE_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_LOGIN_SUCCESS,
} from '../constants/userConstants';

export const register = (
  email: string,
  password: string,
  confirmPassword: string
) => async (dispatch: any) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const data = await axios.post(
      'api/rest-auth/registration/',
      {
        email,
        password1: password,
        password2: confirmPassword,
      },
      config
    );

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    });

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem('UserInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const completeProfile = () => async (dispatch: any, getState: any) => {
  try {
    dispatch({
      type: USER_COMPLETE_PROFILE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${userInfo.token}`,
      },
    };

    const data = await axios.post('/api/rest-auth/', config);

    dispatch({
      type: USER_COMPLETE_PROFILE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_COMPLETE_PROFILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
