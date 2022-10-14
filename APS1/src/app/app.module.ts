import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { NumberComponent } from './number/number.component';
import { IntegrantesComponent } from './integrantes/integrantes.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    NumberComponent,
    IntegrantesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
