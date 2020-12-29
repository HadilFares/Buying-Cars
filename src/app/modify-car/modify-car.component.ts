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
  id: number;
  CarName: string;
  BrandCar: string;
  Cardesc: string;
  CarPrice: any;
  year: string;
  constructor(private route: ActivatedRoute, private carsService: CarsService) { }

  ngOnInit(): void {
  }
  soumettre(f: NgForm) {
  }


}




