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
// Adding the message service
import { MessageService } from "../service/message.service";

//
// Imported Classes
//

//
// Root component
//
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor(private messageService: MessageService){
      this.messageService.add("App Started.");
    }
   
}
