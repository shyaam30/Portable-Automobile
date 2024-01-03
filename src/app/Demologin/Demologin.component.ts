import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';

import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment.development';
@Component({
  selector: 'app-Demologin',
  templateUrl: './Demologin.component.html',
  styleUrls: ['./Demologin.component.css']
})
export class DemologinComponent  {
  retUrl="";
  isLoggedIn: boolean=false;
  username:any;
  constructor(private fb:FormBuilder, private http:HttpClient, private router:Router) { }
  loginForm1=this.fb.group({
    email:["",[Validators.required,Validators.pattern("^([a-zA-Z0-9-_\.]+)@([a-zA-Z0-9]+).([a-zA-Z]{2,10})(\.[a-zA-Z]{2,8})?$")]],
    password:["",[Validators.required,Validators.pattern("^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$")]]
  });

  login(){
     if(this.loginForm1.value.email === environment.emailid && this.loginForm1.value.password === environment.password){
      // this.loginservice.isLoggedIn=true;
      this.http.get<any>(environment.url).subscribe(value=>{
        const user=value.find((result:any)=>{
         
       return result.email === environment.emailid && result.password === environment.password
        });
        if(user){
          // this.loginservice.isLoggedIn=true;
          Swal.fire(
            'Logged in as Admin!!',
            'successfully',
            'success'
          )
          localStorage.setItem('username',user.username);
          this.router.navigate(['admin']);
          localStorage.setItem('user data',JSON.stringify(user.email));
        }

          else{
            Swal.fire({
             icon: 'error',
             title: 'Oops...',
             text: 'User can not found!',
            footer: '<a href="">Why do I have this issue?</a>'
  })
          }
      });


    }
    else{
    this.http.get<any>(environment.url).subscribe(data=>{
      const user=data.find((result:any)=>{

        return result.email === this.loginForm1.value.email && result.password === this.loginForm1.value.password
      });

      if(user){
        // this.loginservice.isLoggedIn=true;
        Swal.fire(
          'Logged in!!',
          'successfully',
          'success'
        )
        localStorage.setItem('username',user.username);
        this.router.navigate(['Home']);
        localStorage.setItem('user data',JSON.stringify(user.email));
      }

        else{
          Swal.fire({
           icon: 'error',
           title: 'Oops...',
           text: 'User can not found!',
          footer: '<a href="">Why do I have this issue?</a>'
})
        }
  });

 }

  }

}
