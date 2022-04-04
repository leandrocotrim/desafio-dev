import { FindCnab } from './../models/find-cnab';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cnab } from '../models/cnab';

@Injectable({
  providedIn: 'root'
})
export class CnabLojaService {

  constructor(private http: HttpClient) { }

  find(findCnab: FindCnab): Observable<Cnab[]> {
    return this.http.get(
      'http://localhost:3000/files',
    ) as Observable<Cnab[]>;
  }
}
