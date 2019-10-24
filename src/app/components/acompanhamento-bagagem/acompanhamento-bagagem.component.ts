import { Component, OnInit } from '@angular/core';

import { Message } from "@stomp/stompjs";
import { StompState } from "@stomp/ng2-stompjs";
import { MessageService } from 'src/app/provider/services/message.service';

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

const EXAMPLE_URL = "/topic/server-broadcaster";

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

  private messagingService: MessageService;

  messageHistory = [];
  state: string = "NOT CONNECTED";

  constructor() {
    // Instantiate a messagingService
    this.messagingService = new MessageService(EXAMPLE_URL);

    // Subscribe to its stream (to listen on messages)
    this.messagingService.stream().subscribe((message: Message) => {
      this.messageHistory.unshift(message.body);
      console.log(message);
    });

    // Subscribe to its state (to know its connected or not)
    this.messagingService.state().subscribe((state: StompState) => {
      this.state = StompState[state];
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

  ngOnInit(){
    
  }
}

