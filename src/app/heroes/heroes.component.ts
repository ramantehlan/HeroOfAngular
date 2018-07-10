/*
*
* This is to display the list of heroes
*
* Author: Raman Tehlan
* Date of creation: 06/07/2018
*/

//
//  Import area
// 
import { Component, OnInit } from '@angular/core';
import { Hero } from '../../lib/hero';
import { HeroService } from "../hero.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  // here we are assigning heroes
  // We are recieving it from HEROES
  // It is directly used in templete, let hero of heroes
  heroes: Hero[];

  //  Currently selected hero to display
  selectedHero:Hero;

  //  This function is called when user click on the heroes-list
  onSelect(hero: Hero){
    this.selectedHero = hero;
  }

  // This is to retrieve the heroes from the service
  // This function get called in ngOnInit
  getHeroes(): void{
    // using observable.subscribe()
    // subscribe( data => this.variable-to-assign = heroes)
    this.heroService.getHeroes().subscribe( heroes => this.heroes = heroes );
  }

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    // To collect the heroes list
    this.getHeroes();
  }

}
