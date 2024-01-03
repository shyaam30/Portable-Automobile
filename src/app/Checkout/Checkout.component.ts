import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-Checkout',
  templateUrl: './Checkout.component.html',
  styleUrls: ['./Checkout.component.css']
})
export class CheckoutComponent  {

  // orderPlacedTime: any; // Stores the timestamp of when the order was placed
  // remainingTime: any; // Stores the remaining time in seconds
  // timerId: any; // Stores the ID of the setInterval

  // ngOnInit() {
  //   this.remainingTime = 30 * 60; // Set the initial remaining time to 30 minutes
  // }

  // placeOrder() {
  //   // Your logic for placing the order goes here

  //   // Get the current timestamp and store it
  //   this.orderPlacedTime = Date.now();

  //   // Set the timer to update the remaining time every second
  //   this.timerId = setInterval(() => {
  //     this.updateRemainingTime();
  //   }, 1000);
  // }

  // updateRemainingTime() {
  //   const currentTime = Date.now();
  //   const elapsedTimeInSeconds = Math.floor((currentTime - this.orderPlacedTime) / 1000);
  //   this.remainingTime = 30 * 60 - elapsedTimeInSeconds;

  //   // If the remaining time reaches 0, clear the interval
  //   if (this.remainingTime <= 0) {
  //     this.orderTimerExpired();
  //   }
  // }

  // orderTimerExpired() {
  //   // Your logic for handling the timer expiration goes here
  //   console.log('30 minutes timer has expired!');
  //   // You can perform any action you need here, like showing a notification, redirecting, etc.

  //   // Clear the interval
  //   clearInterval(this.timerId);
  // }

   date= new Date();
   submitted:boolean=false;
  constructor(private fb:FormBuilder, private router:Router, private http:HttpClient) { }
  checkoutform = this.fb.group({
    name:["",[Validators.required,Validators.pattern("([a-zA-Z ]{3,20})")]],
    email:["",[Validators.required,Validators.pattern("^([a-zA-Z0-9-_\.]+)@([a-zA-Z0-9]+).([a-zA-Z]{2,10})(\.[a-zA-Z]{2,8})?$")]],
    location:["",[Validators.required]],
    contact:["",[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    option:["",Validators.required],
    issue:["",Validators.required],
    date:[this.date.getDay()]
  });

  validate() {
    this.submitted=true

    if(this.checkoutform.invalid) {
      return
    }
    this.checkout()
  }


  checkout(){
    this.http.post<any>("http://localhost:3000/checkout",this.checkoutform.value).subscribe((data)=>{
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your complaint has been saved',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigateByUrl("/Home")
    });
  }

}
