import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarsService } from '../services/cars.service';
@Component({
  selector: 'app-detail-car',
  templateUrl: './detail-car.component.html',
  styleUrls: ['./detail-car.component.css']
})
export class DetailCarComponent implements OnInit {
  nameCar:string;
   descCar:string;
   brandCar:string;
   priceCar:any;
   yearCar:string;
  constructor(private route: ActivatedRoute , private carsService : CarsService  ) { }

  ngOnInit(): void {
    const id =this.route.snapshot.params['id'];
    this.nameCar=this.carsService.getCarParId(+id).name;
    this.brandCar=this.carsService.getCarParId(+id).brand;
    this.priceCar=this.carsService.getCarParId(+id).price;
    this.yearCar=this.carsService.getCarParId(+id).year;
    this.descCar=this.carsService.getCarParId(+id).description;

  }

}
