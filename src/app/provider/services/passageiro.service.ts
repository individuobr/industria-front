import { Injectable } from '@angular/core';
import { HttpUtil } from '../util/httpUtil';
import { PassageiroModel } from '../model/passageiro-model';
import { Observable } from 'rxjs';
import { EndPoint } from '../util/end-point';

@Injectable({
  providedIn: 'root'
})
export class PassageiroService {

  constructor(private httpUtil : HttpUtil) { }
  
  gravaPassageriro(passageiro : PassageiroModel) : Observable<any> {
    return this.httpUtil.post(EndPoint.gravaPassageiro(), passageiro);
  }

  buscaNomePassageiro(passageiro : PassageiroModel) {
    return this.httpUtil.get(EndPoint.buscaNomePassageiro(), [passageiro.nome, passageiro.cpf]);
  }

  buscarPassageiroComBagagemNaEsteira(): Observable<any>{
    return this.httpUtil.get(EndPoint.buscarPassageiroComBagagemNaEsteira());
  }


}