import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class RestapiService {

  baseUrl:string = "https://api.covid19api.com/summary";
  baseUrlc:string = "https://api.covid19api.com/countries";
  base:string = "https://api.covid19api.com/country/south-africa?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z";

  constructor(private  httpClient : HttpClient) {
    this.getTotal();
    this.getcountries();
   }
   public  getTotal() {

    return this.httpClient.get(this.baseUrl);

    }
    public  getcountries() {

      return this.httpClient.get(this.baseUrlc);

      }
    public getCountrywise(){
      return this.httpClient.get(this.base);
    }
}