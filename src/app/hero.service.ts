import { Injectable } from '@angular/core';
// Getting observable, to make the process asyc
// Getting `of` to stimulate the fetching process
import { Observable, of } from 'rxjs';
// Getting the structure of hero object
import { Hero } from "../lib/hero";
// Geting the demo information about the heroes
import { HEROES } from "../lib/mock-heroes";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  // To pass the feroes list when requested
  // Observable is to make the process synchronous
  getHeroes(): Observable<Hero[]>{
    return of(HEROES);
  }

  constructor() { }
}
