import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AcceptorRejectBookingComponent } from './acceptor-reject-booking/acceptor-reject-booking.component';
import { AddVehicleCompComponent } from './add-vehicle-comp/add-vehicle-comp.component';
import { AdminAccessAreaComponent } from './admin-access-area/admin-access-area.component';
import { AfterPaymentComponent } from './after-payment/after-payment.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MonthlyRevenueComponent } from './monthly-revenue/monthly-revenue.component';
import { NewBookingComponent } from './new-booking/new-booking.component';
import { NewUserComponent } from './new-user/new-user.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { PaymentComponent } from './payment/payment.component';
import { RegisterComponent } from './register/register.component';
import { TermsComponent } from './terms/terms.component';
import { UpdateBookingComponent } from './update-booking/update-booking.component';
import { UserAreaComponent } from './user-area/user-area.component';
import { ViewBookingComponent } from './view-booking/view-booking.component';
import { ViewRentedVehicleComponent } from './view-rented-vehicle/view-rented-vehicle.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'register/:email',component:RegisterComponent},
  {path:'newUser',component:NewUserComponent},
  {path:'aboutUs',component:AboutUsComponent},
  {path:'contactUs',component:ContactUsComponent},
  {path:'tnc',component:TermsComponent},
  {path:'loginPage',component:LoginComponent},
  {path:'userArea/:email',component:UserAreaComponent},
  {path:'newBooking/:perkm/:charges/:type',component:NewBookingComponent},
  {path : 'feedback',component : FeedbackComponent},
  {path:'payment/:amount/:bookingId',component:PaymentComponent},
  {path:'afterPayment',component:AfterPaymentComponent},
  {path: 'viewBooking',component : ViewBookingComponent},
  {path:'adminArea',component:AdminAccessAreaComponent},
  {path:'userArea',component:UserAreaComponent},
  {path:'addVehicle',component:AddVehicleCompComponent},
  {path:'viewVehicleBooking',component:ViewRentedVehicleComponent},
  {path:'adminBooking',component:AcceptorRejectBookingComponent},
  {path:'updateBooking/:bookingId',component:UpdateBookingComponent},
  {path:'approvalPage',component:AcceptorRejectBookingComponent},
  {path:'viewAllPayments',component:PaymentDetailsComponent},
  {path:'monthlyRevenue',component:MonthlyRevenueComponent},
  {path:'',redirectTo:'loginPage',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
