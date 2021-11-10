import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fan } from './models/fan';
import { FanService } from './services/fan.service';

@Component({
  selector: 'app-correction-exo5',
  templateUrl: './correction-exo5.component.html',
  styleUrls: ['./correction-exo5.component.scss']
})
export class CorrectionExo5Component implements OnInit {

  fanListe : Fan[] = []

  constructor(
    private _router : Router,
    private _fanService : FanService
  ) { }

  ngOnInit(): void {

    this.fanListe = this._fanService.getAll();

  }

  toUpdate(id : number){
    this._router.navigate(['exercice/correction-exo5/update/' + id]);
  }

  toDelete(id : number){
    this._fanService.deleteFan(id);
  }

}
