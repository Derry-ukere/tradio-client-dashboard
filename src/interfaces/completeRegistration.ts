import { COMPLETE_REGISTRATION_FAIL,COMPLETE_REGISTRATION_LOADING,COMPLETE_REGISTRATION_SUCCESS} from '../constants/completeRegistration';

export interface res {
  message: 'User created sucessfully'
}
 
export interface COMPLETE_REGISTRATION_FAIL {
    type: typeof COMPLETE_REGISTRATION_FAIL
    loading: boolean,
    error: typeof Error
}

export interface COMPLETE_REGISTRATION_LOADING {
    type: typeof COMPLETE_REGISTRATION_LOADING
    loading: boolean,
}

export type actionType = COMPLETE_REGISTRATION_FAIL | COMPLETE_REGISTRATION_LOADING | COMPLETE_REGISTRATION_SUCCESS;

export interface COMPLETE_REGISTRATION_SUCCESS {
    type: typeof COMPLETE_REGISTRATION_SUCCESS,
    loading: boolean,
    payload: res
}
export interface initalState {
    loading: boolean,
    payload?: res,
    error?: typeof Error

}
