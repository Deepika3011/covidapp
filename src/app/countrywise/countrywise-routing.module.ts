import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountrywisePage } from './countrywise.page';

const routes: Routes = [
  {
    path: '',
    component: CountrywisePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountrywisePageRoutingModule {}
