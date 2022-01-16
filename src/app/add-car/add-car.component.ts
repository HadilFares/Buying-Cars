import { Component, OnInit } from '@angular/core';
import { CarsService } from '../services/cars.service';
import { Car } from '../shared/models/car';
import { FormGroup, FormControl,} from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  public AddForm: FormGroup;
  public name;
  public brand;
  public description;
  public price;
  public year;
  private image;
  public loading = false;
  constructor(private carsService: CarsService, fb :FormBuilder) { }

  ngOnInit(): void {
    this.AddForm = new FormGroup ({

    name :new FormControl('',Validators.required),
    brand   :new FormControl('',Validators.required),
    description   :new FormControl('',Validators.required),
    price  :new FormControl('',Validators.required),
    year  :new FormControl('',Validators.required)
  })
  }
  handleFileInput(files: FileList) {
    this.image = files.item(0);
    this.loading = true;
    this.carsService.uploadFile(this.image, ({ name }) => {
      this.image = name;
      this.loading = false;
    })
  }
  onSubmit (){
    console.warn(this.AddForm.value);
  }
}
