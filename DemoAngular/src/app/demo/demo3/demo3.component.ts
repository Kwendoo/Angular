import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.scss']
})
export class Demo3Component implements OnInit {

  maVar : string = "Hello World !!!"

  constructor() { }

  ngOnInit(): void {
  }

  maMethode(){
    this.maVar = "c'est mon monde !!!"
  }

}
