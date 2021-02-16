import { Action } from '@ngrx/store';
import { Payment } from '../models/payment.model';
import * as PaymentActions from '../actions/payment.actions';

export interface PaymentState {
    list: Payment[],
    loading: boolean,
    error: Error
}

const initialState: PaymentState = {
    list: [],
    loading: false,
    error: undefined
}

export function paymentReducer(state: PaymentState = initialState, action: PaymentActions.Actions) {
    switch (action.type) {
        case PaymentActions.LOAD_PAYMENT:
            return {
                ...state,
                loading: true
            };
        case PaymentActions.LOAD_PAYMENT_SUCCESS:
            return {
                ...state,
                list: action.payload,
                loading: false
            };
        case PaymentActions.LOAD_PAYMENT_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        case PaymentActions.ADD_PAYMENT:
            return {
                ...state,
                loading: true
            };
        case PaymentActions.ADD_PAYMENT_SUCCESS:
            return {
                ...state,
                list: [...state.list, action.payload],
                loading: false
            };
        case PaymentActions.ADD_PAYMENT_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        default:
            return state;
    }
}
