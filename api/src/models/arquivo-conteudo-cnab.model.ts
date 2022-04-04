import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    foreignKeys: {
      fk_ArquivoConteudoCnab_IdArquivoCnab: {
        name: 'fk_ArquivoConteudoCnab_IdArquivoCnab',
        entity: 'arquivocnab',
        entityKey: 'id',
        foreignKey: 'idarquivocnab',
        onDelete: 'CASCADE'
      },
    },
  }
})
export class ArquivoConteudoCnab extends Entity {
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
    type: 'string',
    required: true,
  })
  Tipo: string;

  @property({
    type: 'string',
    required: true,
  })
  Data: string;

  @property({
    type: 'string',
    required: true,
  })
  Valor: string;

  @property({
    type: 'string',
    required: true,
  })
  Cpf: string;

  @property({
    type: 'string',
    required: true,
  })
  Cartao: string;

  @property({
    type: 'string',
    required: true,
  })
  Hora: string;

  @property({
    type: 'string',
    required: true,
  })
  DonoLoja: string;

  @property({
    type: 'string',
    required: true,
  })
  NomeLoja: string;


  constructor(data?: Partial<ArquivoConteudoCnab>) {
    super(data);
  }
}

export interface ArquivoConteudoCnabRelations {
  // describe navigational properties here
}

export type ArquivoConteudoCnabWithRelations = ArquivoConteudoCnab & ArquivoConteudoCnabRelations;
