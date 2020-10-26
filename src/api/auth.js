/*---------------------------------------------- *
 *   Author : Prashant Gaurav                    *
 *   Module : AUTH MODULE                        *
 *---------------------------------------------- */

import {authHeaders, baseUrl, sessionKey} from '../config';


/* ----------------------------------------- *
 *                CREATE USER                *
 * ----------------------------------------- */
export const createUser = async (name, email, mobile, password) => {
    const URL = baseUrl + '/auth/register';
    const requestOptions = {
        method: 'post',
        // mode: 'cors',
        // cache: 'no-cache',
        headers: authHeaders,
        body: JSON.stringify({name, email, mobile, password}),
    };
    console.log(requestOptions)
    return fetch(URL, requestOptions).then(response => response.json()).then(data => {
        if (data.success) {
            const authData = data.authData;
            window.sessionStorage.setItem(sessionKey, JSON.stringify(authData));
        }
        return data;
    });
};


/* ----------------------------------------- *
 *                CHECK AUTH                 *
 * ----------------------------------------- */
export const validateUser = async (email, password) => {
    const URL = baseUrl + '/auth/login';
    const requestOptions = {
        method: 'post',
        mode: 'cors',
        cache: 'no-cache',
        headers: authHeaders,
        body: JSON.stringify({email, password}),
    };
    return fetch(URL, requestOptions).then(response => response.json()).then(data => {
        if (data.success) {
            const authData = data.userData;
            window.sessionStorage.setItem(sessionKey, JSON.stringify(authData));
        }
        return data;
    });
};

/* ----------------------------------------- *
 *                LOGOUT                     *
 * ----------------------------------------- */
export const userLogout = async () => {
    await sessionStorage.removeItem(sessionKey);
    return true;
};

