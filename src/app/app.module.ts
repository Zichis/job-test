import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { paymentReducer } from './reducers/payment.reducer';
import { PaymentListComponent } from './views/payment-list/payment-list.component';
import { PaymentAddComponent } from './views/payment-add/payment-add.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { PaymentEffects } from './effects/payment.effects';

@NgModule({
  declarations: [
    AppComponent,
    PaymentListComponent,
    PaymentAddComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      payment: paymentReducer
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([PaymentEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
