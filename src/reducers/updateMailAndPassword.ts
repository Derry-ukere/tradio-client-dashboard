import * as registerTypes from '../interfaces/emailandpassword';
import * as constants from '../constants/emailandPassword';

const defaultState = {
  loading: false,
};

export default class UpdateEmailAndPassword {
    
    static  update = (state:registerTypes.initalState = defaultState, action:registerTypes.actionType ) : registerTypes.initalState  => {
      switch (action.type) {
        case constants.UPDATE_EMAIL_AND_PASSWORD_LOADING:
          return {
            loading : true
          };
        case constants.UPDATE_EMAIL_AND_PASSWORD_SUCCESS:
          return {
            loading : false,
            updatePasswordpayload:action.updatePasswordpayload,
          }; 
        case constants.UPDATE_EMAIL_AND_PASSWORD_FAIL:
          return {
            loading : false,
            error: action.error
          };    
          
        default:
          return state;
              
      }
    };
}












