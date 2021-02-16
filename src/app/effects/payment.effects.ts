import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';

import * as PaymentActions from '../actions/payment.actions';
import { of } from 'rxjs';
import { PaymentService } from '../services/payment.service';

@Injectable()
export class PaymentEffects {

    loadPayment$ = createEffect(() => {
        return this.actions$.pipe(
            ofType<PaymentActions.LoadPayment>(PaymentActions.LOAD_PAYMENT),
            mergeMap(
                () => this.paymentService.getPayments()
                    .pipe(
                        map(data => {
                            return new PaymentActions.LoadPaymentSuccess(data)
                        }),
                        catchError(error => of(new PaymentActions.LoadPaymentFailure(error)))
                    )
            )
        )
    });

    addPayment$ = createEffect(() => {
        return this.actions$.pipe(
            ofType<PaymentActions.AddPayment>(PaymentActions.ADD_PAYMENT),
            mergeMap(
                (data) => this.paymentService.addPayment(data.payload)
                    .pipe(
                        map(() => {
                            return new PaymentActions.AddPaymentSuccess(data.payload)
                        }),
                        catchError(error => of(new PaymentActions.AddPaymentFailure(error)))
                    )
            )
        )
    });

    constructor(
        private actions$: Actions,
        private paymentService: PaymentService
    ) { }

}