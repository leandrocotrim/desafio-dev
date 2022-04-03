import {TipoTransacaoRepository} from '../tipo-transacao.repository';

export class TipoTransacaoSeed {
  constructor(
    private tipoTransacaoRepository: TipoTransacaoRepository
  ) { }

  async seed() {
    const tipoTransacao = await this.tipoTransacaoRepository.findOne({});
    if (tipoTransacao === null) {
      await this.tipoTransacaoRepository.createAll(transacoes);
    }
  }
}

const transacoes = [
  {Tipo: 1, Descricao: 'Débito', Natureza: 'Entrada', Sinal: true},
  {Tipo: 2, Descricao: 'Boleto', Natureza: 'Saída', Sinal: false},
  {Tipo: 3, Descricao: 'Financiamento', Natureza: 'Saída', Sinal: false},
  {Tipo: 4, Descricao: 'Crédito', Natureza: 'Entrada', Sinal: true},
  {Tipo: 5, Descricao: 'Recebimento Empréstimo', Natureza: 'Entrada', Sinal: true},
  {Tipo: 6, Descricao: 'Vendas', Natureza: 'Entrada', Sinal: true},
  {Tipo: 7, Descricao: 'Recebimento TED', Natureza: 'Entrada', Sinal: true},
  {Tipo: 8, Descricao: 'Recebimento DOC', Natureza: 'Entrada', Sinal: true},
  {Tipo: 9, Descricao: 'Aluguel', Natureza: 'Saída', Sinal: false}
];
