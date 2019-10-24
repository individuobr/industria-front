import { Component, OnInit } from '@angular/core';
import { PassageiroService } from 'src/app/provider/services/passageiro.service';
import { PassageiroModel } from './../../provider/model/passageiro-model';

@Component({
  selector: 'app-consulta-passageiro',
  templateUrl: './consulta-passageiro.component.html',
  styleUrls: ['./consulta-passageiro.component.css']
})
export class ConsultaPassageiroComponent implements OnInit {

  constructor(private passageiroService: PassageiroService) { }

  passageiroslista = [];
  display: boolean = true;
  nome: string;
  cpf: number;
  passageiro: PassageiroModel = new PassageiroModel();
  ngOnInit() {
  }

  mudarativo() {
    this.display = !this.display;
  }

  buscaNomePassageiro() {
    this.passageiro.nome = this.nome;
    this.passageiro.cpf = this.cpf;
    this.passageiroService.buscaNomePassageiro(this.passageiro).toPromise()
      .then(dados =>
        this.passageiroslista = dados
      )
      .catch(err => {
        return Promise.reject(err.json().error || 'Erro ao Gravar Bagagem do Passageiro');
      });
    this.mudarativo();
    
  }
}
