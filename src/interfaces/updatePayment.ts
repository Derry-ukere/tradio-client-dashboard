import {UPDATE_PAYMENT_FAIL,UPDATE_PAYMENT_LOADING,UPDATE_PAYMENT_SUCCESS} from '../constants/updatePayment';

export interface res {
  data: {
       overview: {
        balance: number,
        emailVerified: boolean,
        blocked: boolean,
        justDeposited: boolean,
        bankDetailsProvided: boolean,
        cardDetailsProvided: boolean,
        name: string
        address: string
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
    token: string
}
 
export interface UPDATE_PAYMENT_FAIL {
    type: typeof UPDATE_PAYMENT_FAIL
    loading: boolean,
    error: typeof Error
}

export interface UPDATE_PAYMENT_LOADING {
    type: typeof UPDATE_PAYMENT_LOADING
    loading: boolean,
}

export type actionType = UPDATE_PAYMENT_FAIL | UPDATE_PAYMENT_LOADING | UPDATE_PAYMENT_SUCCESS;

export interface UPDATE_PAYMENT_SUCCESS {
    type: typeof UPDATE_PAYMENT_SUCCESS,
    loading: boolean,
    updatepayload: res
}
export interface initalState {
    loading: boolean,
    updatepayload?: res,
    error?: typeof Error

}
