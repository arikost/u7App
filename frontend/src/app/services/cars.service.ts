import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CARS_URL } from '../shared/constants/urls';
import { Car } from '../shared/models/car';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<Car[]> {
    return this.http.get<Car[]>(CARS_URL);
  }
}
