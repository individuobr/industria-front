import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { HttpUtil } from './../../provider/util/httpUtil';
import { EndPoint } from './../../provider/util/end-point';
>>>>>>> 1f29f50131259a7ff82700b34406cdd8e743b2b0

@Component({
  selector: 'app-arduino',
  templateUrl: './arduino.component.html',
  styleUrls: ['./arduino.component.css']
})
export class ArduinoComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }
=======
  constructor(
    private httpservice: HttpUtil
    ) { }
>>>>>>> 1f29f50131259a7ff82700b34406cdd8e743b2b0

  ngOnInit() {
  }

<<<<<<< HEAD
=======
  zerar() {
    this.httpservice.zerarStatus(EndPoint.zerarStatus()).then(() => null);
  }

  conectarArduino() {
    this.httpservice.conectarArduino(EndPoint.conectarArduino()).then(() => null);
  }

  desconectarArduino() {
    this.httpservice.desconectarArduino(EndPoint.desconectarArduino()).then(() => null);
  }

>>>>>>> 1f29f50131259a7ff82700b34406cdd8e743b2b0
}
