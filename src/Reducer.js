import typeToReducer from "type-to-reducer";
import { ActionType } from 'redux-promise-middleware';
import actions from "./Actions.js";

const initialState = {
    users : [
        
    ]
};

const reducer = typeToReducer({
    [actions.users.add] : { 
        [ActionType.Fulfilled] : (state, action) => {
            return {
                ...state,
                users : [...state.users, action.payload]
            };
        }
    },
    [actions.users.delete] : {
        [ActionType.Fulfilled] : (state, action) => {

            const newuser = state.users.filter((x) => x.name !== action.payload.data.name);

            return {
                ...state,
                users : newuser
            }
        }
    },
    [actions.users.get] : {
        [ActionType.Fulfilled] : (state, action) => {
            return {
                ...state,
                users : action.payload
            }
        }
    }
}, initialState);

export default reducer;