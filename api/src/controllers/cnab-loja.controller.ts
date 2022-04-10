import {
  CountSchema, repository
} from '@loopback/repository';
import {
  get, param, response
} from '@loopback/rest';
import {CnabLojaFilterDto} from '../Dtos/cnab-loja-filter.dto';
import {CnabLojaResultDto} from '../Dtos/cnab-loja-result.dto';
import {ArquivoCnabRepository, ArquivoConteudoCnabRepository} from '../repositories';

export class CnabLojaController {
  constructor(
    @repository(ArquivoCnabRepository)
    private arquivoCnabRepository: ArquivoCnabRepository,
    @repository(ArquivoConteudoCnabRepository)
    private arquivoConteudoCnabRepository: ArquivoConteudoCnabRepository,
  ) { }

  @get('/cnab-loja/filtros')
  @response(200, {
    description: 'Filtros do relatório CNAB loja',
    content: {'application/json': {schema: CountSchema}},
  })
  async filtros(): Promise<CnabLojaFilterDto> {
    const arquivosCnab = await this.arquivoCnabRepository.find();
    const arquivosConteudoCnab = await this.arquivoConteudoCnabRepository.find();

    return {
      ArquivosCnab: arquivosCnab,
      Lojas: [...new Set(arquivosConteudoCnab.map(result => result.NomeLoja))],
    };
  }

  @get('/cnab-loja/relatorio/{idArquivoCnab}/{nomeLoja}')
  @response(200, {
    description: 'Relatório CNAB loja',
    content: {'application/json': {schema: CountSchema}},
  })
  async relatorio(
    @param.path.number('idArquivoCnab') idArquivoCnab: number,
    @param.path.string('nomeLoja') nomeLoja: string,
  ): Promise<{result: CnabLojaResultDto[], saldo: number}> {

    const result = await this.arquivoCnabRepository
      .dataSource.execute(
        `select
            ac.id as IdArquivoCnab
            , ac.nome  as NomeArquivo
            , acc.linha as Linha
            , acc.cpf as Cpf
            , acc.cartao as Cartao
            , acc.donoloja as DonoLoja
            , acc.nomeloja as NomeLoja
            , aclc.tipo as Tipo
            , aclc."data" as Data
            , aclc.valor as Valor
            , aclc.hora as Hora
          from arquivocnab ac
          inner join arquivoconteudocnab acc on ac.id  = acc.idarquivocnab
          inner join arquivoconteudonormalizadocnab aclc on ac.id = aclc.idarquivocnab and acc.linha = aclc.linha
          where ac.id  = $1 and trim(acc.nomeloja) = trim($2)
        `, [idArquivoCnab, nomeLoja]
      );

    const saldo = result
      .map((item: any) => item.valor)
      .reduce((acumulador: number, itemValor: number) => (acumulador + itemValor));

    return {result, saldo};
  }
}
