import {
    LOGIN_SUCCESSFUL,
    LOGIN_FAILED,
    LOGIN_TRY,
    LOGOUT,
    USER_LOADED,
    FAQS_LOADED
} from './types';

import axios from 'axios';

export const login = (identifier, password) => (dispatch) => {
    dispatch({type: LOGIN_TRY})
    // Headers 
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    const setLoginLocal = async (loginData) => {
        try {
          await localStorage.setItem('loginData',loginData);
        } catch (err) {
          console.log(err);
        }
      };
    // Request Body 
    const body = JSON.stringify({ identifier, password });
    
    axios
        .post("http://143.198.167.18:1337/auth/local", body, config)
        .then(res => {
            console.log(setLoginLocal(res.data.jwt))
            setLoginLocal(res.data.jwt); // storing in local storage for next launch
            dispatch({
                type: LOGIN_SUCCESSFUL,
                payload: res.data.jwt,
                payloadTwo: res.data.user
            });
            console.log(res.data.user)
        })
        .catch(err => {
            dispatch({
                type: LOGIN_FAILED,
            })
        })
}
export const logout = () => (dispatch) => {
    return localStorage.removeItem('loginData')
}
export const loadUser = () => (dispatch, getState) => {
    // dispatch({type: LOGIN_TRY})
    // Headers 
    const key = localStorage.getItem('loginData')
    console.log(key)
    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${key}`
        }
    };
    if (key) {
        config.headers["Authorization"] = `Bearer ${key}`
    };
    console.log("http://143.198.167.18:1337/users/me", config)
    axios
        .get("http://143.198.167.18:1337/users/me", config)
        .then(res => {
            dispatch({
                type: USER_LOADED,
                payload: res.data
            });
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        })
}
export const loadFaq = () => (dispatch, getState) => {
    // dispatch({type: LOGIN_TRY})
    // Headers 
    const key = localStorage.getItem('loginData')
    console.log(key)
    const config = {
        headers: {
            "Content-Type": "application/json",
            // "Authorization": `Bearer ${key}`
        }
    };
    // if (key) {
    //     config.headers["Authorization"] = `Bearer ${key}`
    // };
    console.log("http://143.198.167.18:1337/fars", config)
    axios
        .get("http://143.198.167.18:1337/fars", config)
        .then(res => {
            dispatch({
                type: FAQS_LOADED,
                payload: res.data
            });
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        })
}