import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PassageiroComponent } from './components/passageiro/passageiro.component';
import { DashComponent } from './components/dash/dash.component';
import { AcompanhamentoBagagemComponent } from './components/acompanhamento-bagagem/acompanhamento-bagagem.component';


const routes: Routes = [
  { path: 'passageiro', component: PassageiroComponent},
  { path: 'dash-board', component: DashComponent},
  { path: 'acompanhamento', component: AcompanhamentoBagagemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
