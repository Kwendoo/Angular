import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Fan } from '../models/fan';

@Injectable({
  providedIn: 'root'
})
export class FanService {

  private _fanList : Fan[] = [];

  constructor(
    private _router : Router
  ) { }

  getAll() : Fan[]{
    return this._fanList;
  }

  getById(id : number) : Fan{
    return this._fanList[id];
  }

  saveFan(fan : Fan, id : number = -1) : void {
    if(id == -1){
      this._fanList.push(fan);
    } else {
      this._fanList[id] = fan;
    }
    this._router.navigate(['exercice/correction-exo5'])
  }

  deleteFan(id : number){
    this._fanList.splice(id, 1);
  }

}
