import {ArquivoCnab} from './../models/arquivo-cnab.model';

export class CnabLojaFilterDto {
  public ArquivosCnab: ArquivoCnab[];
  public Lojas: string[];
}
