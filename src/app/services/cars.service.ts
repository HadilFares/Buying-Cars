import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Car } from '../shared/models/car';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private http: HttpClient, private router: Router) { }
  getCars(cb) {
    this.http.get('http://localhost:8080/cars').subscribe(cb);

  }
  getCarById(id: number, cb) {
    this.http.get('http://localhost:8080/cars/' + id).subscribe(cb)
  }
  add(info) {
    this.http.post('http://localhost:8080/cars/add', info).subscribe(() => {
      this.router.navigate(['/admin'])
    })
  }
  remove(c: Car, cb) {
    this.http.post('http://localhost:8080/cars/delete/' + c._id, {}).subscribe(cb);
  }
  update(_id: number, info) {
  }


}

