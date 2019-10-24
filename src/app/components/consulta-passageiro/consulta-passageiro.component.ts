import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { PassageiroService } from 'src/app/provider/services/passageiro.service';
import { PassageiroModel } from './../../provider/model/passageiro-model';
>>>>>>> 1f29f50131259a7ff82700b34406cdd8e743b2b0

@Component({
  selector: 'app-consulta-passageiro',
  templateUrl: './consulta-passageiro.component.html',
  styleUrls: ['./consulta-passageiro.component.css']
})
export class ConsultaPassageiroComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }

  ngOnInit() {
  }

=======
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
>>>>>>> 1f29f50131259a7ff82700b34406cdd8e743b2b0
}
