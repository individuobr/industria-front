import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { throwError } from 'rxjs';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpUtil {

  constructor(private http: HttpClient) {
  }


  public get(url: string, nome: string, cpf: string): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.get(`${url}/${nome}/${cpf}`, httpOptions).toPromise();
  }

  public lista(url: string, params?: any): Promise<any> {
    return this.http.get(url, this.getRequestOptionsGetDefault(params)).toPromise()
    .then(dados => console.log(dados)).catch(erro => {
      return throwError(erro);
    });
  }


  public post(url: string, body: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };

    const jsonBody = JSON.stringify(body);
    return this.http.post(url, jsonBody, httpOptions)
      .map((res: any) => {
        return res;
      }).catch((e: any) => {
        return throwError(e);
      });
  }

  public getRequestOptionsPostDefault() {
    const httpHeader = new HttpHeaders();
    httpHeader.append('Content-Type', 'application/json');
    const options = {
      headers: new HttpHeaders()
    }
    options.headers = httpHeader;
    return options;
  }

  public getRequestOptionsGetDefault(params?: any) {
    const options = {
      params: new HttpParams()
    }
    options.params = params;
    return options;
  }


  public put(url: string, body: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };

    return this.http.put(url, JSON.stringify(body), httpOptions)
      .map((res: any) => {
        return res;
      }).catch((e: any) => {
        return throwError(e);
      });
  }

}
