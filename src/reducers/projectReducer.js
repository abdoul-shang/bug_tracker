import {
  CREATE_PROJECT_FAIL,
  CREATE_PROJECT_REQUEST,
  CREATE_PROJECT_SUCCESS,
  PROJECT_DETAIL_FAIL,
  PROJECT_DETAIL_REQUEST,
  PROJECT_DETAIL_RESET,
  PROJECT_DETAIL_SUCCESS,
  PROJECT_DISPLAY_FAIL,
  PROJECT_DISPLAY_REQUEST,
  PROJECT_DISPLAY_SUCCESS,
  PROJECT_UPDATE_FAIL,
  PROJECT_UPDATE_REQUEST,
  PROJECT_UPDATE_RESET,
  PROJECT_UPDATE_SUCCESS,
} from "../constants/projectConstant";

// REDUCER used in projectDisplayScreen component
export const projectsDisplayReducer = (state = { projects: [] }, action) => {
  switch (action.type) {
    case PROJECT_DISPLAY_REQUEST:
      return {
        loading: true,
        projects: [],
      };

    case PROJECT_DISPLAY_SUCCESS:
      return {
        loading: false,
        projects: action.payload,
      };
    case PROJECT_DISPLAY_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const createProjectReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_PROJECT_REQUEST:
      return {
        loading: true,
      };

    case CREATE_PROJECT_SUCCESS:
      return {
        loading: false,
        success: true,
        project: action.payload,
      };
    case CREATE_PROJECT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const projectDetailReducer = (state = { project: {} }, action) => {
  switch (action.type) {
    case PROJECT_DETAIL_REQUEST:
      return {
        loading: true,
      };

    case PROJECT_DETAIL_SUCCESS:
      return {
        loading: false,
        project: action.payload,
      };
    case PROJECT_DETAIL_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case PROJECT_DETAIL_RESET:
      return {
        project: {},
      };

    default:
      return state;
  }
};

export const projectUpdateReducer = (state = { project: {} }, action) => {
  switch (action.type) {
    case PROJECT_UPDATE_REQUEST:
      return {
        loading: true,
      };

    case PROJECT_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
        project: action.payload,
      };
    case PROJECT_UPDATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case PROJECT_UPDATE_RESET:
      return {
        project: {},
      };

    default:
      return state;
  }
};
