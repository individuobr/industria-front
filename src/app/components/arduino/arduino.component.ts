import { Component, OnInit } from '@angular/core';
import { HttpUtil } from './../../provider/util/httpUtil';
import { EndPoint } from './../../provider/util/end-point';

@Component({
  selector: 'app-arduino',
  templateUrl: './arduino.component.html',
  styleUrls: ['./arduino.component.css']
})
export class ArduinoComponent implements OnInit {

  constructor(
    private httpservice: HttpUtil
    ) { }

  ngOnInit() {
  }

  zerar() {
    this.httpservice.zerarStatus(EndPoint.zerarStatus()).then(() => null);
  }

  conectarArduino() {
    this.httpservice.conectarArduino(EndPoint.conectarArduino()).then(() => null);
  }

  desconectarArduino() {
    this.httpservice.desconectarArduino(EndPoint.desconectarArduino()).then(() => null);
  }

}
