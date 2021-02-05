import { Component, OnInit } from '@angular/core';
import { CarsService } from '../services/cars.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  tabcars = []

  constructor(private carsService: CarsService) { }

  ngOnInit(): void {
    this.carsService.getCars(e => {
      this.tabcars = e.map(e => ({ ...e, image: `/api/images/${e.image}` }));
    });
  }

}
