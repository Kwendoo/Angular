import { Component, OnInit } from '@angular/core';
import { FanlisteService } from './services/fanliste.service';

@Component({
  selector: 'app-exo5',
  templateUrl: './exo5.component.html',
  styleUrls: ['./exo5.component.scss']
})
export class Exo5Component implements OnInit {

  fanList : string[];

  constructor(
    private _sercive : FanlisteService
  ) { }

  ngOnInit(): void {
    this.fanList = this._sercive.getFanList();
  }

}
