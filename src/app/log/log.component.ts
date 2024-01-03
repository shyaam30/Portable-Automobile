import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  hideSentence:boolean=false;
  hideSentence1:boolean=false;
  hideSentence2:boolean=false;
  hideSentence3:boolean=false;
  hideSentence4:boolean=false;
  date=new Date();
  constructor(private http:HttpClient,private fb:FormBuilder , private router:Router) { }
  logForm=this.fb.group({
    name:["",[Validators.required,Validators.pattern("([a-zA-Z ]{3,20})")]],
    complain:["",Validators.required],
    date:[this.date]
  })
  addComplaint(){
    this.http.post<any>(" http://localhost:3000/complain",this.logForm.value).subscribe((data)=>{
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your complaint has been saved',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(['Home']);
    });

  }
  toogle(){
    this.hideSentence = !this.hideSentence;
  }
  toogles(){
    this.hideSentence1 = !this.hideSentence1;
  }
  toogle1(){
    this.hideSentence2 = !this.hideSentence2;
  }
  toogle2(){
    this.hideSentence2 = !this.hideSentence2;
  }
  toogle3(){
    this.hideSentence3 = !this.hideSentence3;
  }
  toogle4(){
    this.hideSentence4 = !this.hideSentence4;
  }
  ngOnInit() {
  }

}
