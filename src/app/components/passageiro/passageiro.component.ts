import { Component, OnInit } from '@angular/core';
import { AssentosEnum } from 'src/app/provider/model/assentos-enum.enum';
import { BagagemModel } from 'src/app/provider/model/bagagem-model';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { PassageiroModel } from 'src/app/provider/model/passageiro-model';
import { MatDialog } from '@angular/material';
import { ConfirmacaoBagagemComponent } from './confimacao-bagagem.component';
import { PassageiroService } from 'src/app/provider/services/passageiro.service';
import { BageagemService } from 'src/app/provider/services/bageagem.service';

@Component({
  selector: 'app-passageiro',
  templateUrl: './passageiro.component.html',
  styleUrls: ['./passageiro.component.css'],
})
export class PassageiroComponent implements OnInit {

  keys = Object.keys;
  assentosVagos = AssentosEnum;
  bagagens: Array<BagagemModel> = [];
  formPassageiro: FormGroup;
  formBagagem: FormGroup;
  numBagagens: number;
  habilitaFormBagagem: boolean = false;
  confirmacao: boolean;
  disabledButton: boolean = false;
  disabledInputs: boolean = false;
  passageiro: PassageiroModel;

  constructor(
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    private passageiroService: PassageiroService,
    private bagagemService: BageagemService,
  ) { }

  ngOnInit() {
    this.inicializaFormulario();
    this.numBagagens = 0;
  }

  gravarPassageriro() {
    this.disabledButton = true;
    let passageiro = new PassageiroModel();
    //Popula o Objeto
    passageiro.nome = this.formPassageiro.value.nome;
    passageiro.cpf = this.formPassageiro.value.cpf;
    passageiro.assento = this.formPassageiro.value.assento;
    passageiro.voo = this.formPassageiro.value.voo;

    this.passageiroService.gravaPassageriro(passageiro).toPromise()
      .then(res =>
        this.passageiro = res)
      .catch(err => {
        return Promise.reject(err.json().error || 'Erro ao Gravar Passageiro');
<<<<<<< HEAD
=======
        console.log(err);
>>>>>>> 1f29f50131259a7ff82700b34406cdd8e743b2b0
      });

    //Abre o Modal de Confirmação de bagagem
    const dialogRef = this.dialog.open(ConfirmacaoBagagemComponent, {
      width: '250px',
      data: { confirmacao: true }
    });
    //Evento que será acionado ao fechar o Modal
    dialogRef.afterClosed().subscribe(result => {
      this.confirmacao = result;
      console.log(this.confirmacao);
      if (this.confirmacao) {
        this.habilitaFormBagagem = true;
        this.disabledInputs = true;
      } else {
        this.habilitaFormBagagem = false;
        this.inicializaFormulario();
      }
    });
    console.log(this.passageiro);


  }

  limparFormPassageiro() {
    this.inicializaFormulario();
    this.habilitaFormBagagem = true;
    this.disabledInputs = false;
  }

  addBagagem() {
    let bagagem = new BagagemModel();
    bagagem.hashArduino = this.formBagagem.value.idBagagem;
    bagagem.peso = this.formBagagem.value.peso;
    bagagem.idPassageiro = this.passageiro.id;
<<<<<<< HEAD
    bagagem.status = 0;
=======
>>>>>>> 1f29f50131259a7ff82700b34406cdd8e743b2b0
    this.numBagagens++;

    this.bagagemService.gravaBagagem(bagagem).toPromise()
      .then(res =>
        console.log(res))
      .catch(err => {
        return Promise.reject(err.json().error || 'Erro ao Gravar Bagagem do Passageiro');
      });
    console.log(bagagem);

    this.inicializaFormularioBagagem();
  }

  inicializaFormulario() {
    this.formPassageiro = this.formBuilder.group({
      nome: new FormControl(null),
      cpf: new FormControl(),
      assento: new FormControl(),
      voo: new FormControl()

    });
    this.inicializaFormularioBagagem();
  }
  inicializaFormularioBagagem() {
    this.formBagagem = this.formBuilder.group({
      idBagagem: new FormControl(),
      peso: new FormControl()

    });
  }
  // Para o Html ter acesso os metodos internos do componente FormGroup
  get idBagagem() {
    return this.formBagagem.get('idBagagem');
  }
  get peso() {
    return this.formBagagem.get('peso');
  }
  get nome() {
    return this.formBagagem.get('nome');
  }
  get cpf() {
    return this.formBagagem.get('cpf');
  }
  get assento() {
    return this.formBagagem.get('assento');
  }
  get voo() {
    return this.formBagagem.get('voo');
  }

}

