import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';


@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css'],
  styles:[`input.ng-invalid{border-right:5px solid red;}

  input.ng-valid{border-right:5px solid green;}`]

})
export class LoginComponent  {
  retUrl="";
  isLoggedIn: boolean=false;
  constructor(private fb:FormBuilder, private http:HttpClient, private router:Router) { }
  loginForm1=this.fb.group({
    email:["",[Validators.required,Validators.pattern("^([a-zA-Z0-9-_\.]+)@([a-zA-Z0-9]+).([a-zA-Z]{2,10})(\.[a-zA-Z]{2,8})?$")]],
    password:["",[Validators.required,Validators.pattern("^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$")]]
  })

  login(){
     if(this.loginForm1.value.email === "admin1@gmail.com" && this.loginForm1.value.password === "admin@1"){
      // this.loginservice.isLoggedIn=true;
      this.router.navigate(['admin']);
    }
    else{
    this.http.get<any>('http://localhost:3000/users').subscribe(res=>{
      const user=res.find((result:any)=>{
        return result.email === this.loginForm1.value.email && result.password === this.loginForm1.value.password
      });

      if(user){
        // this.loginservice.isLoggedIn=true;
        alert("login Successfully");
        this.router.navigate(['Home']);
      }

        else{
          alert('user not found');
        }
  });

 }

  }

}
