import * as registerTypes from '../interfaces/completeRegistration';
import * as constants from '../constants/completeRegistration';

const defaultState = {
  loading: false,
};

export default class RegisterReducers {
    
    static  register = (state:registerTypes.initalState = defaultState, action:registerTypes.actionType ) : registerTypes.initalState  => {
      switch (action.type) {
        case constants.COMPLETE_REGISTRATION_LOADING:
          return {
            loading : true
          };
        case constants.COMPLETE_REGISTRATION_SUCCESS:
          return {
            loading : false,
            payload:action.payload,
          }; 
        case constants.COMPLETE_REGISTRATION_FAIL:
          return {
            loading : false,
            error: action.error
          };    
          
        default:
          return state;
              
      }
    };

    static  updateDetails = (state:registerTypes.updateInitalState = defaultState, action:registerTypes.updateactionType ) : registerTypes.initalState  => {
      switch (action.type) {
        case constants.UPDATEE_USER_DETAILS_LOADING:
          return {
            loading : true
          };
        case constants.UPDATEE_USER_DETAILS_SUCCESS:
          return {
            loading : false,
            payload:action.payload,
          }; 
        case constants.UPDATEE_USER_DETAILS_FAIL:
          return {
            loading : false,
            error: action.error
          };    
          
        default:
          return state;
              
      }
    };
}












