import {
  COURSE_CREATE_FAIL,
  COURSE_CREATE_REQUEST,
  COURSE_CREATE_SUCCESS,
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

export const courseListReducer = (state = {}, action) => {
  switch (action.type) {
    case COURSE_LIST_REQUEST:
      return { loading: true };
    case COURSE_LIST_SUCCESS:
      return { loading: false, courses: action.payload };
    case COURSE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const courseDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case COURSE_DETAILS_REQUEST:
      return { loading: true };
    case COURSE_DETAILS_SUCCESS:
      return { loading: false, details: action.payload };
    case COURSE_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const courseMaterialsReducer = (state = {}, action) => {
  switch (action.type) {
    case COURSE_MATERIALS_REQUEST:
      return { loading: true };
    case COURSE_MATERIALS_SUCCESS:
      return { loading: false, materials: action.payload };
    case COURSE_MATERIALS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const courseCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case COURSE_CREATE_REQUEST:
      return { loading: true };
    case COURSE_CREATE_SUCCESS:
      return { loading: false, course: action.payload };
    case COURSE_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
