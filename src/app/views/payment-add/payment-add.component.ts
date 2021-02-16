import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

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

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onAddPayment() {
    //
  }

}
