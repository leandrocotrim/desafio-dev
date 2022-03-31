import {Entity, model, property} from '@loopback/repository';

@model()
export class ArquivoCnab extends Entity {
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
  Nome: string;


  constructor(data?: Partial<ArquivoCnab>) {
    super(data);
  }
}

export interface ArquivoCnabRelations {
  // describe navigational properties here
}

export type ArquivoCnabWithRelations = ArquivoCnab & ArquivoCnabRelations;
