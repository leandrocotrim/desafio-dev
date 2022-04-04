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
  Data: Date;

  @property({
    type: 'number',
    required: true,
    postgresql: {
      dataType: 'float4'
    }
  })
  Valor: number;

  @property({
    type: 'date',
    required: true,
  })
  Hora: Date;


  constructor(data?: Partial<ArquivoConteudoNormalizadoCnab>) {
    super(data);
  }
}

export interface ArquivoConteudoNormalizadoCnabRelations {
  // describe navigational properties here
}

export type ArquivoConteudoNormalizadoCnabWithRelations = ArquivoConteudoNormalizadoCnab & ArquivoConteudoNormalizadoCnabRelations;
