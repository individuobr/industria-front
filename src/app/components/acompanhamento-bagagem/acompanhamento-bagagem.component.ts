import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  passageiro: string;
  poltrona: string;
  bagagem: string;
}

const BLUE_SECTOR: PeriodicElement[] = [
  {passageiro: 'João', poltrona: '1A', bagagem: '1A'},
  {passageiro: 'Maria', poltrona: '1B', bagagem: '1B'},
  {passageiro: 'Pedro', poltrona: '1C', bagagem: '1C'},
  {passageiro: 'Carlos', poltrona: '1D', bagagem: '1D'},
];

const GREEN_SECTOR: PeriodicElement[] = [
  {passageiro: 'Pedro', poltrona: '2A', bagagem: '2A'},
  {passageiro: 'Alberto', poltrona: '2B', bagagem: '2B'},
  {passageiro: 'José', poltrona: '2C', bagagem: '2C'},
  {passageiro: 'Carla', poltrona: '2D', bagagem: '2D'},
];

const RED_SECTOR: PeriodicElement[] = [
  {passageiro: 'Paula', poltrona: '3A', bagagem: '3A'},
  {passageiro: 'Eduardo', poltrona: '3B', bagagem: '3B'},
  {passageiro: 'Ricardo', poltrona: '3C', bagagem: '3C'},
  {passageiro: 'Isabella', poltrona: '3D', bagagem: '3D'},
];

const YELLOW_SECTOR: PeriodicElement[] = [
  {passageiro: 'Gustavo', poltrona: '4A', bagagem: '4A'},
  {passageiro: 'Lucas', poltrona: '4B', bagagem: '4B'},
  {passageiro: 'Joel', poltrona: '4C', bagagem: '4C'},
  {passageiro: 'Fabio', poltrona: '4D', bagagem: '4D'},
];

@Component({
  selector: 'app-acompanhamento-bagagem',
  templateUrl: './acompanhamento-bagagem.component.html',
  styleUrls: ['./acompanhamento-bagagem.component.css']
})

export class AcompanhamentoBagagemComponent implements OnInit {
  displayedColumns: string[] = ['passageiro', 'poltrona', 'bagagem',];
  dataSource_blue = BLUE_SECTOR;
  dataSource_green = GREEN_SECTOR;
  dataSource_red = RED_SECTOR;
  dataSource_yellow = YELLOW_SECTOR;

  constructor() { }

  ngOnInit() {
      
  }
}

