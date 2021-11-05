import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo8',
  templateUrl: './demo8.component.html',
  styleUrls: ['./demo8.component.scss']
})
export class Demo8Component implements OnInit {

  maVar : string = "J'attend le contenu de l'enfant !"

  constructor() { }

  ngOnInit(): void {
  }

  reactToChild(s : string){
    this.maVar = s;
  }

}
