import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminService } from './admin.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent   {


    checkout:any;
    constructor( private service:AdminService ,private http:HttpClient) {
      this.service.getvalue().subscribe(data=>{
        console.log(data);
        this.checkout=data;
      })
     }
     delete(id:any){
       return this.http.delete("http://localhost:3000/checkout/"+id).subscribe(()=>{
        alert("Done");
       });
     }



  }
