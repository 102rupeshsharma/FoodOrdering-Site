import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FoodpageComponent } from './foodpage/foodpage.component';
import { CartPageComponent } from './cartpage/cartpage.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes: Routes = [
  { path:'', component:HomeComponent},
  { path:'search/:searchItem',component:HomeComponent},
  { path:'tag/:tag', component:HomeComponent},
  { path:'food/:id', component:FoodpageComponent},
  { path:'cartpage', component:CartPageComponent},
  { path:'checkout', component:CheckoutComponent},
  { path:'login', component:LoginComponent},
  { path:'signup', component:SignupComponent},
  { path:'forgotPassword', component:ForgotPasswordComponent}
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
