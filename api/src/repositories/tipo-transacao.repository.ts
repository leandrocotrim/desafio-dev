import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgresDataSource} from '../datasources';
import {TipoTransacao, TipoTransacaoRelations} from '../models';

export class TipoTransacaoRepository extends DefaultCrudRepository<
  TipoTransacao,
  typeof TipoTransacao.prototype.Tipo,
  TipoTransacaoRelations
> {
  constructor(
    @inject('datasources.postgres') dataSource: PostgresDataSource,
  ) {
    super(TipoTransacao, dataSource);
  }
}
