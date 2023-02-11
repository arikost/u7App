import { Injectable } from '@angular/core';
import { car_list } from 'src/data';
import { Car } from '../shared/models/car';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor() { }

  getAll():Car[]{
    return car_list;
  }
}
