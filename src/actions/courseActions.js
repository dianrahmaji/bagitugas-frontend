import axios from 'axios';
import {
  COURSE_CREATE_FAIL,
  COURSE_CREATE_REQUEST,
  COURSE_DETAILS_FAIL,
  COURSE_DETAILS_REQUEST,
  COURSE_DETAILS_SUCCESS,
  COURSE_LIST_FAIL,
  COURSE_LIST_REQUEST,
  COURSE_LIST_SUCCESS,
  COURSE_MATERIALS_FAIL,
  COURSE_MATERIALS_REQUEST,
  COURSE_MATERIALS_SUCCESS,
} from '../constants/courseConstants';
import {} from '../constants/userConstants';

export const getCourseList = () => async (dispatch) => {
  try {
    dispatch({
      type: COURSE_LIST_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.get(
      'http://ec2-3-84-119-141.compute-1.amazonaws.com/api/course',
      config
    );
    console.table(data);

    dispatch({
      type: COURSE_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: COURSE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getCourseDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: COURSE_DETAILS_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data: details } = await axios.get(
      `http://ec2-3-84-119-141.compute-1.amazonaws.com/api/course/${id}`,
      config
    );
    console.table(details);

    dispatch({
      type: COURSE_DETAILS_SUCCESS,
      payload: details,
    });

    dispatch({
      type: COURSE_MATERIALS_REQUEST,
    });

    const { data: materials } = await axios.get(
      `http://ec2-3-84-119-141.compute-1.amazonaws.com/api/material?course=${details.id}`,
      config
    );
    console.table(materials);

    dispatch({
      type: COURSE_MATERIALS_SUCCESS,
      payload: materials,
    });
  } catch (error) {
    dispatch({
      type: COURSE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    dispatch({
      type: COURSE_MATERIALS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createCourse = (judul, deskripsi, link, reward) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: COURSE_CREATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    console.log(userInfo)

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${userInfo.data.key}`,
      },
    };

    const { data } = await axios.post(
      'http://ec2-3-84-119-141.compute-1.amazonaws.com/api/course/',
      {
        judul,
        deskripsi,
        link,
        reward,
      },
      config
    );
    console.log(data)

    dispatch({ type: COURSE_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: COURSE_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
