import { Injectable } from '@angular/core';
import {Resolve, ActivatedRouteSnapshot} from '@angular/router';
import { MalisteService } from './maliste.service';

@Injectable({
  providedIn: 'root'
})
export class ObjectResolverResolver implements Resolve<string> {
  constructor(private _service : MalisteService){}
  
  resolve(route: ActivatedRouteSnapshot): string {
    let index = route.params['index'];
    return this._service.getOne(index);
  }
}
