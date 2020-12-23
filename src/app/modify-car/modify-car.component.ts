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
id:number;
CarName :string;
BrandCar:string;
Cardesc :string;
CarPrice:any;
year:string;
  constructor(  private route: ActivatedRoute , private carsService : CarsService ) { }

  ngOnInit(): void {
   this.id=this.route.snapshot.params['id'];
   const id=this.route.snapshot.params['id'];
    this.CarName=this.carsService.getCarById(+id).name;
    this.Cardesc=this.carsService.getCarById(+id).description;
    this.CarPrice=this.carsService.getCarById(+id).price;
    this.BrandCar=this.carsService.getCarById(+id).brand;
    this.year=this.carsService.getCarById(+id).year;
  }
  soumettre(f:NgForm) {
    this.carsService.update(this.id,this.CarName,this.Cardesc,this.CarPrice,this.BrandCar,this.year)
  }
  
  
   }
 
  


