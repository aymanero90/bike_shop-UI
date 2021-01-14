import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { IBike } from 'src/app/interfaces/ibike';
import { BikeService } from 'src/app/services/bike.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  models : string[] = [
    'Bike_1', 'Bike_2' , 'Bike_3'
  ]

  bikeForm : FormGroup;   /// to validate forms in Angular 

  validMessage : string = "" ;    // to display to the user 

  constructor(private bikeService : BikeService) { }

  ngOnInit(): void {
    this.bikeForm = new FormGroup ({
      name : new FormControl ('' , Validators.required),   // we let the value empty , but it needs validator , that means the user should insert a value
      email : new FormControl ('' , Validators.required),
      phone : new FormControl ('' , Validators.required),
      //model : new FormControl ('' , Validators.required),
      serialNumber : new FormControl ('' , Validators.required),
      purchasePrice : new FormControl ('' , Validators.required),
      //purchaseDate : new FormControl ('', Validators.required),
      contact : new FormControl ()
    }
    )
  }

  submitRegistration (){
    if (this.bikeForm.valid){
      this.validMessage = "Your Bike has been successfully registered";
      this.bikeService.createBike(this.bikeForm.value).subscribe(
        data => {
          this.bikeForm.reset();
          return true;
        },
        error => {
          return Observable.throw(error);          
        }        
      )
    }
    else {
      this.validMessage = "Fields are required!";
    }
  }

}
