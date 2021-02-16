import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import * as PaymentActions from '../../actions/payment.actions';
import { v4 as uuid } from 'uuid';
import { ccvValidator, dateValidator, numberValidator } from '../../validators/payment.validators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-add',
  templateUrl: './payment-add.component.html',
  styleUrls: ['./payment-add.component.scss']
})
export class PaymentAddComponent implements OnInit {

  paymentAddForm = this.fb.group({
    id: [uuid()],
    cardNumber: ['', [Validators.required]],
    cardHolder: ['', [Validators.required]],
    expirationDate: ['', [Validators.required, dateValidator]],
    securityCode: ['', [ccvValidator]],
    amount: ['', [Validators.required, numberValidator]]
  });

  constructor(private fb: FormBuilder, private store: Store<AppState>, public router: Router) { }

  ngOnInit(): void {
  }

  get cardNumber(){ return this.paymentAddForm.get('cardNumber'); }

  get cardHolder(){ return this.paymentAddForm.get('cardHolder'); }

  get expirationDate(){ return this.paymentAddForm.get('expirationDate'); }

  get securityCode(){ return this.paymentAddForm.get('securityCode'); }

  get amount(){ return this.paymentAddForm.get('amount'); }

  onAddPayment() {
    this.store.dispatch(new PaymentActions.AddPayment(this.paymentAddForm.value));
  }

}
