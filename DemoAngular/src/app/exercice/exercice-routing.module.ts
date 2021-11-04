import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExerciceComponent } from './exercice.component';
import { Exo2ChronometerComponent } from './exo2-chronometer/exo2-chronometer.component';

const routes: Routes = [
  {path : '', component : ExerciceComponent, children : [
    {path : "exo2-chronometer", component : Exo2ChronometerComponent}
  ]},
  {path : '**', redirectTo : 'notFound'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExerciceRoutingModule { }
