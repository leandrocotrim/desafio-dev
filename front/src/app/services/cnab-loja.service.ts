import { FindCnab } from './../models/find-cnab';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cnab } from '../models/cnab';
import { FilterCnab } from '../models/filter-cnab';

@Injectable({
  providedIn: 'root'
})
export class CnabLojaService {

  constructor(private http: HttpClient) { }

  getFilter(): Observable<FilterCnab> {
    return this.http.get(
      'http://localhost:3000/cnab-loja/filtros',
    ) as Observable<FilterCnab>;
  }

  getRelatorio(findCnab: FindCnab): Observable<Cnab[]> {
    return this.http.get(
      `http://localhost:3000/cnab-loja/${findCnab.IdArquivoCnab}/${findCnab.NomeArquivo}`,
    ) as Observable<Cnab[]>;
  }
}
