import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Demo3Component } from './demo3/demo3.component';
import { Demo4Component } from './demo4/demo4.component';
import { Demo5Component } from './demo5/demo5.component';
import { SharedModule } from '../shared/shared.module';
import { Demo6Component } from './demo6/demo6.component';
import { Demo7Component } from './demo7/demo7.component';
import { Demo8Component } from './demo8/demo8.component';
import { Enfant2Component } from './demo8/enfant2/enfant2.component';
import { Demo9Component } from './demo9/demo9.component';
import { Demo10Component } from './demo10/demo10.component';
import { Demo11Component } from './demo11/demo11.component';
import { Demo12Component } from './demo12/demo12.component';
import { RecupParamComponent } from './demo12/recup-param/recup-param.component';
import { Demo13Component } from './demo13/demo13.component';
import { Demo14Component } from './demo14/demo14.component';
import { ResolvedComponent } from './demo14/resolved/resolved.component';
import { Demo15Component } from './demo15/demo15.component';


@NgModule({
  declarations: [
    DemoComponent,
    Demo1Component,
    Demo2Component,
    Demo3Component,
    Demo4Component,
    Demo5Component,
    Demo6Component,
    Demo7Component,
    Demo8Component,
    Enfant2Component,
    Demo9Component,
    Demo10Component,
    Demo11Component,
    Demo12Component,
    RecupParamComponent,
    Demo13Component,
    Demo14Component,
    ResolvedComponent,
    Demo15Component
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class DemoModule { }
