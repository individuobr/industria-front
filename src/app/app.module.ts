import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassageiroComponent } from './components/passageiro/passageiro.component';
import { BagagemComponent } from './components/bagagem/bagagem.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatOptionModule, MatSelectModule, MatInputModule, MatCardModule, MatButtonModule, MatGridListModule, MatListModule, MatBadge, MatBadgeModule, MatDialogModule } from '@angular/material';
import { DashComponent } from './dash/dash.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { ConfirmacaoBagagemComponent } from './components/passageiro/confimacao-bagagem.component';
import { HttpUtil } from './provider/util/httpUtil';
import { EndPoint } from './provider/util/end-point';
import { PassageiroService } from './provider/services/passageiro.service';
import { BageagemService } from './provider/services/bageagem.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PassageiroComponent,
    BagagemComponent,
    DashComponent, 
    ConfirmacaoBagagemComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule, 
    MatGridListModule,
    MatListModule,
    ReactiveFormsModule,
    CdkStepperModule,
    MatBadgeModule,
    MatDialogModule

   
   
    
  
  ],
  exports: [
   
  ],
  entryComponents: [
    ConfirmacaoBagagemComponent
  ],
  providers: [
    HttpUtil,
    EndPoint,
    PassageiroService,
    BageagemService

    
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
