import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/Home.component';

import { RegisterComponent } from './Register/Register.component';
import { CheckoutComponent } from './Checkout/Checkout.component';
import { AuthGuard } from './auth.guard';
import { AdminComponent } from './admin/admin.component';
import { DemologinComponent } from './Demologin/Demologin.component';
import { LogComponent } from './log/log.component';
import { ComplainComponent } from './complain/complain.component';

const routes: Routes = [
  {
    path:'Home',
    component:HomeComponent,

  },
  {
    path:'roll',
    component:RegisterComponent
  },
  {
    path:'admin',
    component:AdminComponent
  },
   {
    path:'checkout',
    component:CheckoutComponent,
    canActivate:[AuthGuard],

   },
   {
    path:'demo',
    component:DemologinComponent,
   },
   {
     path:'log',
     component:LogComponent,
   },
   {
    path:'complain',
    component:ComplainComponent,
   },


  {
   path:'**',
   component:HomeComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
