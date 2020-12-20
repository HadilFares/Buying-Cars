import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  tabcars =[
    {
      carname:'Mercedes',
      carimage:"assets/cars/voiture.jpg"
    },
    {
      carname:'Kia Sportage',
      carimage:"assets/cars/voiture1.png"
    },
    {
      carname:'Audi',
      carimage:"assets/cars/voiture2.jpg"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
