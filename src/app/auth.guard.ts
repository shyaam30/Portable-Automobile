import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth:AuthService, private router : Router){}
  canActivate(){
    if(this.auth.IsLoggedIn()){
      return true;
    }
    else{
      Swal.fire('Login to proceed');
     this.router.navigate(['demo']);
     return false;
    }

  }

}
