import {Entity, model, property} from '@loopback/repository';

@model()
export class TipoTransacao extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  Tipo: number;

  @property({
    type: 'string',
    required: true,
  })
  Descricao: string;

  @property({
    type: 'string',
    required: true,
  })
  Natureza: string;

  @property({
    type: 'boolean',
    required: true,
  })
  Sinal: boolean;


  constructor(data?: Partial<TipoTransacao>) {
    super(data);
  }
}

export interface TipoTransacaoRelations {
  // describe navigational properties here
}

export type TipoTransacaoWithRelations = TipoTransacao & TipoTransacaoRelations;
