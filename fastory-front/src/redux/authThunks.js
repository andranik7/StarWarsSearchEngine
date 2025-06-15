import axios from 'axios';
import { loginStart, loginSuccess, loginFailure } from './authSlice';
import config from '../config';

export const loginUser = ({ username, password }) => async dispatch => {
    dispatch(loginStart());
    try {
        const res = await axios.post(config.apiURI + "/login", { username, password });
        dispatch(loginSuccess({
            token: res.data.token,
            username: res.data.username
        }));
    } catch (err) {
        dispatch(loginFailure('Login failed'));
    }
};