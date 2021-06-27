import axios from 'axios';

import { login } from './constant';

/**
 *
 * @param {*} username;
 * @param {*} password;
 * @returns;
 */
export const userLogin = (username, password) => {
    return axios.post(login, { username, password });
};
