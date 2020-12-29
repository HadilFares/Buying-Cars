import { Component, OnInit } from '@angular/core';
import { CarsService } from '../services/cars.service';
import { Car } from '../shared/models/car';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  public name;
  public brand;
  public description;
  public price;
  public year;
  constructor(private carsService: CarsService) { }

  ngOnInit(): void {
    this.name = "";
    this.brand = "";
    this.description = "";
    this.price = null;
    this.year = "";
  }
  soumettre(f: NgForm) {
    const { name, brand, description, price, year } = this;
    this.carsService.add({ name, brand, description, price, year });
  }
}
