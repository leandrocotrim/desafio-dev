import {Entity, model, property} from '@loopback/repository';

@model()
export class Cnab extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  Id?: number;

  @property({
    type: 'string',
    required: true,
  })
  Descricao: string;

  @property({
    type: 'number',
    required: true,
  })
  Inicio: number;

  @property({
    type: 'number',
    required: true,
  })
  Fim: number;

  @property({
    type: 'number',
    required: true,
  })
  Tamanho: number;

  @property({
    type: 'string',
    required: true,
  })
  Comentario: string;


  constructor(data?: Partial<Cnab>) {
    super(data);
  }
}

export interface CnabRelations {
  // describe navigational properties here
}

export type CnabWithRelations = Cnab & CnabRelations;
