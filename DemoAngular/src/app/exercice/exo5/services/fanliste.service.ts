import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FanlisteService {

  fanListe : string[] = ["Antoine"]

  constructor() { }

  getFanList(){
    return this.fanListe;
  }

  getOneFan(index : number){
    return this.fanListe[index];
  }
}
