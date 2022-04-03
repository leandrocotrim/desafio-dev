import {CnabRepository} from '../cnab.repository';

export class CnabSeed {
  constructor(
    private cnabRepository: CnabRepository
  ) { }

  async seed() {
    const cnab = await this.cnabRepository.findOne({});
    if (cnab === null) {
      await this.cnabRepository.createAll(cnabs);
    }
  }
}

const cnabs = [
  {
    Comentario: 'Tipo da transação', Descricao: 'Tipo',
    Fim: 1, Inicio: 1, Tamanho: 1
  },
  {
    Comentario: 'Data da ocorrência', Descricao: 'Data',
    Fim: 2, Inicio: 9, Tamanho: 8
  },
  {
    Comentario: `Valor da movimentação. Obs.
      O valor encontrado no arquivo precisa ser divido por cem(valor / 100.00) para normalizá-lo.`,
    Descricao: 'Valor', Fim: 10, Inicio: 19, Tamanho: 10
  },
  {
    Comentario: 'CPF do beneficiário', Descricao: 'CPF',
    Fim: 20, Inicio: 30, Tamanho: 11
  },
  {
    Comentario: 'Cartão utilizado na transação', Descricao: 'Cartão',
    Fim: 31, Inicio: 42, Tamanho: 12
  },
  {
    Comentario: 'Hora da ocorrência atendendo ao fuso de UTC-3', Descricao: 'Hora',
    Fim: 43, Inicio: 48, Tamanho: 6
  },
  {
    Comentario: 'Nome do representante da loja', Descricao: 'Dono da loja',
    Fim: 49, Inicio: 62, Tamanho: 14
  },
  {
    Comentario: 'Nome da loja', Descricao: 'Nome loja',
    Fim: 81, Inicio: 63, Tamanho: 19
  },
];
