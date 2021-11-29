import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  constructor(private _http : HttpClient) { }

  public getList () {

  }

  public getDetails (nom : string) {

  }
}
