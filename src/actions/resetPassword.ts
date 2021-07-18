import * as registerTypes from '../interfaces/resetpassword';
import * as registerConstants from '../constants/resetPassword';
import { Dispatch } from 'react';
import axios from 'axios';

export const  resetPassword = {
  reset : (id: string, password: string,) => async (dispatch :Dispatch <registerTypes.actionType> )=>{
    try {
      dispatch({
        type:registerConstants.RESET_PASSWORD_LOADING,
        loading: true,
      });
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };

      const {data} = await axios.put(`https://tradio-client-services.herokuapp.com/api/client/upate/resetpassword?id=${id}&password=${password}`,config);

      dispatch({
        type:registerConstants.RESET_PASSWORD_SUCCESS,
        loading: false,
        paswrdResetpayload:data
      });
        
    } catch (error) {
      dispatch({
        type:registerConstants.RESET_PASSWORD_FAIL,
        loading: false,
        error: error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
      });
    }
  },
};

