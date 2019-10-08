import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassageiroComponent } from './components/passageiro/passageiro.component';
import { BagagemComponent } from './components/bagagem/bagagem.component';

@NgModule({
  declarations: [
    AppComponent,
    PassageiroComponent,
    BagagemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
