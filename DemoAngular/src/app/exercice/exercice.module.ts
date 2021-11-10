import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciceRoutingModule } from './exercice-routing.module';
import { Exo2ChronometerComponent } from './exo2-chronometer/exo2-chronometer.component';
import { ExerciceComponent } from './exercice.component';
import { SharedModule } from '../shared/shared.module';
import { Exo3Component } from './exo3/exo3.component';
import { ShoppingListComponent } from './exo3/shopping-list/shopping-list.component';
import { FormsModule } from '@angular/forms';
import { Exo4Component } from './exo4/exo4.component';
import { ShoppingListV2Component } from './exo4/shopping-list-v2/shopping-list-v2.component';
import { Exo5Component } from './exo5/exo5.component';
import { ResolvedComponent } from './exo5/resolvedList/resolved-list.component';
import { CorrectionExo5Component } from './correction-exo5/correction-exo5.component';
import { CreateComponent } from './correction-exo5/create/create.component';


@NgModule({
  declarations: [
    Exo2ChronometerComponent,
    ExerciceComponent,
    Exo3Component,
    ShoppingListComponent,
    Exo4Component,
    ShoppingListV2Component,
    Exo5Component,
    ResolvedComponent,
    CorrectionExo5Component,
    CreateComponent,
  ],
  imports: [
    CommonModule,
    ExerciceRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class ExerciceModule { }
