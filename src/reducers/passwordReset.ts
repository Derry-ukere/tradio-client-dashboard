import * as registerTypes from '../interfaces/resetpassword';
import * as constants from '../constants/resetPassword';

const defaultState = {
  loading: false,
};

export default class RegisterReducers {
    
    static  reset = (state:registerTypes.initalState = defaultState, action:registerTypes.actionType ) : registerTypes.initalState  => {
      switch (action.type) {
        case constants.RESET_PASSWORD_LOADING:
          return {
            loading : true
          };
        case constants.RESET_PASSWORD_SUCCESS:
          return {
            loading : false,
            paswrdResetpayload:action.paswrdResetpayload,
          }; 
        case constants.RESET_PASSWORD_FAIL:
          return {
            loading : false,
            error: action.error
          };    
          
        default:
          return state;
              
      }
    };
}
