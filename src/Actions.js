import { createActions } from "redux-actions";
import axios from "axios";
// import User from 'Model/User'

const actions = createActions({
    USERS : {
        ADD : ( user ) => axios.post( 'http://localhost:4444/addUser', user ).then((res) => {
                                    return res.data;
                                }),
        DELETE : ( name ) =>  axios.post('http://localhost:4444/deleteUser', {name : name}).then((res) => {
                                return res;
                            }),
        GET : () => axios.get('http://localhost:4444/getUsers').then((res) => {
            return res.data;
        })
    }
});

export default actions;