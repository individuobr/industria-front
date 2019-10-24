import { Component, OnInit } from '@angular/core';
import { PassageiroService } from 'src/app/provider/services/passageiro.service';
import { PassageiroModel } from './../../provider/model/passageiro-model';

@Component({
  selector: 'app-consulta-passageiro',
  templateUrl: './consulta-passageiro.component.html',
  styleUrls: ['./consulta-passageiro.component.css']
})
export class ConsultaPassageiroComponent implements OnInit {

  constructor(private passageiro: PassageiroService) { }

  passageiroslista = [];
  display: boolean = true;
  nome: string;
  cpf: number;
  passageiros: PassageiroModel = new PassageiroModel();
  ngOnInit() {
  }

  mudarativo() {
    this.display = !this.display;
  }

  buscaNomePassageiro() {
    this.passageiros.nome = this.nome;
    this.passageiros.cpf = this.cpf;
    this.passageiro.buscaNomePassageiro(this.passageiros).then(dados => {
    this.passageiroslista = dados;
    this.mudarativo();
    });
  }
}
