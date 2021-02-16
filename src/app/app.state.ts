import { PaymentState } from './reducers/payment.reducer';

export interface AppState {
    readonly payment: PaymentState;
}