import { Injectable } from '@angular/core';

@Injectable()
export class AppMessageService {

  messages: string[] = [];

  add(m:string){
    this.messages.push(m);
  }

  clear(){
    this.messages = [];
  }

  constructor() { }


}
