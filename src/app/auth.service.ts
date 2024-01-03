import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  IsLoggedIn(){
    return !!localStorage.getItem('user data');
  }
constructor() { }


}
