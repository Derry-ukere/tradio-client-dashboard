import * as registerTypes from '../interfaces/completeRegistration';
import * as registerConstants from '../constants/completeRegistration';
import { Dispatch } from 'react';
import axios from 'axios';

export const  registerAction = {
  register : (id: string, name: string,address:string,dob: string, permAdress: string,tel:number ,city:string,country:string) => async (dispatch :Dispatch <registerTypes.actionType> )=>{
    try {
      dispatch({
        type:registerConstants.COMPLETE_REGISTRATION_LOADING,
        loading: true,

      });
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };

      const {data} = await axios.put(`https://tradio-client-services.herokuapp.com/api/client/upate/personalDetails?id=${id}&name=${name}&address=${address}&dob=${dob}&permAdress=${permAdress}&tel=${tel}&city=${city}&country=${country}`,config);

      dispatch({
        type:registerConstants.COMPLETE_REGISTRATION_SUCCESS,
        loading: false,
        payload:data
      });
        
    } catch (error) {
      dispatch({
        type:registerConstants.COMPLETE_REGISTRATION_FAIL,
        loading: false,
        error: error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
      });
    }
  },
};

