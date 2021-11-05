import { Injectable } from '@angular/core';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingServiceService {

  liste : Article[] = [];

  constructor() { }

  ajout(article : Article) : void {
    let index = this.liste.findIndex(x => x.Name == article.Name);
    if(index >- 1){
      this.addQty(index);
    }else {
      this.liste.push(article);
    }
  }

  deleteItem(index : number) : void{
    this.liste.splice(index, 1);
  }

  addQty(index : number) : void{
    this.liste[index].Quantity++;
  }

  removeQty(index : number) : void{
    if(this.liste[index].Quantity > 1){
      this.liste[index].Quantity--;
    } else{
      this.deleteItem(index);
    }
  }
}
