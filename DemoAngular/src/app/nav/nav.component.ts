import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  listLien : Link[];

  constructor() { }

  ngOnInit(): void {

    this.listLien = [
      {url : '/home', title : 'Home'},
      {url : '/about', title : 'About'},
      {title : 'Demos', children : [
        {url : '/demo/demo1', title : 'Demo 1 - Binding One-Way'},
        {url : '/demo/demo2', title : 'Demo 2 - Binding Two-Way'},
        {url : '/demo/demo3', title : 'Demo 3 - Event Binding'},
        {url : '/demo/demo4', title : 'Demo 4 - Attribute Binding'},
        {url : '/demo/demo5', title : 'Demo 5 - Pipes'},
        {url : '/demo/demo6', title : 'Demo 6 - Component Directives'},
        {url : '/demo/demo7', title : 'Demo 7 - Structural Directives'},
        {url : '/demo/demo8', title : 'Demo 8 - Input/Output'},
        {url : '/demo/demo9', title : 'Demo 9 - '}
      ]},
      {title : 'Exercices', children : [
        {url : '/exercice/exo2-chronometer', title : 'Exo 1 - Chronomètre'},
        {url : '/exercice/exo3', title : 'Exo 2 - Shopping List'}
      ]}
    ]

  }

  toggleVisible(index : number){
    this.listLien[index].isVisible = !this.listLien[index].isVisible;
  }

}


export class Link{
  title : string;
  url? : string;
  children? : Link[];
  isVisible? : boolean;
}