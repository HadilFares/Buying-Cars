import { Component, OnInit } from '@angular/core';
import { CarsService } from '../services/cars.service';
import { Car } from '../shared/models/car';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  

  constructor(private carsService :CarsService) { }

  ngOnInit(): void {
  }
  add(name,brand,price,description){
    var x=new Car ();
    x.name=name;
    x.brand=brand;
    x.price=price;
    x.description=description;
    this.carsService.add(x);
    
    
  }

}
