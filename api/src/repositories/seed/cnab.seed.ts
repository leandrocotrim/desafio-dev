import {CompoCnabEnum} from '../../models';
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
    Fim: 1, Inicio: 1, Tamanho: 1, Id: CompoCnabEnum.Tipo
  },
  {
    Comentario: 'Data da ocorrência', Descricao: 'Data',
    Fim: 9, Inicio: 2, Tamanho: 8, Id: CompoCnabEnum.Data
  },
  {
    Comentario: `Valor da movimentação. Obs.
      O valor encontrado no arquivo precisa ser divido por cem(valor / 100.00) para normalizá-lo.`,
    Descricao: 'Valor', Fim: 19, Inicio: 10, Tamanho: 10, Id: CompoCnabEnum.Valor
  },
  {
    Comentario: 'CPF do beneficiário', Descricao: 'CPF',
    Fim: 30, Inicio: 20, Tamanho: 11, Id: CompoCnabEnum.Cpf
  },
  {
    Comentario: 'Cartão utilizado na transação', Descricao: 'Cartão',
    Fim: 42, Inicio: 31, Tamanho: 12, Id: CompoCnabEnum.Cartao
  },
  {
    Comentario: 'Hora da ocorrência atendendo ao fuso de UTC-3', Descricao: 'Hora',
    Fim: 48, Inicio: 43, Tamanho: 6, Id: CompoCnabEnum.Hora
  },
  {
    Comentario: 'Nome do representante da loja', Descricao: 'Dono da loja',
    Fim: 62, Inicio: 49, Tamanho: 14, Id: CompoCnabEnum.DonoLoja
  },
  {
    Comentario: 'Nome da loja', Descricao: 'Nome loja',
    Fim: 81, Inicio: 63, Tamanho: 19, Id: CompoCnabEnum.NomeLoja
  },
];
