import { Injectable } from '@angular/core';
import {Resolve,ActivatedRouteSnapshot} from '@angular/router';
import { FanlisteService } from './services/fanliste.service';

@Injectable({
  providedIn: 'root'
})
export class ObjectResolverResolver implements Resolve<string> {

  constructor(private _service : FanlisteService){}

  resolve(route: ActivatedRouteSnapshot): string {
    let index = route.params['index'];
    return this._service.getOneFan(index);
  }
}
