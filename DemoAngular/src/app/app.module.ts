import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EnfantComponent } from './home/enfant/enfant.component';
import { NavComponent } from './nav/nav.component';
import { SharedModule } from './shared/shared.module';
import { DemoRoutingModule } from './demo/demo-routing.module';
import { ExerciceRoutingModule } from './exercice/exercice-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    EnfantComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    DemoRoutingModule,
    ExerciceRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
