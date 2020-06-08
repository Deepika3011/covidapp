import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CountrywisePageRoutingModule } from './countrywise-routing.module';

import { CountrywisePage } from './countrywise.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CountrywisePageRoutingModule
  ],
  declarations: [CountrywisePage]
})
export class CountrywisePageModule {}
