import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

// Rutas
import { APP_ROUTS } from './app.routes';

// Modulos
import { FuselajeModule } from './fuselaje/fuselaje.module';


import { AppComponent } from './app.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FuselajeComponent } from './fuselaje/fuselaje.component';


@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
    FuselajeComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTS,
    FuselajeModule,
    HttpClientModule,
    CommonModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
