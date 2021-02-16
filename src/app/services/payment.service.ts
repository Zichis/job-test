import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Payment } from '../models/payment.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private PAYMENT_URL = "http://localhost:3000/payment";

  constructor(private http: HttpClient) { }

  getPayments() {
    return this.http.get<Payment[]>(this.PAYMENT_URL);
  }

  addPayment(payment: Payment) {
    return this.http.post(this.PAYMENT_URL, payment);
  }
}
