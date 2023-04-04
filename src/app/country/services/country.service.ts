import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiURL: string = 'https://restcountries.com/v3.1';

  constructor (private http: HttpClient) { }

  searchCountryByName (searchTerm: string): Observable<Country[]> {
    const url = `${this.apiURL}/name/${searchTerm}`;
    return this.http.get<Country[]>(url);
  }

  searchByCapital (searchTerm: string): Observable<Country[]> {
    const url = `${this.apiURL}/capital/${searchTerm}`;
    return this.http.get<Country[]>(url);
  }
}
