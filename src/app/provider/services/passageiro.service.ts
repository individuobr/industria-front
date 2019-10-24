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
<<<<<<< HEAD

  gravaPassageriro(passageiro : PassageiroModel) : Observable<any>{
    return this.httpUtil.post(EndPoint.gravaPassageiro(), passageiro);
  }
=======
  


  gravaPassageriro(passageiro : PassageiroModel) : Observable<any> {
    return this.httpUtil.post(EndPoint.gravaPassageiro(), passageiro);
  }

  buscaNomePassageiro(passageiro : PassageiroModel) {
    return this.httpUtil.get(EndPoint.buscaNomePassageiro(), passageiro.nome, passageiro.cpf.toString());
  }

>>>>>>> 1f29f50131259a7ff82700b34406cdd8e743b2b0
}
