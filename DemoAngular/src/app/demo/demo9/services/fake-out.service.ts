import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeOutService {

  isConnected : boolean = false;

  constructor() { }

  connected(){
    this.isConnected = true;
  }

  disconnected(){
    this.isConnected = false;
  }

}
