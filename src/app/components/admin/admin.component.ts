import { Component, OnInit } from '@angular/core';
import { IBike } from 'src/app/interfaces/ibike';
import { BikeService } from 'src/app/services/bike.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public bikes : IBike[];
  public errorMessage : string;


  constructor(private bikeService: BikeService) { }

  ngOnInit(): void {
    this.getBikes();
  }

  getBikes () {
    this.bikeService.getBikes().subscribe ({
      next: data => this.bikes =  data,
      error : err => this.errorMessage = err      
    })
  }

}
