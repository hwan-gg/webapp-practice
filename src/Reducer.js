import typeToReducer from "type-to-reducer";
import { ActionType } from 'redux-promise-middleware';
import actions from "./Actions.js";
import history from "./history.js";

const initialState = {
    authenticated: false,
    users: [

    ]
};

const reducer = typeToReducer({
    // router : connectRouter(history),
    [actions.users.add]: {
        [ActionType.Fulfilled]: (state, action) => {
            return {
                ...state,
                users: [...state.users, action.payload]
            };
        }
    },
    [actions.users.delete]: {
        [ActionType.Fulfilled]: (state, action) => {
            const newuser = state.users.filter((x) => x.name !== action.payload);
            return {
                ...state,
                users: newuser
            }
        }
    },
    [actions.users.get]: {
        [ActionType.Fulfilled]: (state, action) => {
            return {
                ...state,
                users: action.payload
            }
        }
    },
    [actions.admin.login]: {
        [ActionType.Fulfilled]: (state, action) => {
            history.push(action.payload.redirect);
            return {
                ...state,
                authenticated: action.payload.authenticated
            }
        }
    },
    [actions.admin.logout]: {
        [ActionType.Fulfilled]: (state, action) => {
            history.push('/Login');
            return {
                ...state,
                authenticated: action.payload.authenticated
            }
        }
    },
    [actions.admin.enter]: {
        [ActionType.Fulfilled]: (state, action) => {
            console.log(action.payload);
            return {
                ...state,
                authenticated: action.payload.authenticated
            }
        }
    }
}, initialState);

export default reducer;