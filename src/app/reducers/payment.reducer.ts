import { Action } from '@ngrx/store';
import { Payment } from '../models/payment.model';
import * as PaymentActions from '../actions/payment.actions';

const initialState: Payment = {
    cardNumber: '98765',
    cardHolder: 'John Doe',
    expirationDate: new Date(),
    securityCode: '101',
    amount: 500
}

export function paymentReducer(state: Payment[] = [initialState], action: PaymentActions.Actions) {
    switch (action.type) {
        case PaymentActions.ADD_PAYMENT:
            return [...state, action.payload];
        default:
            return state;
    }
}
