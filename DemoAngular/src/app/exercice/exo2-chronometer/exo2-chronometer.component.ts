import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo2-chronometer',
  templateUrl: './exo2-chronometer.component.html',
  styleUrls: ['./exo2-chronometer.component.scss']
})
export class Exo2ChronometerComponent implements OnInit {

  temps : number;
  timer : any;

  constructor() { }

  ngOnInit(): void {
  
    this.temps = 0;
    
  }

  start(){
    this.timer = setInterval(() => {this.temps++}, 1000)
  }

  stop(){
    clearInterval(this.timer);
    this.timer = null;
  }

  reset(){
    this.temps = 0;
    this.stop();
  }

}
