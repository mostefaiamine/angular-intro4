import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { Exercice1Component } from './components/exercice1/exercice1.component';
import { Exercice2Component } from './components/exercice2/exercice2.component';
import { Exemple1Component } from './components/exemple1/exemple1.component';
import { Exemple2Component } from './components/exemple2/exemple2.component';
import { Exemple3Component } from './components/exemple3/exemple3.component';
import { Exemple4Component } from './components/exemple4/exemple4.component';
import { Exemple5Component } from './components/exemple5/exemple5.component';
import { Exemple6Component } from './components/exemple6/exemple6.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Exemple7Component } from './components/exemple7/exemple7.component';
import { HttpClientModule } from '@angular/common/http';
import { FormStateComponent } from './components/form-state/form-state.component';
import { Exemple8Component } from './components/exemple8/exemple8.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Exercice1Component,
    Exercice2Component,
    Exemple1Component,
    Exemple2Component,
    Exemple3Component,
    Exemple4Component,
    Exemple5Component,
    Exemple6Component,
    Exemple7Component,
    FormStateComponent,
    Exemple8Component
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
