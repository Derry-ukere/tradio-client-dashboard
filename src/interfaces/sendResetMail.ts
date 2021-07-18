import {SEND_MAIL_FAIL,SEND_MAIL_LOADING,SEND_MAIL_SUCCESS} from '../constants/sendRestMail';

export interface res { message : {}}
 
export interface SEND_MAIL_FAIL {
    type: typeof SEND_MAIL_FAIL
    loading: boolean,
    error: typeof Error
}

export interface SEND_MAIL_LOADING {
    type: typeof SEND_MAIL_LOADING
    loading: boolean,
}

export type actionType = SEND_MAIL_FAIL | SEND_MAIL_LOADING | SEND_MAIL_SUCCESS;

export interface SEND_MAIL_SUCCESS {
    type: typeof SEND_MAIL_SUCCESS,
    loading: boolean,
    sendPayload: res
}
export interface initalState {
    loading: boolean,
    sendPayload?: res,
    error?: typeof Error

}
