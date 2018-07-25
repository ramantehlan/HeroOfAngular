import { Injectable } from '@angular/core';
// Getting observable, to make the process asyc
// Getting `of` to stimulate the fetching process
import { Observable, of } from 'rxjs';
// Getting the structure of hero object
import { Hero } from "../lib/hero";
//
import { HEROES } from "../lib/mock-heroes";
// Adding the message service
import { MessageService } from "./message.service";
// To use the protocol
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes';  // URL to web api

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  // To pass the feroes list when requested
  // Observable is to make the process synchronous
  getHeroes(): Observable<Hero[]>{
    // ToDo: send the message _after_fetched
    this.messageService.add('HeroService: fetched heroes');
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  // To fetch the hero with id 
  getHero(id: number): Observable<Hero>{
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

  constructor(  private http: HttpClient,
                private messageService: MessageService) {

   }
}
