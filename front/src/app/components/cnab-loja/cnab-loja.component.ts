import { FindCnab } from './../../models/find-cnab';
import { Cnab } from './../../models/cnab';
import { Subscription } from 'rxjs';
import { CnabLojaService } from './../../services/cnab-loja.service';
import { Component, OnInit } from '@angular/core';
import { FilterCnab } from './../../models/filter-cnab';

@Component({
  selector: 'desafio-cnab-loja',
  templateUrl: './cnab-loja.component.html',
  styleUrls: ['./cnab-loja.component.scss']
})
export class CnabLojaComponent implements OnInit {
  subGetFilter: Subscription | undefined;

  public filter: FilterCnab = new FilterCnab;
  public result: Cnab[] | undefined;
  public saldo: number = 0;

  public idArquivoCnab: number = 0;
  public loja: string = '';
  
  constructor(private cnabLojaService: CnabLojaService) { }

  ngOnInit(): void {
    this.subGetFilter = this.cnabLojaService.getFilter()
      .subscribe(this.setFilter);
  }

  onSearch(): void {
    const findCnab: FindCnab = { IdArquivoCnab: this.idArquivoCnab, NomeLoja: this.loja };
    this.cnabLojaService.getRelatorio(findCnab)
      .subscribe(this.setReult);
  }

  setFilter = (filter: FilterCnab): void => {
    this.filter = filter;
  }

  setReult = ({ result, saldo } : {result: any[], saldo: number} ): void => {
    this.result = result.map((item: any) => new Cnab(item));
    this.saldo = saldo;
  }
}
