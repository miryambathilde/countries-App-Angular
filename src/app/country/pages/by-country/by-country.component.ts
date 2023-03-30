import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: [ './by-country.component.scss' ]
})
export class ByCountryComponent implements OnInit {

  searchTerm: string = '';
  error: boolean = false;
  countries: Country[] = [];


  constructor (private countryService: CountryService) { }

  ngOnInit (): void {
  }

  searchByName () {
    this.error = false;

    this.countryService.searchCountryByName(this.searchTerm)
      .subscribe(countries => {
        console.log(countries);
        this.countries = countries;
      }, (err) => {
        this.error = true;
        this.countries = [];
      });
  }

}
