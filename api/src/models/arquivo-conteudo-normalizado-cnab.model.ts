import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    foreignKeys: {
      fk_ArquivoConteudoNormalizadoCnab_IdArquivoCnab: {
        name: 'fk_ArquivoConteudoNormalizadoCnab_IdArquivoCnab',
        entity: 'arquivocnab',
        entityKey: 'id',
        foreignKey: 'idarquivocnab',
        onDelete: 'CASCADE'
      },
      fk_ArquivoConteudoNormalizadoCnab_Tipo: {
        name: 'fk_ArquivoConteudoNormalizadoCnab_Tipo',
        entity: 'tipotransacao',
        entityKey: 'id',
        foreignKey: 'tipo',
        onDelete: 'CASCADE'
      },
    },
  },
})
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
    type: 'number',
    required: true,
  })
  Tipo: number;

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
