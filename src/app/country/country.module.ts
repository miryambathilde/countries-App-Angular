import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { CountryDetailsComponent } from './pages/country-details/country-details.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { CountryInputComponent } from './components/country-input/country-input.component';



@NgModule({
  declarations: [
    ByCapitalComponent,
    ByCountryComponent,
    ByRegionComponent,
    CountryDetailsComponent,
    CountryTableComponent,
    CountryInputComponent
  ],
  exports: [
    ByCapitalComponent,
    ByCountryComponent,
    ByRegionComponent,
    CountryDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
})
export class CountryModule { }
