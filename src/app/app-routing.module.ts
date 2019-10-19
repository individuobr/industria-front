import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PassageiroComponent } from './components/passageiro/passageiro.component';
import { DashComponent } from './components/dash/dash.component';


const routes: Routes = [
  { path: 'passageiro', component: PassageiroComponent},
  { path: 'dash-board', component: DashComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
