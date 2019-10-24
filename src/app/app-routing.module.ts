import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PassageiroComponent } from './components/passageiro/passageiro.component';
import { DashComponent } from './components/dash/dash.component';
<<<<<<< HEAD
import { AcompanhamentoBagagemComponent } from './components/acompanhamento-bagagem/acompanhamento-bagagem.component';
=======
>>>>>>> 1f29f50131259a7ff82700b34406cdd8e743b2b0


const routes: Routes = [
  { path: 'passageiro', component: PassageiroComponent},
  { path: 'dash-board', component: DashComponent},
<<<<<<< HEAD
  { path: 'acompanhamento', component: AcompanhamentoBagagemComponent}
=======
>>>>>>> 1f29f50131259a7ff82700b34406cdd8e743b2b0
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
