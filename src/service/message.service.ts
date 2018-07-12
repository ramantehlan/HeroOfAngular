import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];

  add(messages: string){
    this.messages.push(messages);
  }

  // This accepts the string which we wish to remove from the messages array
  remove(rem: string){
    // Getting the index of string in array
    var index = this.messages.indexOf(rem);
    // Spliceing the array by using index
    if (index !== -1) this.messages.splice(index, 1);
  }

  // To clear the whole message list
  clear(){
    this.messages = [];
  } 

  constructor() { }
}
