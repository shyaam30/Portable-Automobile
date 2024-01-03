import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/Home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './Login/Login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './Register/Register.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CheckoutComponent } from './Checkout/Checkout.component';
import { AdminComponent } from './admin/admin.component';
import { DemologinComponent } from './Demologin/Demologin.component';
import { LogComponent } from './log/log.component';
import { ComplainComponent } from './complain/complain.component';
import Swal from 'sweetalert2';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { environment } from 'src/environments/environment.development';




@NgModule({
  declarations: [
     AppComponent,
      HomeComponent,
      LoginComponent,
      RegisterComponent,
      CheckoutComponent,
      AdminComponent,
      DemologinComponent,
      LogComponent,
      ComplainComponent,

   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SlickCarouselModule,
    LoggerModule.forRoot({serverLoggingUrl:environment.logurl, timestampFormat: 'dd MMM,yyyy hh:mm:ss a' ,level: NgxLoggerLevel.DEBUG, serverLogLevel: NgxLoggerLevel.TRACE})


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
