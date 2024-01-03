import { Component } from '@angular/core';
import { LoginService } from './login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  login:any="";
  username:any;

  constructor(public loginservice:LoginService){

    setInterval(()=>{
     this.username=localStorage.getItem('username')

    },100)


  }
  logOut(){
    //this.loginservice.isLoggedIn=false;
    localStorage.removeItem('user data');
    location.href="Home"
  }

}
