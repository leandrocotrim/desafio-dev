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

  public modelo = {
    idArquivoCnab: 0,
    loja: ''
  };

  constructor(private cnabLojaService: CnabLojaService) { }

  ngOnInit(): void {
    this.subGetFilter = this.cnabLojaService.getFilter()
      .subscribe(this.setFilter);
  }

  onFilter(): void {

  }

  setFilter = (filter: FilterCnab): void => {
    this.filter = filter;
  }

  setReult = (result: Cnab[]): void => {
    this.result = result;
  }
}
