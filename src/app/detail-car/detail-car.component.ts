import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { throwError } from 'rxjs';
import { CarsService } from '../services/cars.service';
@Component({
  selector: 'app-detail-car',
  templateUrl: './detail-car.component.html',
  styleUrls: ['./detail-car.component.css']
})
export class DetailCarComponent implements OnInit {
  public car;
  constructor(private route: ActivatedRoute, private carsService: CarsService) { }

  ngOnInit(): void {
    this.carsService.getCarById(this.route.snapshot.params.id,(car)=>{
      this.car = car;
    })
  }

}
