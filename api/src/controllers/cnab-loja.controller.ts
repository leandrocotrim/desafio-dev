import {
  CountSchema, repository, Where
} from '@loopback/repository';
import {
  get, param, response
} from '@loopback/rest';
import {CnabLojaFilter} from '../Dtos/cnab-loja-filter.model';
import {CnabLojaResult} from '../Dtos/cnab-loja-result.model';
import {ArquivoCnabRepository} from '../repositories';

export class CnabLojaController {
  constructor(
    @repository(ArquivoCnabRepository)
    public arquivoCnabRepository: ArquivoCnabRepository,
  ) { }

  @get('/cnab-loja/relatorio')
  @response(200, {
    description: 'Relatório CNAB loja model',
    content: {'application/json': {schema: CountSchema}},
  })
  async relatorio(
    @param.where(CnabLojaFilter) where?: Where<CnabLojaFilter>,
  ): Promise<CnabLojaResult[]> {
    return await this.arquivoCnabRepository
      .execute(
        `select
            ac.id
            , ac.nome
            , acc.linha
            , acc.cpf,
            , acc.cartao,
            , acc.donoloja
            , acc.nomeloja
            , aclc.tipo
            , aclc."data"
            , aclc.valor
            , aclc.hora
          from arquivocnab ac
          inner join arquivoconteudocnab acc on ac.id  = acc.id
          inner join arquivoconteudonormalizadocnab aclc on ac.id = aclc.id and acc.linha = aclc.linha
          where ac.id  = 1 and acc.nomeloja = ''
        `
      ) as CnabLojaResult[];
  }
}
