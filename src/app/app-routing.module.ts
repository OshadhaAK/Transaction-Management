import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StaffComponent } from './staff/staff.component';
import { TransactionComponent } from './transaction/transaction.component';
import { from } from 'rxjs';

const routes: Routes = [
  { path: 'manage-staff', component: StaffComponent},
  { path: 'manage-transactions', component: TransactionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
