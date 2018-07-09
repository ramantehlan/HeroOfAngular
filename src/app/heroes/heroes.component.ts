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
import { HEROES } from "../../lib/mock-heroes"

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  //here we are assigning heroes
  //We are recieving it from HEROES
  heroes = HEROES;

  //Currently selected hero to display
  selectedHero:Hero;

  //This function is called when user click on the heroes-list
  onSelect(hero: Hero){
    this.selectedHero = hero;
  }

  constructor() { }

  ngOnInit() {
  }

}
