import { Component, OnInit } from '@angular/core';
import { CarsService } from 'src/app/services/cars.service';
import { Car } from 'src/app/shared/models/car';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  cars:Car[] = [];
  timeLine:string[] = [];
  constructor(private carService: CarsService){
    this.cars = carService.getAll();
    for(let t=0; t<24;t++){
      if(t<10){
        this.timeLine.push(`0${t}:00`)
      }
      else{
        this.timeLine.push(`${t}:00`)
      }
    }
  }
  ngOnInit(): void {

  }

}
