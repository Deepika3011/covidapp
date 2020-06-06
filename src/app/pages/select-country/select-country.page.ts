import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestapiService } from  '../../restapi.service';
@Component({
  selector: 'app-select-country',
  templateUrl: './select-country.page.html',
  styleUrls: ['./select-country.page.scss'],
})
export class SelectCountryPage {
  private countries;

  constructor(public route:Router,  public restapi: RestapiService) {
    this.restapi.getcountries().subscribe((response) => {
      console.log(response);
      this.countries = response;
    });
    
 
  }
  
}