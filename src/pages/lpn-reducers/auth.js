/* eslint-disable import/no-anonymous-default-export */
import { 
    LOGIN_SUCCESSFUL,
    LOGIN_FAILED,
    LOGIN_TRY,
    LOGOUT,
    USER_LOADED
 } from "../lpn-actions/types";

 const initialState = {
     jwt: '',
     isAuthenticated: !!(localStorage.getItem('loginData')),
     userData: []
 }

export default function( state = initialState, action ) {
    switch(action.type) {
        case LOGIN_TRY: 
            return {
                ...state,
                jwt: '',
                isAuthenticated: !!(localStorage.getItem('loginData')),
                userData: []
            }
        case LOGIN_SUCCESSFUL:
            return {
                ...state,
                jwt: action.payload,
                isAuthenticated: !!(localStorage.getItem('loginData')),
                userData: action.payloadTwo
            }
        case USER_LOADED:
            return {
                ...state, 
                userData: action.payload
            }
        case LOGIN_FAILED:
        case LOGOUT:
            return {
                ...state,
                jwt: '',
                isAuthenticated: !!(localStorage.getItem('loginData')),
                userData: []
            }
        default:
            return{
                ...state
            }
    }
}