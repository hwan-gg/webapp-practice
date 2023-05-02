import { createActions } from "redux-actions";
import axios from "axios";
// import User from 'Model/User'

axios.defaults.withCredentials = true;

const actions = createActions({
    USERS: {
        ADD: (user) => axios.post('http://localhost:4444/api/Users', user).then((res) => {
            return res.data;
        }),
        DELETE: (name) =>
            axios.delete('http://localhost:4444/api/Users', { data: { name: name } }).then((res) => {
                return res.data;
            }),
        GET: () => axios.get('http://localhost:4444/api/Users').then((res) => {
            return res.data;
        })
    },
    ADMIN: {
        LOGIN: (data) => axios.post('http://localhost:4444/auth/Login', data).then((res) => {
            return res.data
        }),
        LOGOUT: () => axios.post('http://localhost:4444/auth/Logout').then((res) => {
            return res.data;
        }),
        ENTER: () => axios.get('http://localhost:4444/auth/Enter').then((res) => {
            return res.data;
        })
    }
});

export default actions;