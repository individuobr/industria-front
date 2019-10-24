import { Component, OnInit } from '@angular/core';
import { HttpUtil } from './../../provider/util/httpUtil';
import { EndPoint } from './../../provider/util/end-point';
import { ArduinoService } from 'src/app/provider/services/arduino.service';

@Component({
  selector: 'app-arduino',
  templateUrl: './arduino.component.html',
  styleUrls: ['./arduino.component.css']
})
export class ArduinoComponent implements OnInit {

  mensagem: string;

  constructor(
    private aruinoService: ArduinoService
    ) { }

  ngOnInit() {
  }

  zerar() {
    this.aruinoService.zerarStatus().toPromise().then(res => console.log(res));
  }
  

  conectarArduino() {
    this.aruinoService.conectarArduino().toPromise().then(res => console.log(res));   
  }

  desconectarArduino() {
    this.aruinoService.desconectarArduino().toPromise().then(res => {
      console.log(res);
    })
    .catch(err => {
      return Promise.reject(err.json().error || 'Erro ao Zerar Status');
    });
  }

}
