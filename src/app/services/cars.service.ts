import { Injectable } from '@angular/core';
import { Car } from '../shared/models/car';
import { CARS } from '../shared/models/des-cars';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  cars: Car[] = CARS;

  constructor() { }
  remove (c: Car)
 /* getCars(): Car[] {
    return this.cars;
  }
  getCarById(id: number): Car {
    for (let i = 0; i < this.cars.length; i++)
      if (this.cars[i].id == id)
        return this.cars[i];
  }
  add(c: Car) {
    c.id = (this.cars.length) + 1
    this.cars.push(c);
  }
  remove(c: Car) {
    var x = this.cars.indexOf(c);
    this.cars.splice(x, 1);
  }
  update(id: number, name: string, description: string, price: any, brand: string, year: string) {
    let index = this.cars.findIndex(e=>e.id = id)
    this.cars[index] = {
      ...this.cars[index],
      name,
      description,
      price,
      brand,
      year
    }
  }
  */

}

