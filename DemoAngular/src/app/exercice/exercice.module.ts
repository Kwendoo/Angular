import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciceRoutingModule } from './exercice-routing.module';
import { Exo2ChronometerComponent } from './exo2-chronometer/exo2-chronometer.component';
import { ExerciceComponent } from './exercice.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    Exo2ChronometerComponent,
    ExerciceComponent
  ],
  imports: [
    CommonModule,
    ExerciceRoutingModule,
    SharedModule
  ]
})
export class ExerciceModule { }
