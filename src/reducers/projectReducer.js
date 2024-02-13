import {
  CONTRIBUTORS_DISPLAY_FAIL,
  CONTRIBUTORS_DISPLAY_REQUEST,
  CONTRIBUTORS_DISPLAY_SUCCESS,
  CONTRIBUTOR_DELETE_FAIL,
  CONTRIBUTOR_DELETE_REQUEST,
  CONTRIBUTOR_DELETE_SUCCESS,
  CREATE_ISSUE_FAIL,
  CREATE_ISSUE_REQUEST,
  CREATE_ISSUE_RESET,
  CREATE_ISSUE_SUCCESS,
  CREATE_PROJECT_FAIL,
  CREATE_PROJECT_REQUEST,
  CREATE_PROJECT_SUCCESS,
  DELETE_ISSUE_FAIL,
  DELETE_ISSUE_REQUEST,
  DELETE_ISSUE_SUCCESS,
  ISSUES_DISPLAY_FAIL,
  ISSUES_DISPLAY_REQUEST,
  ISSUES_DISPLAY_SUCCESS,
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
  PROJECT_USER_ROLE_FAIL,
  PROJECT_USER_ROLE_REQUEST,
  PROJECT_USER_ROLE_RESET,
  PROJECT_USER_ROLE_SUCCESS,
  UPDATE_ISSUE_FAIL,
  UPDATE_ISSUE_REQUEST,
  UPDATE_ISSUE_RESET,
  UPDATE_ISSUE_SUCCESS,
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
        succes: true,
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

export const projectUserRoleReducer = (state = {}, action) => {
  switch (action.type) {
    case PROJECT_USER_ROLE_REQUEST:
      return {
        loading: true,
      };

    case PROJECT_USER_ROLE_SUCCESS:
      return {
        loading: false,
        role: action.payload,
      };
    case PROJECT_USER_ROLE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    // case PROJECT_USER_ROLE_RESET:
    //   return {
    //     project: {},
    //   };

    default:
      return state;
  }
};

export const contributorsDisplayReducer = (
  state = { contributors: [] },
  action
) => {
  switch (action.type) {
    case CONTRIBUTORS_DISPLAY_REQUEST:
      return {
        loading: true,
        contributors: [],
      };

    case CONTRIBUTORS_DISPLAY_SUCCESS:
      return {
        loading: false,
        contributors: action.payload,
      };
    case CONTRIBUTORS_DISPLAY_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const contributorDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case CONTRIBUTOR_DELETE_REQUEST:
      return {
        loading: true,
      };

    case CONTRIBUTOR_DELETE_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case CONTRIBUTOR_DELETE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const issuesDisplayReducer = (state = { issues: [] }, action) => {
  switch (action.type) {
    case ISSUES_DISPLAY_REQUEST:
      return {
        loading: true,
        issues: [],
      };

    case ISSUES_DISPLAY_SUCCESS:
      return {
        loading: false,
        issues: action.payload,
      };
    case ISSUES_DISPLAY_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const createIssueReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_ISSUE_REQUEST:
      return {
        loading: true,
      };

    case CREATE_ISSUE_SUCCESS:
      return {
        loading: false,
        success: true,
        issue: action.payload,
      };
    case CREATE_ISSUE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case CREATE_ISSUE_RESET:
      return {
        issue: {},
      };

    default:
      return state;
  }
};

export const issueUpdateReducer = (state = { issue: {} }, action) => {
  switch (action.type) {
    case UPDATE_ISSUE_REQUEST:
      return {
        loading: true,
      };

    case UPDATE_ISSUE_SUCCESS:
      return {
        loading: false,
        success: true,
        issue: action.payload,
      };
    case UPDATE_ISSUE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case UPDATE_ISSUE_RESET:
      return {
        issue: {},
      };

    default:
      return state;
  }
};

export const issueDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_ISSUE_REQUEST:
      return {
        loading: true,
      };

    case DELETE_ISSUE_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case DELETE_ISSUE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
