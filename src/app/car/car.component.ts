import { Component, OnInit } from '@angular/core';
import { CARS } from '../shared/models/des-cars';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  tabcars =CARS

  constructor() { }

  ngOnInit(): void {
  }

}
