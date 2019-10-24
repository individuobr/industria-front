import { Component, OnInit } from '@angular/core';

import { Message } from "@stomp/stompjs";
import { StompState } from "@stomp/ng2-stompjs";
import { MessageService } from 'src/app/provider/services/message.service';
import { PassageiroService } from 'src/app/provider/services/passageiro.service';
import { AcompanhamentoBagagemModel } from 'src/app/provider/model/acompanhamento-model';
import { TestBed } from '@angular/core/testing';
import { MatTableDataSource } from '@angular/material';

export interface PeriodicElement {
  nome: string;
  assento: string;
  hash_arduino: string;
}

const EXAMPLE_URL = "/topic/server-broadcaster";

@Component({
  selector: 'app-acompanhamento-bagagem',
  templateUrl: './acompanhamento-bagagem.component.html',
  styleUrls: ['./acompanhamento-bagagem.component.css']
})

export class AcompanhamentoBagagemComponent implements OnInit {
  displayedColumns: string[] = ['passageiro', 'poltrona', 'bagagem',];

  dataSource_blue = new MatTableDataSource<AcompanhamentoBagagemModel[]>();
  dataSource_green = new MatTableDataSource<AcompanhamentoBagagemModel[]>();
  dataSource_red = new MatTableDataSource<AcompanhamentoBagagemModel[]>();
  dataSource_yellow = new MatTableDataSource<AcompanhamentoBagagemModel[]>();

  acompanhamentoObjtec = new AcompanhamentoBagagemModel;

  private messagingService: MessageService;
  messageHistory = [];
  state: string = "NOT CONNECTED";

  constructor(
    private passageiroService: PassageiroService,
  ) {
    // Instantiate a messagingService
    this.messagingService = new MessageService(EXAMPLE_URL);

    // Subscribe to its stream (to listen on messages)
    this.messagingService.stream().subscribe((message: Message) => {
      this.buscarPassageiroComBagagemNaEsteira();
      //console.log("Chegou uma mala na Esteira");
    });

    // Subscribe to its state (to know its connected or not)
    this.messagingService.state().subscribe((state: StompState) => {
      this.state = StompState[state];
      window.localStorage.setItem('statusSocket', StompState[state]);
    });
  }

  // Use this methods to send message back to server
  sendAction() {
    console.log("Sending message");
    this.messagingService.send("/server-receiver", {
      text: "This is cool",
      text2: "I'm so happy!"
    });
  }

  buscarPassageiroComBagagemNaEsteira(){
    this.passageiroService.buscarPassageiroComBagagemNaEsteira().toPromise()
      .then(res => {
        if(res.length != 0){
          res.forEach(element => {
            if(this.dataSource_blue.data.length != 0){
              if(element.hash_arduino.includes(this.dataSource_blue.data)){
              //if(this.dataSource_blue.data.includes(element)){
                console.log("Ja existe");
              }else{
                this.dataSource_blue.data.push(element);
              }
          }else{
            this.dataSource_blue.data.push(element);
          }
          });
          this.dataSource_blue.data = this.dataSource_blue.data.slice();
          console.log(this.dataSource_blue);
        }
      });      
  }
 

  ngOnInit(){
  }
}

