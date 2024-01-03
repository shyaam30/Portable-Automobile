import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // userLogOut: boolean=true;
  // isLoggedIn: boolean=false;

  isAuthenticated():boolean {
    if(localStorage.getItem('user data') !== null) {
      return true;
    }
    return false
  }

constructor() { }

// isuserLoggedIn(){
//   this.isLoggedIn=true;
// }
// userLoggedIn(){
// return of( this.isLoggedIn);
// }
// userLogOut(){
//   this.isLoggedIn=false;
// }


}
