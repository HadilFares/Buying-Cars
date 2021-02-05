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
    this.http.get('/api/cars').subscribe(cb);

  }
  getCarById(id: number, cb) {
    this.http.get('/api/cars/' + id).subscribe(cb)
  }
  add(info) {
    this.http.post('/api/cars/add', info).subscribe(() => {
      this.router.navigate(['/admin'])
    })
  }
  remove(c: Car, cb) {
    this.http.post('/api/cars/delete/' + c._id, {}).subscribe(cb);
  }
  update(_id, info) {
    this.http.post('/api/cars/update/' + _id, info).subscribe(() => {
      this.router.navigate(['/admin'])
    });
  }
  uploadFile(file: File, cb) {
    const formData = new FormData();
    formData.append('image', file, file.name);
    this.http.post('/api/cars/upload/', formData).subscribe(cb);
  }
}





