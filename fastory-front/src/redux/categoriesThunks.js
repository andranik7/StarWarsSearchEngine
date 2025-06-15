import axios from 'axios';
import {
    fetchStart,
    fetchSuccess,
    fetchFailure
} from './categoriesSlice';

import config from '../config';

export const getCategories = () => async (dispatch, getState) => {
    dispatch(fetchStart());
    // récupération du token dans redux persist
    const { token } = getState().auth;

    try {
        const { data } = await axios.get(config.apiURI + "/fetchCategories", {
            // on passe les headers avec le token pour authentifier la requete
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        dispatch(fetchSuccess(data));
    } catch (err) {
        dispatch(fetchFailure('Failed to get categories'));
    }
};