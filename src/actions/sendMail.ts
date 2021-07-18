import * as registerTypes from '../interfaces/sendResetMail';
import * as registerConstants from '../constants/sendRestMail';
import { Dispatch } from 'react';
import axios from 'axios';

export const  sendresetPassword = {
  send : (email: string,) => async (dispatch :Dispatch <registerTypes.actionType> )=>{
    try {
      dispatch({
        type:registerConstants.SEND_MAIL_LOADING,
        loading: true,
      });
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };
     
      const {data} = await axios.post(`https://tradio-client-services.herokuapp.com/api/auth/sendRecoverMail?email=${email}`,config);
      dispatch({
        type:registerConstants.SEND_MAIL_SUCCESS,
        loading: false,
        sendPayload:data
      });
        
    } catch (error) {
      dispatch({
        type:registerConstants.SEND_MAIL_FAIL,
        loading: false,
        error: error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
      });
    }
  },
};
