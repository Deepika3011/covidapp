import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class RestapiService {

  baseUrl:string = "https://api.covid19api.com/summary";
  baseUrlc:string = "https://api.covid19api.com/countries";


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

}