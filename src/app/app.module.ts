import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CarsService} from './services/cars.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { DetailCarComponent } from './detail-car/detail-car.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    DetailCarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
