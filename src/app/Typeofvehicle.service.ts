import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class Typeofvehicle {

  constructor( private http:HttpClient) { }

  getProduct(){
    return this.http.get("http://localhost:3000/Products")
  }
}

