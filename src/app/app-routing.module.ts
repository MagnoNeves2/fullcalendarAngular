import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarioComponent } from './calendario/calendario.component';
import { FormularioComponent } from './formulario/formulario.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'calendario' },
  { path: 'calendario', component: CalendarioComponent },
  { path: 'formulario', component: FormularioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
