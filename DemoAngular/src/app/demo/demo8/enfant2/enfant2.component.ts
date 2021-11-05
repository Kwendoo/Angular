import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-enfant2',
  templateUrl: './enfant2.component.html',
  styleUrls: ['./enfant2.component.scss']
})
export class Enfant2Component implements OnInit {

  @Input() title : string;

  @Output() monEvent : EventEmitter<string>;

  constructor() {
    this.monEvent = new EventEmitter<string>();
   }

  ngOnInit(): void {
  }

  itsFriday(){
    this.monEvent.emit("C'est vendredi, et c'est pas toi qui décide !")
  }

  apero(){
    this.monEvent.emit("Je fais quand même ce que je veux !")
  }

}
