import { Component, OnInit } from '@angular/core';
import { CarsService } from '../services/cars.service';
import { Car } from '../shared/models/car';
@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styleUrls: ['./list-cars.component.css']
})
export class ListCarsComponent implements OnInit {
  tabcars: Car[] = null;
  constructor(private carsService: CarsService) { }

  ngOnInit(): void {
    this.tabcars = this.carsService.getCars();
  }
  remove(c) {
    this.carsService.remove(c);
  }

}
