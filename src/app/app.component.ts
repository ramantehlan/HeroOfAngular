/*
*
* app.components.* are root components of what will 
* become a tree of nested components
*
* Author: Raman Tehlan
* Date of creation: 06/07/2018
*/

//
//  Import area
// 
import { Component } from '@angular/core';
import { Config } from '../lib/config.inc';

//
// Imported Classes
//
let config = new Config();

//
// Root component
//
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title:string = config.appname;
}
