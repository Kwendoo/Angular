import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FanModel } from '../models/fanmodel';

@Component({
  selector: 'app-resolved',
  templateUrl: './resolved-list.component.html',
  styleUrls: ['./resolved-list.component.scss']
})
export class ResolvedComponent implements OnInit {

  fan : FanModel[] = [];

  constructor(

    private _activatedRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.fan = this._activatedRoute.snapshot.data['monFan']
  }

}
