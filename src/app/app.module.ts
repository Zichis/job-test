import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { paymentReducer } from './reducers/payment.reducer';
import { PaymentListComponent } from './views/payment-list/payment-list.component';
import { PaymentAddComponent } from './views/payment-add/payment-add.component';

@NgModule({
  declarations: [
    AppComponent,
    PaymentListComponent,
    PaymentAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      payment: paymentReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
