import { Component, OnInit } from '@angular/core';
import { Article } from './models/article.model';
import { ShoppingServiceService } from './service/shopping-service.service';

@Component({
  selector: 'app-exo4',
  templateUrl: './exo4.component.html',
  styleUrls: ['./exo4.component.scss']
})
export class Exo4Component implements OnInit {

  articleName : string;

  liste : Article[];

  constructor(
    private _shoppingService : ShoppingServiceService
  ) { }

  ngOnInit(): void {
    this.liste = this._shoppingService.liste;
  }

  ajoutItem() : void{
    const article = new Article;
    article.Name = this.articleName;
    this._shoppingService.ajout(article);
  }

  deleteItem(index : number) : void {
    this._shoppingService.deleteItem(index);
  }

  addQtyItem(index : number) : void{
    this._shoppingService.addQty(index);
  }

  removeQtyItem(index : number) : void{
    this._shoppingService.removeQty(index);
  }

}
 