import { Injectable } from '@angular/core';
import { HttpUtil } from '../util/httpUtil';
import { BagagemModel } from '../model/bagagem-model';
import { Observable } from 'rxjs';
import { EndPoint } from '../util/end-point';

@Injectable({
  providedIn: 'root'
})
export class BageagemService {

  constructor(private httpUtil : HttpUtil) { }

  gravaBagagem(bagagem : BagagemModel) : Observable<any>{
    return this.httpUtil.post(EndPoint.gravaBagagem(), bagagem);
  }
}
