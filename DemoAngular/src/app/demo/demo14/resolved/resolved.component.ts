import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resolved',
  templateUrl: './resolved.component.html',
  styleUrls: ['./resolved.component.scss']
})
export class ResolvedComponent implements OnInit {

  biere : string;

  constructor(private _activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.biere = this._activatedRoute.snapshot.data['monObject']
  }

}
