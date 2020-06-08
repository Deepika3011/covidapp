import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { RestapiService } from '../restapi.service'
@Component({
  selector: 'app-countrywise',
  templateUrl: './countrywise.page.html',
  styleUrls: ['./countrywise.page.scss'],
})
export class CountrywisePage {
  private Countrywise: Object;
  Router: any;
  constructor(public route:Router,  public restapi: RestapiService) {

    this.restapi.getTotal().subscribe((response) => {
      console.log(response);
      this.Countrywise = response;
    });
  }
