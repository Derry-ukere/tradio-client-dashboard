import * as registerTypes from '../interfaces/sendResetMail';
import * as constants from '../constants/sendRestMail';

const defaultState = {
  loading: false,
};

export default class UpdateEmailAndPassword {
    
    static  send = (state:registerTypes.initalState = defaultState, action:registerTypes.actionType ) : registerTypes.initalState  => {
      switch (action.type) {
        case constants.SEND_MAIL_LOADING:
          return {
            loading : true
          };
        case constants.SEND_MAIL_SUCCESS:
          return {
            loading : false,
            sendPayload:action.sendPayload,
          }; 
        case constants.SEND_MAIL_FAIL:
          return {
            loading : false,
            error: action.error
          };    
          
        default:
          return state;
              
      }
    };
}












