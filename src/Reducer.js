import typeToReducer from "type-to-reducer";
import { ActionType } from "redux-promise-middleware";
import actions from "./Actions.js";
import history from "./history.js";

const initialState = {
  authenticated: false,
  users: [],
  movies: [],
  currentUser: null,
  userProfile: null
};

const reducer = typeToReducer(
  {
    // router : connectRouter(history),
    [actions.users.add]: {
      [ActionType.Fulfilled]: (state, action) => {
        return {
          ...state,
          users: [...state.users, action.payload],
        };
      },
    },
    [actions.users.delete]: {
      [ActionType.Fulfilled]: (state, action) => {
        const newuser = state.users.filter((x) => x.name !== action.payload);
        return {
          ...state,
          users: newuser,
        };
      },
    },
    [actions.users.get]: {
      [ActionType.Fulfilled]: (state, action) => {
        return {
          ...state,
          users: action.payload,
        };
      },
    },
    [actions.admin.login]: {
      [ActionType.Fulfilled]: (state, action) => {
        history.push(action.payload.redirect);
        return {
          ...state,
          currentUser: action.payload.currentUser,
          authenticated: action.payload.authenticated,
        };
      },
    },
    [actions.admin.logout]: {
      [ActionType.Fulfilled]: (state, action) => {
        history.push("/Login");
        return {
          ...state,
          currentUser: action.payload.currentUser,
          authenticated: action.payload.authenticated,
          userProile: null,
        };
      },
    },
    [actions.admin.enter]: {
      [ActionType.Fulfilled]: (state, action) => {
        console.log(action.payload);
        return {
          ...state,
          currentUser: action.payload.currentUser,
          authenticated: action.payload.authenticated,
        };
      },
    },
    [actions.movies.get]: {
      [ActionType.Fulfilled]: (state, action) => {
        return {
          ...state,
          movies: action.payload,
        };
      },
    },
    [actions.profile.get]: {
      [ActionType.Fulfilled]: (state, action) => {
        return {
          ...state,
          currentUser: action.payload.username,
          userProfile: action.payload.userProfile,
        };
      },
    },
  },
  initialState
);

export default reducer;
