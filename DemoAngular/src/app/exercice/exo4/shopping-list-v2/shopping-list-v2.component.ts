import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-shopping-list-v2',
  templateUrl: './shopping-list-v2.component.html',
  styleUrls: ['./shopping-list-v2.component.scss']
})
export class ShoppingListV2Component implements OnInit {

  @Input() liste : Article[];

  @Output() deleteItem : EventEmitter<number>;
  @Output() addQty : EventEmitter<number>;
  @Output() removeQty : EventEmitter<number>;

  constructor() {
    this.deleteItem = new EventEmitter<number>();
    this.addQty = new EventEmitter<number>();
    this.removeQty = new EventEmitter<number>();
   }

  ngOnInit(): void {
  }

  removeItem(index : number) : void{
    this.deleteItem.emit(index);
  }

  addQtyItem(index : number) : void{
    this.addQty.emit(index);
  }

  removeQtyItem(index : number) : void{
    this.removeQty.emit(index);
  }

}
