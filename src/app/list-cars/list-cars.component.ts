import { Component, OnInit } from '@angular/core';
import { CarsService } from '../services/cars.service';
import { Car } from '../shared/models/car';
import {Router} from '@angular/router'
import { identifierModuleUrl } from '@angular/compiler';
@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styleUrls: ['./list-cars.component.css']
})
export class ListCarsComponent implements OnInit {
  tabcars: Car[] = null;
  constructor(private carsService: CarsService ,private router :Router) { 
  }

  ngOnInit(): void {
    this._getCars();
  }
  _getCars(){
    this.carsService.getCars(e=>{
      this.tabcars = e;
    });
  }
  remove(c) {
    this.carsService.remove(c,this._getCars.bind(this));
  }
  
  
}
