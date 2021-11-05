import { Component, OnInit } from '@angular/core';
import { FakeOutService } from './services/fake-out.service';

@Component({
  selector: 'app-demo9',
  templateUrl: './demo9.component.html',
  styleUrls: ['./demo9.component.scss']
})
export class Demo9Component implements OnInit {

  isConnected : boolean;

  constructor(private _authService : FakeOutService) { 
    
  } 

  ngOnInit(): void {
    this.isConnected = this._authService.isConnected;
  }

  login(){
    this._authService.connected();
    this.isConnected = this._authService.isConnected;
  }

  logout(){
    this._authService.disconnected();
    this.isConnected = this._authService.isConnected;
  }

}
