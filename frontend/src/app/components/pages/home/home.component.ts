import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CarsService } from 'src/app/services/cars.service';
import { Car } from 'src/app/shared/models/car';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  cars:Car[] = [];
  constructor(private carService: CarsService){
    let carsObservable:Observable<Car[]>;
    carsObservable = carService.getAll();
    carsObservable.subscribe((serverCars) =>{
      this.cars = serverCars;
    })
  }
  ngOnInit(): void {
    console.log('cars',this.cars)
  }

}
