import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MalisteService {

  liste : string[] = ["Orval", "Krieck", "Chimay Bleue", "Jupiler", "Duvel", "Bush", "Desperados", "WestVleteren"]

  constructor() { }

  getList(){
    return this.liste;
  }

  getOne(index : number){
    return this.liste[index]
  }
}
