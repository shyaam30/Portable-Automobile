import { Component } from '@angular/core';
import { FormBuilder,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ConfirmedValidator } from '../confirm.validator';

@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css']
})
export class RegisterComponent {


  constructor(private fb:FormBuilder, private router:Router, private http:HttpClient) {
  }

   regForm1=this.fb.group({
    username:["",[Validators.required,Validators.pattern("^(?!.*(.).*\\1{2})[a-zA-Z][a-zA-Z0-9_-]{3,15}$")]],
    email:["",[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,5}$")]],
    password:["",[Validators.required,Validators.pattern("^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$")]],
    cpassword:["",[Validators.required]]
  },{validator:ConfirmedValidator('password','cpassword')});




  submitForm(){

  this.http.post<any>("http://localhost:3000/users", this.regForm1.value).subscribe(() => {
      alert("Form submitted Successfully, Now Login please");
      this.router.navigateByUrl('/demo');
});
}

}


