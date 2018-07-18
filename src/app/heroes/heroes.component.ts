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
// To get the structure of hero
import { Hero } from '../../lib/hero';
// To get the list of all the heroes from service 
import { HeroService } from "../../service/hero.service";


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

  // This is to retrieve the heroes from the service
  // This function get called in ngOnInit
  getHeroes(): void{
    // using observable.subscribe()
    // subscribe( data => this.variable-to-assign = heroes)
    this.heroService.getHeroes().subscribe( heroes => this.heroes = heroes );
    //this.heroes = this.heroService.getHeroes();
  }

  constructor(
    private heroService: HeroService,
  ) { }

  ngOnInit() {
    // To collect the heroes list
    this.getHeroes();
  }

}
