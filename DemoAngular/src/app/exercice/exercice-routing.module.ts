import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExerciceComponent } from './exercice.component';
import { Exo2ChronometerComponent } from './exo2-chronometer/exo2-chronometer.component';
import { Exo3Component } from './exo3/exo3.component';
import { Exo4Component } from './exo4/exo4.component';

const routes: Routes = [
  {path : '', component : ExerciceComponent, children : [
    {path : "exo2-chronometer", component : Exo2ChronometerComponent},
    {path : "exo3", component : Exo3Component},
    {path : "exo4", component : Exo4Component}
  ]},
  {path : '**', redirectTo : 'notFound'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExerciceRoutingModule { }
