import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import * as PaymentActions from '../../actions/payment.actions';

@Component({
  selector: 'app-payment-add',
  templateUrl: './payment-add.component.html',
  styleUrls: ['./payment-add.component.scss']
})
export class PaymentAddComponent implements OnInit {

  paymentAddForm = this.fb.group({
    cardNumber: [''],
    cardHolder: [''],
    expirationDate: [''],
    securityCode: [''],
    amount: ['']
  });

  constructor(private fb: FormBuilder, private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  onAddPayment() {
    console.log(this.paymentAddForm.value);
    this.store.dispatch(new PaymentActions.AddPayment(this.paymentAddForm.value));
  }

}
