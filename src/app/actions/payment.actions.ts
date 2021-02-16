import { Action } from '@ngrx/store';
import { Payment } from '../models/payment.model';

export const ADD_PAYMENT = '[PAYMENT] Add Payment';
export const ADD_PAYMENT_SUCCESS = '[PAYMENT] Add Payment Success';
export const ADD_PAYMENT_FAILURE = '[PAYMENT] Add Payment Failure';
export const LOAD_PAYMENT = '[PAYMENT] Load Payment';
export const LOAD_PAYMENT_SUCCESS = '[PAYMENT] Load Payment Success';
export const LOAD_PAYMENT_FAILURE = '[PAYMENT] Load Payment Failure';

export class LoadPayment implements Action {
    readonly type = LOAD_PAYMENT;
}
export class LoadPaymentSuccess implements Action {
    readonly type = LOAD_PAYMENT_SUCCESS;

    constructor(public payload: Payment[]) {}

}
export class LoadPaymentFailure implements Action {
    readonly type = LOAD_PAYMENT_FAILURE

    constructor(public payload: Error) {}
}

export class AddPayment implements Action {
    readonly type = ADD_PAYMENT;

    constructor(public payload: Payment) {}
}

export class AddPaymentSuccess implements Action {
    readonly type = ADD_PAYMENT_SUCCESS;

    constructor(public payload: Payment) {}
}

export class AddPaymentFailure implements Action {
    readonly type = ADD_PAYMENT_FAILURE;

    constructor(public payload: Error) {}
}

export type Actions = AddPayment |
    AddPaymentSuccess |
    AddPaymentFailure |
    LoadPayment |
    LoadPaymentSuccess |
    LoadPaymentFailure
