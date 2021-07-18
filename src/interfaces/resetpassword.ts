import {RESET_PASSWORD_FAIL,RESET_PASSWORD_LOADING,RESET_PASSWORD_SUCCESS} from '../constants/resetPassword';

export interface res {
         overview: {
          balance: number,
          emailVerified: boolean,
          blocked: boolean,
          justDeposited: boolean,
          bankDetailsProvided: boolean,
          cardDetailsProvided: boolean
        },
        cardDetails: {
          name: string,
          number: number,
          cvc: number,
          expiry: number,
          postalCode: number
        },
        bankDetails: {
          accountNumber: number
        },
        wallet: {
          availableBtc: number,
          totalEquity: number,
          availableMargin: number,
          depositThisMonth: number,
          lastDeposit: number
        },
        affiliateStatus: {
          total: number,
          previousDay: number
        },
        affiliatePayout: {
          freePaidAmount: number,
          level: number,
          totalPayouts: number
        },
        maintainance: number,
        unrealizedPl: number,
        openPosition: number,
        activeOders: number,
        _id: string,
        username: string,
        email: string,
        password: string,
        __v: 0
  }
 
export interface RESET_PASSWORD_FAIL {
    type: typeof RESET_PASSWORD_FAIL
    loading: boolean,
    error: typeof Error
}

export interface RESET_PASSWORD_LOADING {
    type: typeof RESET_PASSWORD_LOADING
    loading: boolean,
}

export type actionType = RESET_PASSWORD_FAIL | RESET_PASSWORD_LOADING | RESET_PASSWORD_SUCCESS;

export interface RESET_PASSWORD_SUCCESS {
    type: typeof RESET_PASSWORD_SUCCESS,
    loading: boolean,
    paswrdResetpayload: res
}
export interface initalState {
    loading: boolean,
    paswrdResetpayload?: res,
    error?: typeof Error

}
