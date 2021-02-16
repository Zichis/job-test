import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Payment } from '../../models/payment.model';
import { AppState } from '../../app.state';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.scss']
})
export class PaymentListComponent implements OnInit {
  
  payments: Observable<Payment[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.payments = this.store.select(store => store.payment);
  }

}
