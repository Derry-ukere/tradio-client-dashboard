import * as LoginTypes from '../interfaces/logout';
import * as LoginConstants from '../constants/logout';
import { Dispatch } from 'react';

export const  logOutAction = {
  logout : () => async (dispatch :Dispatch <LoginTypes.actionType> )=>{
    localStorage.removeItem('userInfo');
    dispatch({ type:LoginConstants.LOGOUT });
    document.location.href = '/';
  },
};

export default logOutAction;
