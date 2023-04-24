import { createActions } from "redux-actions";

const actions = createActions({
    PEOPLE : {
        ADD : ( person ) => { return person },
        DELETE : ( name ) => { return name; },
        SET : ( people ) => { return people }
    }
});

export default actions;