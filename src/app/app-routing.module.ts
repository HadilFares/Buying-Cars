import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCarComponent } from './add-car/add-car.component';
import { AuthComponent } from './auth/auth.component';
import { CarComponent } from './car/car.component';
import { DetailCarComponent } from './detail-car/detail-car.component';
import { ListCarsComponent } from './list-cars/list-cars.component';
import { ModifyCarComponent } from './modify-car/modify-car.component';
import { GardeAuthGuard } from './services/garde-auth.guard';

const routes: Routes = [
  { path:'cnx',component:AuthComponent},
  {path :'',component:CarComponent},
  {path :'car/:id',component:DetailCarComponent},
  {path :'admin',component:ListCarsComponent ,canActivate:[GardeAuthGuard]},
  {path :'admin/add',component:AddCarComponent ,canActivate:[GardeAuthGuard]},
  {path :'admin/update/:id',component:ModifyCarComponent,canActivate:[GardeAuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
