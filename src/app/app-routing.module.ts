import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentAddComponent } from './views/payment-add/payment-add.component';
import { PaymentListComponent } from './views/payment-list/payment-list.component';

const routes: Routes = [
  { path: '', component: PaymentListComponent },
  { path: 'payment', component: PaymentAddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
