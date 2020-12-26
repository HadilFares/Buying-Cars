import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Car } from '../shared/models/car';
import { CARS } from '../shared/models/des-cars';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  cars: Car[] = CARS;

  constructor(private http: HttpClient, private router: Router) { }
  getCars(cb): Car[] {
    this.http.get('http://localhost:8080/cars').subscribe(cb);

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
  remove(c: Car,cb) {
    console.log(cb);
    this.http.post('http://localhost:8080/cars/delete/'+c._id).subscribe(cb);
  }
  update(id: number, name: string, description: string, price: any, brand: string, year: string) {
    let index = this.cars.findIndex(e => e.id = id)
    this.cars[index] = {
      ...this.cars[index],
      name,
      description,
      price,
      brand,
      year
    }
  }


}

