import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IntegrantesComponent } from './integrantes/integrantes.component';
import { NumberComponent } from './number/number.component';

const routes: Routes = [
  {path: 'integrantes', component: IntegrantesComponent},
  {path: 'number', component : NumberComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
