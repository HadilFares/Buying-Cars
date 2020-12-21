import { Injectable } from '@angular/core';
import {Car} from '../shared/models/car';
import {CARS} from '../shared/models/des-cars';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  cars :Car []=CARS;

  constructor() { }
  getCars () :Car []{
    return this.cars;
  }
  getCarParId (id : number) : Car
  { 
    for(let i=0;i<this.cars.length;i++)
     if (this.cars[i].id==id)
     return this.cars[i];
  }
  addcar (c)
  {
    c.id=(this.cars.length)+1
    this.cars.push(c);
  }
  deletecar(c){
    var x =this.cars.indexOf(c);
    this.cars.splice(x,1);
  }
} modifycar (id:number ,n:string,d:string,p:any,b:string,y:string)
{
  for (let i=0;i<this.cars.length;i++)
  if (this.cars[i].id==id){
    this.cars[i].name=n;
    this.cars[i].description=d;
    this.cars[i].price=p;
    this.cars[i].year=y;
  }
  return ;
  }
}
