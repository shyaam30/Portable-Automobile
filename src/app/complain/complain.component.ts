import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-complain',
  templateUrl: './complain.component.html',
  styleUrls: ['./complain.component.css']
})
export class ComplainComponent  {
 checkout:any;
  constructor(private http:HttpClient) {
    this.http.get("http://localhost:3000/complain").subscribe((data)=>{
      this.checkout=data;

  });

  }
  delete(id:any){
    return this.http.delete("http://localhost:3000/complain/"+id).subscribe(()=>{
     alert("Done");
    });
  }


}
