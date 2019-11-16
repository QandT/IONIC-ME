import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-info',
  templateUrl: './vehicle-info.page.html',
  styleUrls: ['./vehicle-info.page.scss'],
})
export class VehicleInfoPage implements OnInit {

  public year: string;
  public make: string;
  public model: string;  

  constructor() { }

  ngOnInit() {
  }

  //TODO: get this pulling from the OBD service and retrieving real data
  getVehicleInfo() {
    this.year = "2006";
    this.make = "Honda";
    this.model = "CRV";
  }

}
