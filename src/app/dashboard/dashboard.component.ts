// Default imports
import { Component, OnInit } from '@angular/core';
// To get the Hero class
import { Hero } from "src/lib/hero";
// To get HeroService
import { HeroService } from "src/service/hero.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // To store the list of all the heroes
  heroes:Hero[] = [];

  // Constructor
  constructor(private heroService: HeroService) { }
  
  ngOnInit() {
    // Calling the getHeroes method when the script is run
    this.getHeroes();
  }

  // To store the list of heroes in the heroes variable
  getHeroes():void{
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes.slice(0,5));
  }

}