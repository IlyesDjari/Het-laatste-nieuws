import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';



const apiUrl ="https://api.openweathermap.org/data/2.5/weather?q=brussels,be&appid="

@Component({
  selector: 'hln-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class Widget implements OnInit {

  Widget:any;
  constructor() { }

  ngOnInit() {
    this.Widget = {
      main : {},
      isDay: true
    };
    this.getWidget();
  }


  /**
   * It fetches the data from the API, then it sets the data to the state.
   */
  getWidget(){
    fetch(`${apiUrl}7c7817c3161c5d70f063e6790135af29`)
    .then(response=>response.json())
    .then(data=>{this.setWidget(data);
    console.log(data);
    })
  }

  
  /**
   * The function takes in a data object, assigns it to the Widget property, and then assigns the
   * temp_celcius property to the main.temp property minus 273.15, rounded to the nearest integer.
   * @param {any} data - any
   */
  setWidget(data: any){
    this.Widget = data;
    this.Widget.temp_celcius = (this.Widget.main.temp - 273.15).toFixed(0);
    this.Widget.temp_min = (this.Widget.main.temp_min - 273.15).toFixed(0);
    this.Widget.wind = data.wind.speed
    this.Widget.situation = data.weather[0].main
  }

}