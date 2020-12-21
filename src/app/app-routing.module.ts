import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarComponent } from './car/car.component';
import { DetailCarComponent } from './detail-car/detail-car.component';

const routes: Routes = [
  {path :'car',component:CarComponent},
  {path :'car/:id',component:DetailCarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
