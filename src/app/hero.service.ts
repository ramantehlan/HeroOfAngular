import { Injectable } from '@angular/core';
import { Hero } from "../lib/hero";
import { HEROES } from "../lib/mock-heroes";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Hero[]{
    return HEROES;
  }

  constructor() { }
}
