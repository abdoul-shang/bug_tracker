import axios from "axios";
import {
  CONTRIBUTORS_DISPLAY_FAIL,
  CONTRIBUTORS_DISPLAY_REQUEST,
  CONTRIBUTORS_DISPLAY_SUCCESS,
  CONTRIBUTOR_DELETE_FAIL,
  CONTRIBUTOR_DELETE_REQUEST,
  CONTRIBUTOR_DELETE_SUCCESS,
  CREATE_ISSUE_FAIL,
  CREATE_ISSUE_REQUEST,
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
  PROJECT_DETAIL_SUCCESS,
  PROJECT_DISPLAY_FAIL,
  PROJECT_DISPLAY_REQUEST,
  PROJECT_DISPLAY_SUCCESS,
  PROJECT_UPDATE_FAIL,
  PROJECT_UPDATE_REQUEST,
  PROJECT_UPDATE_SUCCESS,
  PROJECT_USER_ROLE_FAIL,
  PROJECT_USER_ROLE_REQUEST,
  PROJECT_USER_ROLE_SUCCESS,
  UPDATE_ISSUE_FAIL,
  UPDATE_ISSUE_REQUEST,
  UPDATE_ISSUE_SUCCESS,
} from "../constants/projectConstant";

export const getProjectDisplay = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: PROJECT_DISPLAY_REQUEST,
    });

    // PULLING THE CURRENT USER WE ARE LOGGED IN AS

    const {
      userLogin: { userInfo },
    } = getState();

    // MAKE GET REQUEST TO GET THE USER DATA
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.access}` /* PASSING IN USER TOKEN AND IF THE USER IN AUTHORISED HE'LL HAVE FULL ACCESS TO HIS PROFILE INFORMATION */,
      },
    };

    const { data } = await axios.get("http://127.0.0.1:8000/projects/", config);

    dispatch({
      type: PROJECT_DISPLAY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PROJECT_DISPLAY_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const createNewProject =
  (title, description, projectType, authorId) => async (dispatch, getState) => {
    try {
      dispatch({
        type: CREATE_PROJECT_REQUEST,
      });

      // PULLING THE CURRENT USER WE ARE LOGGED IN AS

      const {
        userLogin: { userInfo },
      } = getState();

      // MAKE GET REQUEST TO GET THE USER DATA
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.access}` /* PASSING IN USER TOKEN AND IF THE USER IN AUTHORISED HE'LL HAVE FULL ACCESS TO HIS PROFILE INFORMATION */,
        },
      };

      const response = await axios.post(
        "http://127.0.0.1:8000/projects/",
        {
          title: title,
          description: description,
          type: projectType,
          author_user: authorId,
        },
        config
      );

      console.log("posted data", response.data);
      console.log("posted status", response.status);
      console.log("posted status", response.message);

      dispatch({
        type: CREATE_PROJECT_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: CREATE_PROJECT_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };

export const getProjectDetail = (projectId) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PROJECT_DETAIL_REQUEST,
    });

    // PULLING THE CURRENT USER WE ARE LOGGED IN AS

    const {
      userLogin: { userInfo },
    } = getState();

    // MAKE GET REQUEST TO GET THE USER DATA
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.access}` /* PASSING IN USER TOKEN AND IF THE USER IN AUTHORISED HE'LL HAVE FULL ACCESS TO HIS PROFILE INFORMATION */,
      },
    };

    const { data } = await axios.get(
      `http://127.0.0.1:8000/projects/${projectId}/`,
      config
    );
    // console.log("responssseeee", response);
    console.log("datttaaaaa", data);
    dispatch({
      type: PROJECT_DETAIL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PROJECT_DETAIL_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const projectUpdate = (project) => async (dispatch, getState) => {
  console.log("projectttttIDDDDDD", project.id);
  try {
    dispatch({
      type: PROJECT_UPDATE_REQUEST,
    });

    // PULLING THE CURRENT USER WE ARE LOGGED IN AS

    const {
      userLogin: { userInfo },
    } = getState();

    // MAKE GET REQUEST TO GET THE USER DATA
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.access}` /* PASSING IN USER TOKEN AND IF THE USER IN AUTHORISED HE'LL HAVE FULL ACCESS TO HIS PROFILE INFORMATION */,
      },
    };

    const { data } = await axios.put(
      `http://127.0.0.1:8000/projects/${project.id}/`,
      project,
      config
    );
    // console.log("responssseeee", response);
    console.log("datttaaaaaupdateeeeeeee", data);
    dispatch({
      type: PROJECT_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PROJECT_UPDATE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const addProjectUserRole = (role) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PROJECT_USER_ROLE_REQUEST,
    });

    // PULLING THE CURRENT USER WE ARE LOGGED IN AS

    const {
      userLogin: { userInfo },
    } = getState();

    // MAKE GET REQUEST TO GET THE USER DATA
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.access}` /* PASSING IN USER TOKEN AND IF THE USER IN AUTHORISED HE'LL HAVE FULL ACCESS TO HIS PROFILE INFORMATION */,
      },
    };

    const response = await axios.post(
      `http://127.0.0.1:8000/projects/${role.id}/users/`,
      role,
      config
    );

    console.log("posted user roleeeeee data", response.data);
    // console.log("posted status", response.status);
    // console.log("posted status", response.message);

    dispatch({
      type: PROJECT_USER_ROLE_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: PROJECT_USER_ROLE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const displayContributors = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CONTRIBUTORS_DISPLAY_REQUEST,
    });

    // PULLING THE CURRENT USER WE ARE LOGGED IN AS

    const {
      userLogin: { userInfo },
    } = getState();

    // MAKE GET REQUEST TO GET THE USER DATA
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.access}` /* PASSING IN USER TOKEN AND IF THE USER IN AUTHORISED HE'LL HAVE FULL ACCESS TO HIS PROFILE INFORMATION */,
      },
    };

    const response = await axios.get(
      `http://127.0.0.1:8000/projects/${id}/users/`,
      config
    );

    console.log("contributors displayyyyyyyyyy", response.data);
    // console.log("posted status", response.status);
    // console.log("posted status", response.message);

    dispatch({
      type: CONTRIBUTORS_DISPLAY_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: CONTRIBUTORS_DISPLAY_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const deleteContributor =
  (projectId, contribId) => async (dispatch, getState) => {
    try {
      dispatch({
        type: CONTRIBUTOR_DELETE_REQUEST,
      });

      // PULLING THE CURRENT USER WE ARE LOGGED IN AS

      const {
        userLogin: { userInfo },
      } = getState();

      // MAKE GET REQUEST TO GET THE USER DATA
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.access}` /* PASSING IN USER TOKEN AND IF THE USER IN AUTHORISED HE'LL HAVE FULL ACCESS TO HIS PROFILE INFORMATION */,
        },
      };

      const response = await axios.delete(
        `http://127.0.0.1:8000/projects/${projectId}/users/${contribId}`,
        config
      );

      console.log("contributors displayyyyyyyyyy", response.data);
      // console.log("posted status", response.status);
      // console.log("posted status", response.message);

      dispatch({
        type: CONTRIBUTOR_DELETE_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: CONTRIBUTOR_DELETE_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };

export const displayIssues = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ISSUES_DISPLAY_REQUEST,
    });

    // PULLING THE CURRENT USER WE ARE LOGGED IN AS

    const {
      userLogin: { userInfo },
    } = getState();

    // MAKE GET REQUEST TO GET THE USER DATA
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.access}` /* PASSING IN USER TOKEN AND IF THE USER IN AUTHORISED HE'LL HAVE FULL ACCESS TO HIS PROFILE INFORMATION */,
      },
    };

    const response = await axios.get(
      `http://127.0.0.1:8000/projects/${id}/issues/`,
      config
    );

    console.log("contributors displayyyyyyyyyy", response.data);
    // console.log("posted status", response.status);
    // console.log("posted status", response.message);

    dispatch({
      type: ISSUES_DISPLAY_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ISSUES_DISPLAY_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const addProjectIssue = (issue) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CREATE_ISSUE_REQUEST,
    });

    // PULLING THE CURRENT USER WE ARE LOGGED IN AS

    const {
      userLogin: { userInfo },
    } = getState();

    // MAKE GET REQUEST TO GET THE USER DATA
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.access}` /* PASSING IN USER TOKEN AND IF THE USER IN AUTHORISED HE'LL HAVE FULL ACCESS TO HIS PROFILE INFORMATION */,
      },
    };

    const response = await axios.post(
      `http://127.0.0.1:8000/projects/${issue.id}/issues/`,
      issue,
      config
    );

    console.log("posted isuuuueeee data", response.data);
    // console.log("posted status", response.status);
    // console.log("posted status", response.message);

    dispatch({
      type: CREATE_ISSUE_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_ISSUE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const issueUpdate = (issue) => async (dispatch, getState) => {
  try {
    dispatch({
      type: UPDATE_ISSUE_REQUEST,
    });

    // PULLING THE CURRENT USER WE ARE LOGGED IN AS

    const {
      userLogin: { userInfo },
    } = getState();

    // MAKE GET REQUEST TO GET THE USER DATA
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.access}` /* PASSING IN USER TOKEN AND IF THE USER IN AUTHORISED HE'LL HAVE FULL ACCESS TO HIS PROFILE INFORMATION */,
      },
    };

    const { data } = await axios.put(
      // `http://127.0.0.1:8000/projects/${project.id}/`,
      issue,
      config
    );
    // console.log("responssseeee", response);
    console.log("datttaaaaaupdateeeeeeee", data);
    dispatch({
      type: UPDATE_ISSUE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_ISSUE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const deleteIssue =
  (projectId, contribId) => async (dispatch, getState) => {
    try {
      dispatch({
        type: DELETE_ISSUE_REQUEST,
      });

      // PULLING THE CURRENT USER WE ARE LOGGED IN AS

      const {
        userLogin: { userInfo },
      } = getState();

      // MAKE GET REQUEST TO GET THE USER DATA
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.access}` /* PASSING IN USER TOKEN AND IF THE USER IN AUTHORISED HE'LL HAVE FULL ACCESS TO HIS PROFILE INFORMATION */,
        },
      };

      const response = await axios.delete(
        `http://127.0.0.1:8000/projects/${projectId}/users/${contribId}`,
        config
      );

      console.log("contributors displayyyyyyyyyy", response.data);
      // console.log("posted status", response.status);
      // console.log("posted status", response.message);

      dispatch({
        type: DELETE_ISSUE_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: DELETE_ISSUE_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };
