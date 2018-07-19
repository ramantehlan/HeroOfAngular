import { Injectable } from '@angular/core';
// Getting observable, to make the process asyc
// Getting `of` to stimulate the fetching process
import { Observable, of } from 'rxjs';
// Getting the structure of hero object
import { Hero } from "../lib/hero";
// Geting the demo information about the heroes
import { HEROES } from "../lib/mock-heroes";
// Adding the message service
import { MessageService } from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  // To pass the feroes list when requested
  // Observable is to make the process synchronous
  getHeroes(): Observable<Hero[]>{
    // ToDo: send the message _after_fetched
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  // To fetch the hero with id 
  getHero(id: number): Observable<Hero>{
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

  constructor(private messageService: MessageService) {

   }
}
