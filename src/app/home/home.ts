import { Component } from '@angular/core';
import { HousingLocation } from '../housing-location/housing-location';
import { HousingLocationInfo } from '../housinglocationinfo';

@Component({
  selector: 'app-home',
  imports: [HousingLocation],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
readonly baseurl= 'https://angular.dev/assets/images/tutorials/common'
  housingLocation: HousingLocationInfo = {
    id: 9999,
    name: 'Test Home',
    city: 'Test City',
    state:'ST',
    photo: `${this.baseurl}/example-house.jpg` ,
    availableUnits: 99,
    wifi: true,
    laundry: false,
  }
}