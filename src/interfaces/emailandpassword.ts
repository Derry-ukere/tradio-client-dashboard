import {UPDATE_EMAIL_AND_PASSWORD_FAIL,UPDATE_EMAIL_AND_PASSWORD_LOADING,UPDATE_EMAIL_AND_PASSWORD_SUCCESS} from '../constants/emailandPassword';

export interface res {
  message: 'User created sucessfully'
}
 
export interface UPDATE_EMAIL_AND_PASSWORD_FAIL {
    type: typeof UPDATE_EMAIL_AND_PASSWORD_FAIL
    loading: boolean,
    error: typeof Error
}

export interface UPDATE_EMAIL_AND_PASSWORD_LOADING {
    type: typeof UPDATE_EMAIL_AND_PASSWORD_LOADING
    loading: boolean,
}

export type actionType = UPDATE_EMAIL_AND_PASSWORD_FAIL | UPDATE_EMAIL_AND_PASSWORD_LOADING | UPDATE_EMAIL_AND_PASSWORD_SUCCESS;

export interface UPDATE_EMAIL_AND_PASSWORD_SUCCESS {
    type: typeof UPDATE_EMAIL_AND_PASSWORD_SUCCESS,
    loading: boolean,
    updatePasswordpayload: res
}
export interface initalState {
    loading: boolean,
    updatePasswordpayload?: res,
    error?: typeof Error

}
