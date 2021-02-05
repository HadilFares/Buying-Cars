import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CarsService } from '../services/cars.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-modify-car',
  templateUrl: './modify-car.component.html',
  styleUrls: ['./modify-car.component.css']
})
export class ModifyCarComponent implements OnInit {
  public name;
  public brand;
  public description;
  public price;
  public year;
  constructor(private route: ActivatedRoute, private carsService: CarsService) { }

  ngOnInit(): void {
    this.carsService.getCarById(this.route.snapshot.params.id, (car) => {
      const { name, brand, description, price, year } = car || {};
      this.name = name;
      this.brand = brand;
      this.description = description;
      this.price = price;
      this.year = year;
    })
  }
  soumettre(f: NgForm) {
    const { name, brand, description, price, year } = this;
    this.carsService.update(this.route.snapshot.params.id, { name, brand, description, price, year })
  }


}




