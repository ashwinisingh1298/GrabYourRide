import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { NewUserComponent } from './new-user/new-user.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TermsComponent } from './terms/terms.component';
import { LoginComponent } from './login/login.component';
import { UserAreaComponent } from './user-area/user-area.component';
import { NewBookingComponent } from './new-booking/new-booking.component';
import { ViewBookingComponent } from './view-booking/view-booking.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { PaymentComponent } from './payment/payment.component';
import { AfterPaymentComponent } from './after-payment/after-payment.component';
import { UpdateBookingComponent } from './update-booking/update-booking.component';
import { UpdateVehicleComponent } from './update-vehicle/update-vehicle.component';
import { AcceptorRejectBookingComponent } from './acceptor-reject-booking/acceptor-reject-booking.component';
import { AddVehicleCompComponent } from './add-vehicle-comp/add-vehicle-comp.component';
import { AdminAccessAreaComponent } from './admin-access-area/admin-access-area.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { ViewRentedVehicleComponent } from './view-rented-vehicle/view-rented-vehicle.component';
import { MonthlyRevenueComponent } from './monthly-revenue/monthly-revenue.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    NewUserComponent,
    AboutUsComponent,
    ContactUsComponent,
    TermsComponent,
    LoginComponent,
    UserAreaComponent,
    NewBookingComponent,
    ViewBookingComponent,
    FeedbackComponent,
    AfterPaymentComponent,
    PaymentComponent,
    UpdateBookingComponent,
    UpdateVehicleComponent,
    AcceptorRejectBookingComponent,
    AddVehicleCompComponent,
    AdminAccessAreaComponent,
    PaymentDetailsComponent,
    ViewRentedVehicleComponent,
    MonthlyRevenueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
