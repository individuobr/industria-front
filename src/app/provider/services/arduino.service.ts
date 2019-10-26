import { Injectable } from '@angular/core';
import { HttpUtil } from '../util/httpUtil';
import { EndPoint } from '../util/end-point';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArduinoService {

  constructor(private httpUtil : HttpUtil) { }

  zerarStatus(): Observable<HttpResponse<string>>{
    return this.httpUtil.get(EndPoint.zerarStatus());
  }

  conectarArduino(){
    return this.httpUtil.get(EndPoint.conectarArduino());
  }

  desconectarArduino(){
    return this.httpUtil.get(EndPoint.desconectarArduino());
  }
}
