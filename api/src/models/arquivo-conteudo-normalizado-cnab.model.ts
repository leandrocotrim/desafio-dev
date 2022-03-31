import {Entity, model, property} from '@loopback/repository';

@model()
export class ArquivoConteudoNormalizadoCnab extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  Id?: number;

  @property({
    type: 'number',
    required: true,
  })
  IdArquivoCnab: number;

  @property({
    type: 'number',
    required: true,
  })
  Linha: number;

  @property({
    type: 'date',
    required: true,
  })
  Data: string;

  @property({
    type: 'number',
    required: true,
  })
  Valor: number;

  @property({
    type: 'date',
    required: true,
  })
  Hora: string;


  constructor(data?: Partial<ArquivoConteudoNormalizadoCnab>) {
    super(data);
  }
}

export interface ArquivoConteudoNormalizadoCnabRelations {
  // describe navigational properties here
}

export type ArquivoConteudoNormalizadoCnabWithRelations = ArquivoConteudoNormalizadoCnab & ArquivoConteudoNormalizadoCnabRelations;
