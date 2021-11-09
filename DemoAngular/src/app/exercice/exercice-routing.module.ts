import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorrectionExo5Component } from './correction-exo5/correction-exo5.component';
import { ExerciceComponent } from './exercice.component';
import { Exo2ChronometerComponent } from './exo2-chronometer/exo2-chronometer.component';
import { Exo3Component } from './exo3/exo3.component';
import { Exo4Component } from './exo4/exo4.component';
import { Exo5Component } from './exo5/exo5.component';
import { ObjectResolverResolver } from './exo5/object-resolver.resolver';
import { ResolvedComponent } from './exo5/resolvedList/resolved-list.component';

const routes: Routes = [
  {path : '', component : ExerciceComponent, children : [
    {path : "exo2-chronometer", component : Exo2ChronometerComponent},
    {path : "exo3", component : Exo3Component},
    {path : "exo4", component : Exo4Component},
    {path : 'exo5', component : Exo5Component},
    {path : "resolvedList/:index", resolve : {monFan : ObjectResolverResolver}, component : ResolvedComponent},
    {path : 'correction-exo5', component : CorrectionExo5Component}
  
  ]},
  {path : '**', redirectTo : 'notFound'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExerciceRoutingModule { }
