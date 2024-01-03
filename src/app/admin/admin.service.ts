import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

constructor(private http:HttpClient) { }
getvalue(){
  return this.http.get(environment.checkouturl)
}

}
