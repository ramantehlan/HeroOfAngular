// Input is specially added here
// Since we are fetching a input from paretn component
import { Component, OnInit, Input} from '@angular/core';
// To get the structure of the hero
import { Hero } from '../../lib/hero';
// To get the list of all the heroes from service 
import { HeroService } from "../../service/hero.service";
// To get information comming from the router
import { ActivatedRoute } from '@angular/router';
// To interact with the browser and to go back previous page
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  //We are getting it from the other component
  //it is fetched from heroes component
  @Input() hero: Hero;
  
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe(hero => this.hero = hero)
  }

}
