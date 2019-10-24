import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassageiroComponent } from './components/passageiro/passageiro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
<<<<<<< HEAD
import { MatFormFieldModule, MatOptionModule, MatSelectModule, MatInputModule, MatCardModule, MatButtonModule, MatGridListModule, MatListModule, MatBadge, MatBadgeModule, MatDialogModule, MatTableModule  } from '@angular/material';
=======
import { MatFormFieldModule, MatOptionModule, MatSelectModule, MatInputModule, MatCardModule, MatButtonModule, MatGridListModule, MatListModule, MatBadge, MatBadgeModule, MatDialogModule } from '@angular/material';
>>>>>>> 1f29f50131259a7ff82700b34406cdd8e743b2b0
import { DashComponent } from './components/dash/dash.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { ConfirmacaoBagagemComponent } from './components/passageiro/confimacao-bagagem.component';
import { HttpUtil } from './provider/util/httpUtil';
import { EndPoint } from './provider/util/end-point';
import { PassageiroService } from './provider/services/passageiro.service';
import { BageagemService } from './provider/services/bageagem.service';
import { HttpClientModule } from '@angular/common/http';
import { ArduinoComponent } from './components/arduino/arduino.component';
import { ConsultaPassageiroComponent } from './components/consulta-passageiro/consulta-passageiro.component';
import { AcompanhamentoBagagemComponent } from './components/acompanhamento-bagagem/acompanhamento-bagagem.component';
<<<<<<< HEAD

=======
import {MatTableModule} from '@angular/material/table';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
>>>>>>> 1f29f50131259a7ff82700b34406cdd8e743b2b0
@NgModule({
  declarations: [
    AppComponent,
    PassageiroComponent,
    DashComponent, 
    ConfirmacaoBagagemComponent, 
    ArduinoComponent, 
    ConsultaPassageiroComponent, 
    AcompanhamentoBagagemComponent
    
  ],
  imports: [
    HttpClientModule,
<<<<<<< HEAD
=======
    TableModule,
    MatTableModule,
    ButtonModule,
>>>>>>> 1f29f50131259a7ff82700b34406cdd8e743b2b0
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
    MatDialogModule,
<<<<<<< HEAD
    MatTableModule
=======

>>>>>>> 1f29f50131259a7ff82700b34406cdd8e743b2b0
   
   
    
  
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
