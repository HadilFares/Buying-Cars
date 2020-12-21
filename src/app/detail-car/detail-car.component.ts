import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarsService } from '../services/cars.service';
@Component({
  selector: 'app-detail-car',
  templateUrl: './detail-car.component.html',
  styleUrls: ['./detail-car.component.css']
})
export class DetailCarComponent implements OnInit {
  nameCar: string;
  descCar: string;
  brandCar: string;
  priceCar: any;
  yearCar: string;
  constructor(private route: ActivatedRoute, private carsService: CarsService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.nameCar = this.carsService.getCarById(+id).name;
    this.brandCar = this.carsService.getCarById(+id).brand;
    this.priceCar = this.carsService.getCarById(+id).price;
    this.yearCar = this.carsService.getCarById(+id).year;
    this.descCar = this.carsService.getCarById(+id).description;

  }

}
