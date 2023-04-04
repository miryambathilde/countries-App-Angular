import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styleUrls: [ './country-input.component.scss' ]
})
export class CountryInputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();

  searchTerm: string = '';


  constructor () { }

  ngOnInit (): void {
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe(value => {
        console.log(value)
        this.onDebounce.emit(value);
      });
  }

  searchByName () {
    this.onEnter.emit(this.searchTerm);
  }

  pressKey () {
    this.debouncer.next(this.searchTerm);
  }

}
