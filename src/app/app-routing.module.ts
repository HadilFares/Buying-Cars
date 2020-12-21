import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCarComponent } from './add-car/add-car.component';
import { CarComponent } from './car/car.component';
import { DetailCarComponent } from './detail-car/detail-car.component';
import { ListCarsComponent } from './list-cars/list-cars.component';

const routes: Routes = [
  {path :'car',component:CarComponent},
  {path :'car/:id',component:DetailCarComponent},
  {path :'home',component:ListCarsComponent},
  {path:'addcar',component:AddCarComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
