import { COMPLETE_REGISTRATION_FAIL,COMPLETE_REGISTRATION_LOADING,COMPLETE_REGISTRATION_SUCCESS,UPDATEE_USER_DETAILS_FAIL,UPDATEE_USER_DETAILS_LOADING,UPDATEE_USER_DETAILS_SUCCESS} from '../constants/completeRegistration';

export interface res {
  message: 'User created sucessfully'
}
 
export type upludateRes = any;
export interface COMPLETE_REGISTRATION_FAIL {
    type: typeof COMPLETE_REGISTRATION_FAIL
    loading: boolean,
    error: typeof Error
}

export interface UPDATEE_USER_DETAILS_FAIL {
    type: typeof UPDATEE_USER_DETAILS_FAIL
    loading: boolean,
    error: typeof Error
}

export interface COMPLETE_REGISTRATION_LOADING {
    type: typeof COMPLETE_REGISTRATION_LOADING
    loading: boolean,
}

export interface UPDATEE_USER_DETAILS_LOADING {
    type: typeof UPDATEE_USER_DETAILS_LOADING
    loading: boolean,
}



export type actionType = COMPLETE_REGISTRATION_FAIL | COMPLETE_REGISTRATION_LOADING | COMPLETE_REGISTRATION_SUCCESS;
export type updateactionType = UPDATEE_USER_DETAILS_FAIL | UPDATEE_USER_DETAILS_LOADING | UPDATEE_USER_DETAILS_SUCCESS;


export interface COMPLETE_REGISTRATION_SUCCESS {
    type: typeof COMPLETE_REGISTRATION_SUCCESS,
    loading: boolean,
    payload: res
}

export interface UPDATEE_USER_DETAILS_SUCCESS {
    type: typeof UPDATEE_USER_DETAILS_SUCCESS,
    loading: boolean,
    payload: res
}
export interface initalState {
    loading: boolean,
    payload?: res,
    error?: typeof Error

}

export interface updateInitalState {
    loading: boolean,
    payload?: upludateRes,
    error?: typeof Error

}
