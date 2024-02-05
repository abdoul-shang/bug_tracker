/* REDUX */
import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import { composeWithDevTools } from "@redux-devtools/extension";
import {
  userListReducer,
  userLoginReducer,
  userRegisterReducer,
} from "./reducers/userReducer";
import {
  createProjectReducer,
  projectDetailReducer,
  projectUpdateReducer,
  projectsDisplayReducer,
} from "./reducers/projectReducer";

// COMBINE REDUCERS

const reducer = combineReducers({
  // users
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userList: userListReducer,

  // projects
  projectDisplay: projectsDisplayReducer,
  createNewProject: createProjectReducer,
  projectDetail: projectDetailReducer,
  projectUpdate: projectUpdateReducer,
});

// PULLING DATA OUT OF LOCAL STORAGE AND LOAD IT INTO LOCAL STORAGE
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

// create initial state
const initialState = {
  userLogin: {
    userInfo: userInfoFromStorage,
  },
};

console.log("userrrrrrrrrrrrrrr", userInfoFromStorage);

console.log("initiallllll", initialState);

const middleware = [thunk];

// REDUX STORE
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
