import typeToReducer from "type-to-reducer";
import actions from "./Actions.js";

const initialState = {
    people : [
        
    ]
}

const reducer = typeToReducer({
    [actions.people.add] : (state, action) => {
        return {
            ...state,
            people : [...state.people, action.payload]
        };
    },
    [actions.people.delete] : (state, action) => {
        
        const newPeople = state.people.filter((x) => x.name !== action.payload);

        return {
            ...state,
            people : newPeople
        }
    },
    [actions.people.set] : (state, action) => {
        return {
            ...state,
            people : action.payload
        }
    }
}, initialState);

export default reducer;