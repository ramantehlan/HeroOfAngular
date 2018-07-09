import { Component, OnInit, Input} from '@angular/core';
import { Hero } from '../../lib/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  //We are getting it from the other component
  @Input() hero: Hero;
  
  constructor() { }

  ngOnInit() {
  }

}
