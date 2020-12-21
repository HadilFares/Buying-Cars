import { Injectable } from '@angular/core';
import {Car} from '../shared/models/car';
import {CARS} from '../shared/models/des-cars';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  cars :Car []=CARS;

  constructor() { }
  getCars () :Car []{
    return this.cars;
  }
  getCarParId (id : number) : Car
  { 
    for(let i=0;i<this.cars.length;i++)
     if (this.cars[i].id==id)
     return this.cars[i];
  }
}

