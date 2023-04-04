import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styleUrls: [ './by-capital.component.scss' ]
})
export class ByCapitalComponent implements OnInit {

  searchTerm: string = '';
  error: boolean = false;
  countries: Country[] = [];


  constructor (private countryService: CountryService) { }

  ngOnInit (): void {
  }

  searchByCapital (term: string) {
    this.error = false;
    this.searchTerm = term;

    this.countryService.searchByCapital(this.searchTerm)
      .subscribe(countries => {
        console.log(countries);
        this.countries = countries;
      }, (err) => {
        this.error = true;
        this.countries = [];
      });
  }

  suggestions (searchTerm: string) {
    this.error = false;
  }

}
