import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RatingModule } from 'ngx-bootstrap/rating';
import { SerachComponent } from './serach/serach.component';
import { TagsComponent } from './tags/tags.component';
import { CartPageComponent } from './cartpage/cartpage.component';
import { FoodpageComponent } from './foodpage/foodpage.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SerachComponent,
    TagsComponent,
    CartPageComponent,
    FoodpageComponent,
    NotFoundComponent,
    CheckoutComponent,
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RatingModule.forRoot(),
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    InputTextModule,
    InputTextareaModule,
    FloatLabelModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
