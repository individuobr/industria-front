import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PassageiroComponent } from './passageiro.component';

@Component({
    selector: 'app-confimacao-bagagem',
    templateUrl: 'confirmacao-bagagem.html',
  })
  export class ConfirmacaoBagagemComponent {
  
    constructor(
      public dialogRef: MatDialogRef<PassageiroComponent>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  
  }
  export interface DialogData {
    confirmacao: boolean;
  }