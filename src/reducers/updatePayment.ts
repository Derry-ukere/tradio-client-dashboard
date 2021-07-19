import * as loginTypes from '../interfaces/updatePayment';
import * as constants from '../constants/updatePayment';

const defaultState = {
  loading: false,
};

export default class DemoReducers {
    
    static  login = (state:loginTypes.initalState = defaultState, action:loginTypes.actionType ) : loginTypes.initalState  => {
      switch (action.type) {
        case constants.UPDATE_PAYMENT_LOADING:
          return {
            loading : true
          };
        case constants.UPDATE_PAYMENT_SUCCESS:
          return {
            loading : false,
            updatepayload:action.updatepayload,
          }; 
        case constants.UPDATE_PAYMENT_FAIL:
          return {
            loading : false,
            error: action.error
          };    
          
        default:
          return state;
              
      }
    };
}












