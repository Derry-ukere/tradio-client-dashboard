import * as registerTypes from '../interfaces/emailandpassword';

import * as registerConstants from '../constants/emailandPassword';
import { Dispatch } from 'react';
import axios from 'axios';

export const  UpdateEmailAndPassword = {
  updateEmailAndTel : (id: string, email: string,tel:string) => async (dispatch :Dispatch <registerTypes.actionType> )=>{
    try {
      dispatch({
        type:registerConstants.UPDATE_EMAIL_AND_PASSWORD_LOADING,
        loading: true,

      });
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };

      const {data} = await axios.put(`https://tradio-client-services.herokuapp.com/api/client/upate/emailAndTel?id=${id}&email=${email}&t=${tel}`,config);

      dispatch({
        type:registerConstants.UPDATE_EMAIL_AND_PASSWORD_SUCCESS,
        loading: false,
        updatePasswordpayload:data
      });
      localStorage.setItem('userInfo', JSON.stringify(data));

        
    } catch (error) {
      dispatch({
        type:registerConstants.UPDATE_EMAIL_AND_PASSWORD_FAIL,
        loading: false,
        error: error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
      });
    }
  },

};



