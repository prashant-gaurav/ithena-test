/*---------------------------------------------- *
 *   Author : Prashant Gaurav                    *
 *   Module : MOVIES MODULE                      *
 *---------------------------------------------- */

import {authHeaders,authFileHeaders, baseUrl} from '../config';


/* ----------------------------------------- *
 *                ADD MOVIES                 *
 * ----------------------------------------- */
export const addMovies = async (name, details, wallImg, video, rating) => {
    const URL = baseUrl + '/movies';
    const requestOptions = {
        method: 'post',
        mode: 'cors',
        cache: 'no-cache',
        headers: authHeaders,
        body: JSON.stringify({name, details, wallImg, video, rating}),
    };
    return fetch(URL, requestOptions).then(response => response.json()).then(data => {
        return data;
    });
};


/* ----------------------------------------- *
 *                ADD MOVIES                 *
 * ----------------------------------------- */
export const viewMovies = async () => {
    const URL = baseUrl + '/movies';
    const requestOptions = {
        method: 'get',
        mode: 'cors',
        cache: 'no-cache',
        headers: authHeaders,
    };
    return fetch(URL, requestOptions).then(response => response.json()).then(data => {
        return data;
    });
};

