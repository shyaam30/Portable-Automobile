import { Component, OnInit } from '@angular/core';
import { FeatureService } from '../feature.service';
import { Typeofvehicle } from '../Typeofvehicle.service';
import { NGXLogger } from 'ngx-logger';
@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']

})
export class HomeComponent implements OnInit {
  slides = [
    {img: "https://tse3.mm.bing.net/th?id=OIP.n8D9v0j1wxRAOjKI1OGrzQHaEK&pid=Api&P=0",
    text: "Bi"

  },
    {img: "https://clipartcraft.com/images/car-clipart-fxx-k-2.png"},
    {img: "https://media.istockphoto.com/id/1225448373/photo/kick-city-rider-bike-urban-electric-scooter-isolated-on-white-background-street-motorcycle.jpg?s=612x612&w=0&k=20&c=2sovWUJOzcuseQ6S6dNjLU_NG476Y5UOUn4K5fDZQ-4="},
    {img: "https://di-uploads-pod10.dealerinspire.com/daytonadodgechryslerjeepramfiat/uploads/2017/07/2017-Jeep-Wrangler-Unlimited.png"},
    {img: "https://tse4.mm.bing.net/th?id=OIP.c0BZtguu4LLcsfpBaT3ajwEgDY&pid=Api&P=0"}
  ];

  slideConfig = {"slidesToShow": 3, "slidesToScroll": 1,
  "autoplay":true,
  "autoplaySpeed":1000,
  "pauseOnHover":true,
  "dots":true,
  responsive:[{
    "breakpoint":800,
    "settings": {
      'slidesToShow': 2,
      'slidesToScroll': 1,
      'arrows': true,
      'dots': true
    },
  },
  {
    "breakpoint":788,
  "settings": {
    'slidesToShow': 1,
    'slidesToScroll': 1,
    'arrows': true,
    'dots': true
  }
},
    {
      "breakpoint":600,
    "settings": {
      'slidesToShow': 1,
      'slidesToScroll': 1,
      'arrows': true,
      'dots': true
    }
  }

]};
  Features:any;
  products:any;
  swiper:any;

  constructor(private service:FeatureService,private servic:Typeofvehicle , private logger:NGXLogger) {

    this.service.getFeatures().subscribe(data=>
      {

      this.Features= data;
   })




  this.servic.getProduct().subscribe(data=>
    {
 
    this.products= data;
 })


}
  ngOnInit() {
    this.logger.info('user accessed the home page')
  }


}
