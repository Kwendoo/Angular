import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo3',
  templateUrl: './exo3.component.html',
  styleUrls: ['./exo3.component.scss']
})
export class Exo3Component implements OnInit {

  article : string;

  liste : string[] = ["Returnal", 'Cyberpunk 2077']

  constructor() { }

  ngOnInit(): void {
  }

  addItem() : void{
    this.liste.push(this.article);
  }

  deleteItem(index : number) : void {
    this.liste.splice(index, 1);
  }

} 
