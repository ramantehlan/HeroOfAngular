// Input is specially added here
// Since we are fetching a input from paretn component
import { Component, OnInit, Input} from '@angular/core';
// To get the structure of the hero
import { Hero } from '../../lib/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  //We are getting it from the other component
  //it is fetched from heroes component
  @Input() hero: Hero;
  
  constructor() { }

  ngOnInit() {
  }

}
