import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  @Input() liste : string[];

  @Output() deleteItem : EventEmitter<number>;

  constructor() {
    this.deleteItem = new EventEmitter<number>();
   }

  ngOnInit(): void {
  }

  remove(index : number) : void {
    this.deleteItem.emit(index);
  }

} 
