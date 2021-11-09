import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demo12',
  templateUrl: './demo12.component.html',
  styleUrls: ['./demo12.component.scss']
})
export class Demo12Component implements OnInit {

  parameter : number;

  constructor(
    private _router : Router
  ) { }

  ngOnInit(): void {
    this.parameter = 42;
  }

  redirect(){
    this._router.navigate(['/recup/' + this.parameter])
    // Attention le navigate demande une route absolue

  }

}
