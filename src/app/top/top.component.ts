/*
*
* Top.components.* is to manage the top/header of the app
*
* Author: Raman Tehlan
* Date of creation: 06/07/2018
*/

//
//  Import area
// 
import { Component, OnInit } from '@angular/core';
import { Config } from '../../lib/config.inc';

//
// Imported Classes
//
let config = new Config();

//
// Root component
//
@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {
  title:string = config.appname;

  constructor() { }

  ngOnInit() {
  }

}