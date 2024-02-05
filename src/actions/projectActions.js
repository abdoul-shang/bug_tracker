import axios from "axios";
import {
  CREATE_PROJECT_FAIL,
  CREATE_PROJECT_REQUEST,
  CREATE_PROJECT_SUCCESS,
  PROJECT_DETAIL_FAIL,
  PROJECT_DETAIL_REQUEST,
  PROJECT_DETAIL_SUCCESS,
  PROJECT_DISPLAY_FAIL,
  PROJECT_DISPLAY_REQUEST,
  PROJECT_DISPLAY_SUCCESS,
  PROJECT_UPDATE_FAIL,
  PROJECT_UPDATE_REQUEST,
  PROJECT_UPDATE_SUCCESS,
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
